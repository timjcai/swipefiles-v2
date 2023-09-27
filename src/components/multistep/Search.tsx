import React, { FC, useEffect, useState } from "react";
import { KWFormWrapper } from ".";
import { useGetAllBoards } from "../../hooks/useGetAllBoards";
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { KeywordTagInput } from "../form";

type SearchFormData = {
    keywords: string[];
    boards: string[];
};

type NoteFormProps = SearchFormData & {
    updateFields: (fields: Partial<SearchFormData>) => void;
    handleKeywordState: (e: PointerEvent) => void;
    deleteTags: (e: PointerEvent) => void;
    addTags: (keyword: string) => void;
    allKeywords: string[];
    currentKeyword: string;
};

type BoardProps = {
    title: string;
    user_id: string;
    id: string;
};

export const Search: FC<NoteFormProps> = ({
    keywords,
    boards,
    updateFields,
    handleKeywordState,
    deleteTags,
    addTags,
    allKeywords,
    currentKeyword,
}) => {
    const [allBoards, setAllBoards] = useState<BoardProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const user = useAuth();
    const boardCollection = collection(db, "boards");

    const getAllBoards = async (user) => {
        const userQuery = query(
            boardCollection,
            where("user_id", "==", `${user.uid}`)
        );

        setLoading(true);
        const data = await getDocs(userQuery);
        setAllBoards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
    };

    useEffect(() => {
        getAllBoards(user);
    }, [user]);

    return (
        <KWFormWrapper title="Search">
            <KeywordTagInput
                tags={allKeywords}
                addKeywordTags={() => addTags(currentKeyword)}
                deleteTags={deleteTags}
                handleKeywordState={handleKeywordState}
                state={currentKeyword}
            />
            {/* https://www.youtube.com/watch?v=V2zEAXLQbF4&t=973s&ab_channel=WebDevCody */}
            {/* <label htmlFor="board">Add to board?</label>
            <input
                type="text"
                id="board"
                value={boards}
                onChange={(e) => updateFields({ boards: e.target.value })}
            /> */}
        </KWFormWrapper>
    );
};
