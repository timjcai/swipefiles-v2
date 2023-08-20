import React, { ChangeEvent, FC, useRef, useState } from "react";
import styled from "styled-components";
import { FieldTypes, ISwipeData } from "../../types";
import { SelectInput, TextInput, TextLabelInput, TextareaInput } from "./Input";
import { KeywordTagInput } from ".";
import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useAuth } from "../../hooks/useAuth";
import { activate } from "firebase/remote-config";
import { ALL_PLATFORMS } from "../../util/PlatformUtil";

// type CreateFormProps = {
//     fields: keyof ISwipeData[] & FieldTypes[];
// };

export const CreateForm: FC = () => {
    const user = useAuth();
    const [payload, setPayload] = useState<ISwipeData | null>();
    const [images, setImages] = useState<string[] | null>();

    const [title, setTitle] = useState<string>("");
    const [hyperlink, setHyperlink] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [notes, setNotes] = useState<string>("");
    const [platform, setPlatform] = useState<string>("");

    const [keywordTags, setKeywordTags] = useState<string[] | null>();

    // const editInputValues = (e: ChangeEvent<HTMLInputElement>): void => {
    //     setCurrentKeyword(e.target.value);
    // };

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleHyperlinkChange = (e: ChangeEvent<HTMLInputElement>) => {
        setHyperlink(e.target.value);
    };

    const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.target.value);
    };

    const handleNotesChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNotes(e.target.value);
    };

    const handlePlatformChange = (e) => {
        console.log(e.target.id);
        setPlatform(e.target.id);
    };

    const handleKeywordTagChange = (arrayList) => {
        setKeywordTags(arrayList);
    };

    const handleSubmission = (e) => {
        e.preventDefault();
        const currentPayload = {
            title: title,
            author: author,
            hyperlink: hyperlink,
            images: [],
            keyword_tags: keywordTags,
            notes: notes,
            platform: platform,
            user_id: user?.uid,
            board_id: [],
            create_date: Timestamp.fromDate(new Date()),
        };
        console.log(currentPayload);
        // const createSwipe = async () => {
        //     const newSwipesRef = doc(collection(db, "swipes"));
        //     const docRef = await setDoc(newSwipesRef, currentPayload);
        //     docRef;
        // };
        // createSwipe();
    };

    const resetForm = () => {};

    return (
        <StyledCreateForm method="post" onSubmit={handleSubmission}>
            <TextInput
                placeholder={"Add a custom title"}
                label={"title"}
                cta={"Title: "}
                changeFunction={handleTitleChange}
                state={title}
            />
            <TextInput
                placeholder={"Add a custom hyperlink"}
                label={"hyperlink"}
                cta={"Hyperlink: "}
                changeFunction={handleHyperlinkChange}
                state={hyperlink}
            />
            <TextInput
                placeholder={"Add a custom author"}
                label={"author"}
                cta={"Author: "}
                changeFunction={handleAuthorChange}
                state={author}
            />
            {/* <TextLabelInput
                ref={platformRef}
                placeholder={"Which platform?"}
                label={"platform"}
                cta={"Platform: "}
            /> */}
            <SelectInput
                placeholder={""}
                label={""}
                cta={"Platform: "}
                changeFunction={handlePlatformChange}
                data={ALL_PLATFORMS}
            />
            <KeywordTagInput onArrayChange={handleKeywordTagChange} />
            <TextareaInput
                placeholder={"Add notes"}
                label={"notes"}
                cta={"Notes: "}
                changeFunction={handleNotesChange}
            />
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
    font-size: 16px;
`;
