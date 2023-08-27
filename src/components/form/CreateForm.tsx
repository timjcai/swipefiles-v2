import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ISwipeData, PlatformTypes } from "../../types";
import { SelectInput, TextInput, TextareaInput } from "./Input";
import { KeywordTagInput } from ".";
import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useAuth } from "../../hooks/useAuth";
import { ALL_PLATFORMS } from "../../util/PlatformUtil";
import { Swipecard } from "../swipes/Swipecard";

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
    // const editInputValues = (e: ChangeEvent<HTMLInputElement>): void => {
    //     setCurrentKeyword(e.target.value);
    // };
    const [currentKeyword, setCurrentKeyword] = useState<string>("");
    const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

    useEffect(() => {
        if (payload.author) {
            setSubmitDisabled(false);
        }
    }, [payload]);

    const handleLabelChange = (e) => {
        const currentInput: keyof ISwipeData = e.target.id;
        console.log(currentInput);
        const value = e.target.value;
        console.log(value);
        setPayload((prevState) => ({ ...prevState, [currentInput]: value }));
    };

    const handleSelectChange = (e) => {
        const currentInput: keyof ISwipeData = "platform";
        const value: PlatformTypes = e.target.id;
        setPayload((prevState) => ({ ...prevState, [currentInput]: value }));
    };

    const deleteKeywordfromList = (e) => {
        e.preventDefault();
        const tag = e.target.id;
        const currentTags = [...payload.keyword_tags];
        const index = currentTags.indexOf(tag);
        currentTags.splice(index, 1);
        setPayload((prevState) => ({
            ...prevState,
            ["keyword_tags"]: currentTags,
        }));
    };

    const addKeywordtoList = (keyword: string): void => {
        console.log(keyword);
        const keywordArray = payload.keyword_tags;

        keywordArray.push(keyword);
        setPayload((prevState) => ({
            ...prevState,
            ["keyword_tags"]: keywordArray,
        }));
        setCurrentKeyword("");
        // if (Keyword.current) {
        //     newArray = [...keywordTags, Keyword.current.value];
        //     setKeywordTags([...keywordTags, Keyword.current.value]);
        // } else {
        //     console.log("error - keyword doesn't exist");
        // }
        // onArrayChange!(newArray);
    };

    const handleCurrentKeywordState = (e) => {
        const value = e.target.value;
        console.log(value);
        setCurrentKeyword(value);
    };

    // const handleHyperlinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const url = e.target.value;
    //     setPayload((prevState) => ({
    //         ...prevState,
    //         [hyperlink]: url,
    //     }));
    //     console.log(url);
    //     const platform = extractAndFormatDomain(url);

    //     setPayload((prevState) => ({
    //         ...prevState,
    //         [platform]: platform,
    //     }));
    // };

    // const handleKeywordTagChange = (arrayList) => {
    //     // setKeywordTags(arrayList);
    //     // setPayload((prevState) => ({
    //     //     ...prevState,
    //     //     ["keyword_tags"]: arrayList,
    //     // }));
    // };

    // const resetKeys = () => {
    //     setKeywordTagKey(Math.floor(Math.random() * 10) + 1);
    //     setPlatformKey(Math.floor(Math.random() * 10) + 11);
    // };

    const handleSubmission = (e) => {
        e.preventDefault();
        const currentPayload = {
            title: payload.title,
            author: payload.author,
            hyperlink: payload.hyperlink,
            images: [],
            keyword_tags: payload.keyword_tags,
            notes: payload.notes,
            platform: payload.platform,
            user_id: user?.uid,
            board_id: [],
            create_date: Timestamp.fromDate(new Date()),
        };
        console.log(currentPayload);
        resetForm();
        const createSwipe = async () => {
            const newSwipesRef = doc(collection(db, "swipes"));
            const docRef = await setDoc(newSwipesRef, currentPayload);
            docRef;
        };
        createSwipe();
    };

    const resetForm = () => {
        setPayload({
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
                        <SelectInput
                            placeholder={payload.platform}
                            label={"platform"}
                            cta={"Platform: "}
                            changeFunction={handleSelectChange}
                            data={ALL_PLATFORMS}
                            state={payload.platform}
                        />
                        <KeywordTagInput
                            // onArrayChange={handleKeywordTagChange}
                            tags={payload.keyword_tags}
                            addKeywordTags={() =>
                                addKeywordtoList(currentKeyword)
                            }
                            deleteTags={deleteKeywordfromList}
                            handleKeywordState={handleCurrentKeywordState}
                            state={currentKeyword}
                        />
                        {/* <ImageUploader /> */}
                        <TextareaInput
                            placeholder={"Add notes"}
                            label={"notes"}
                            cta={"Notes: "}
                            changeFunction={handleLabelChange}
                            state={payload.notes}
                        />
                        <button disabled={submitDisabled} type="submit">
                            Create Swipe
                        </button>

                        {/* <p>images</p>
            <p>hidden: user_id, id, board_id</p> */}
                    </StyledCreateForm>
                </Column1>
                <Column2>
                    <Swipecard
                        swipedata={payload}
                        onDeleteCard={async () => {}}
                        // key={payload.id}
                        // title={payload.title}
                        // author={payload.author}
                        // board_id={payload.board_id}
                        // hyperlink={payload.hyperlink}
                        // platform={payload.platform}
                        // user_id={payload.user_id}
                        // id={payload.id}
                        // notes={payload.notes}
                        // images={payload.images}
                        // keyword_tags={payload.keyword_tags}
                    />
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
