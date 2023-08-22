import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FieldTypes, ISwipeData, PlatformTypes } from "../../types";
import { SelectInput, TextInput, TextLabelInput, TextareaInput } from "./Input";
import { KeywordTagInput } from ".";
import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useAuth } from "../../hooks/useAuth";
import { activate } from "firebase/remote-config";
import { ALL_PLATFORMS, extractAndFormatDomain } from "../../util/PlatformUtil";
import { Swipecard } from "../swipes/Swipecard";

// type CreateFormProps = {
//     fields: keyof ISwipeData[] & FieldTypes[];
// };

export const CreateForm: FC = () => {
    const user = useAuth();
    const [payload, setPayload] = useState<ISwipeData>({
        author: "",
        board_id: [],
        images: [],
        keyword_tags: [],
        hyperlink: "",
        notes: "",
        platform: "",
        title: "",
        user_id: "",
        id: "",
    });
    // const [images, setImages] = useState<string[] | null>();

    const [title, setTitle] = useState<string>("");
    const [hyperlink, setHyperlink] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [notes, setNotes] = useState<string>("");
    const [platform, setPlatform] = useState<string>("");

    const [keywordTags, setKeywordTags] = useState<string[] | null>();
    const [keywordTagKey, setKeywordTagKey] = useState(1);
    const [platformKey, setPlatformKey] = useState(10000);

    // const editInputValues = (e: ChangeEvent<HTMLInputElement>): void => {
    //     setCurrentKeyword(e.target.value);
    // };

    const handleLabelChange = (e) => {
        const currentInput: keyof ISwipeData = e.target.id;
        const value = e.target.value;
        setPayload((prevState) => ({ ...prevState, [currentInput]: value }));
    };

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleSelectChange = (e) => {
        const currentInput: keyof ISwipeData = "platform";
        const value: PlatformTypes = e.target.id;
        setPayload((prevState) => ({ ...prevState, [currentInput]: value }));
    };

    const handleHyperlinkChange = (e: ChangeEvent<HTMLInputElement>) => {
        const url = e.target.value;
        setHyperlink(url);
        const platform = extractAndFormatDomain(url);
        setPlatform(platform);
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

    const resetKeys = () => {
        setKeywordTagKey(Math.floor(Math.random() * 10) + 1);
        setPlatformKey(Math.floor(Math.random() * 10) + 11);
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
        resetForm();
        // const createSwipe = async () => {
        //     const newSwipesRef = doc(collection(db, "swipes"));
        //     const docRef = await setDoc(newSwipesRef, currentPayload);
        //     docRef;
        // };
        // createSwipe();
    };

    const resetForm = () => {
        setTitle("");
        setAuthor("");
        setHyperlink("");
        setKeywordTags([]);
        setPlatform("");
        setNotes("");
        resetKeys();
    };

    return (
        <>
            <ColumnContainer>
                <Column1>
                    <h1>Create Swipecard</h1>
                    <StyledCreateForm method="post" onSubmit={handleSubmission}>
                        <TextInput
                            placeholder={"Add a custom title"}
                            label={"title"}
                            cta={"Title: "}
                            changeFunction={handleLabelChange}
                            state={payload.title}
                        />
                        <TextInput
                            placeholder={"Add a custom hyperlink"}
                            label={"hyperlink"}
                            cta={"Hyperlink: "}
                            changeFunction={handleLabelChange}
                            state={payload.hyperlink}
                        />
                        <TextInput
                            placeholder={"Add a custom author"}
                            label={"author"}
                            cta={"Author: "}
                            changeFunction={handleLabelChange}
                            state={payload.author}
                        />
                        {/* <TextLabelInput
                ref={platformRef}
                placeholder={"Which platform?"}
                label={"platform"}
                cta={"Platform: "}
            /> */}
                        <SelectInput
                            key={platformKey}
                            placeholder={platform}
                            label={"Platform"}
                            cta={"Platform: "}
                            changeFunction={handleSelectChange}
                            data={ALL_PLATFORMS}
                            state={payload.platform}
                        />
                        <KeywordTagInput
                            onArrayChange={handleKeywordTagChange}
                            key={keywordTagKey}
                        />
                        <TextareaInput
                            placeholder={"Add notes"}
                            label={"notes"}
                            cta={"Notes: "}
                            changeFunction={handleLabelChange}
                            state={payload.notes}
                        />
                        <button type="submit">Create Swipe</button>
                        {/* onclickAdd keywords - push value into keywords tag */}

                        {/* <p>images</p>
            <p>hidden: user_id, id, board_id</p> */}
                    </StyledCreateForm>
                </Column1>
                <Column2>
                    {payload && (
                        <Swipecard
                            key={payload.id}
                            title={payload.title}
                            author={payload.author}
                            board_id={payload.board_id}
                            hyperlink={payload.hyperlink}
                            platform={payload.platform}
                            user_id={payload.user_id}
                            id={payload.id}
                            notes={payload.notes}
                            images={payload.images}
                            keyword_tags={payload.keyword_tags}
                        />
                    )}
                </Column2>
            </ColumnContainer>
        </>
    );
};

const StyledCreateForm = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 16px;
`;

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Column1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`;

const Column2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
`;
