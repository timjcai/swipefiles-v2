import React, { FC, useRef, useState } from "react";
import styled from "styled-components";
import { FieldTypes, ISwipeData } from "../../types";
import { TextLabelInput } from "./Input";
import { KeywordTagInput } from ".";
import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

// type CreateFormProps = {
//     fields: keyof ISwipeData[] & FieldTypes[];
// };

export const CreateForm: FC = () => {
    const [payload, setPayload] = useState<ISwipeData | null>();
    const [images, setImages] = useState<string[] | null>();
    const [keywordTags, setKeywordTags] = useState<string[] | null>();

    const titleRef = useRef<HTMLInputElement | null>(null);
    const linkRef = useRef<HTMLInputElement | null>(null);
    const authorRef = useRef<HTMLInputElement | null>(null);
    const platformRef = useRef<HTMLInputElement | null>(null);
    const notesRef = useRef<HTMLInputElement | null>(null);
    // const editInputValues = (e: ChangeEvent<HTMLInputElement>): void => {
    //     setCurrentKeyword(e.target.value);
    // };

    const handleKeywordTagChange = (arrayList) => {
        setKeywordTags(arrayList);
    };

    const handleSubmission = (e) => {
        e.preventDefault();
        const currentPayload = {
            title: titleRef.current.value,
            author: authorRef.current.value,
            hyperlink: linkRef.current.value,
            images: [],
            keyword_tags: keywordTags,
            notes: notesRef.current.value,
            platform: platformRef.current.value,
            user_id: "test",
            board_id: [],
            create_date: Timestamp.fromDate(new Date()),
        };
        console.log(currentPayload);
        const createSwipe = async () => {
            const newSwipesRef = doc(collection(db, "swipes"));
            const docRef = await setDoc(newSwipesRef, currentPayload);
            docRef;
        };
        createSwipe();
    };

    return (
        <StyledCreateForm method="post" onSubmit={handleSubmission}>
            <TextLabelInput
                ref={titleRef}
                placeholder={"Add a custom title"}
                label={"title"}
                cta={"Title: "}
            />
            <TextLabelInput
                ref={linkRef}
                placeholder={"Add a link"}
                label={"hyperlink"}
                cta={"Link: "}
            />
            <TextLabelInput
                ref={authorRef}
                placeholder={"Who is the author?"}
                label={"author"}
                cta={"Author: "}
            />
            <TextLabelInput
                ref={platformRef}
                placeholder={"Which platform?"}
                label={"platform"}
                cta={"Platform: "}
            />
            <TextLabelInput
                ref={notesRef}
                placeholder={"Add notes"}
                label={"notes"}
                cta={"Notes: "}
            />
            <KeywordTagInput onArrayChange={handleKeywordTagChange} />
            <button type="submit">Create Swipe</button>
            {/* onclickAdd keywords - push value into keywords tag */}

            {/* <p>images</p>
            <p>hidden: user_id, id, board_id</p> */}
        </StyledCreateForm>
    );
};

const StyledCreateForm = styled.form`
    display: flex;
    flex-direction: column;
`;
