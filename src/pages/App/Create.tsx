import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { Hyperlink, IDdetails, Notes } from "../../components/multistep";
import {
    Column1,
    Column2,
    ColumnContainer,
    ExitButton,
} from "../../components/common";
import { Swipecard } from "../../components/swipes/Swipecard";
import { ISwipeData, ITagDataObject, PlatformTypes } from "../../types";
import { Search } from "../../components/multistep/Search";
import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useAuth } from "../../hooks/useAuth";
import {
    DEFAULT_TAG_SETTINGS,
    INITIAL_FORMSTATE,
    randomColor,
} from "../../util";
import { TagContext } from "../../context/TagProvider";

export const Create: FC = () => {
    const [data, setData] = useState<Partial<ISwipeData>>(INITIAL_FORMSTATE);
    const [lastSwipe, setLastSwipe] = useState<string>("");
    const [previousTagIds, setPreviousTagIds] = useState<string[]>([]);
    const [currentKeyword, setCurrentKeyword] = useState<string>("");
    const [keywordPayload, setKeywordPayload] =
        useState<Partial<ITagDataObject>>(DEFAULT_TAG_SETTINGS);
    const user = useAuth();
    const { addSwipeOnTag } = useContext(TagContext);
    const {
        steps,
        currentStepIndex,
        isFirstStep,
        isLastStep,
        back,
        next,
        step,
        goTo,
    } = useMultistepForm([
        <Hyperlink {...data} updateFields={updateFields} />,
        <IDdetails
            {...data}
            updateFields={updateFields}
            handleSelectChange={handleSelectChange}
        />,
        <Search
            {...data}
            updateFields={updateFields}
            // handleSelectChange={handleSelectChange}
            handleKeywordState={handleCurrentKeywordState}
            deleteTags={deleteKeywordfromList}
            addTags={addKeywordtoList}
            allKeywords={data.keyword_tags}
            currentKeyword={currentKeyword}
        />,
        <Notes {...data} updateFields={updateFields} />,
    ]);

    function updateFields(fields: Partial<ISwipeData>) {
        setData((prev) => {
            return { ...prev, ...fields };
        });
    }

    function handleSelectChange(e) {
        const currentInput: keyof ISwipeData = "platform";
        const value: PlatformTypes = e.target.id;
        setData((prevState) => ({ ...prevState, [currentInput]: value }));
    }

    function deleteKeywordfromList(e) {
        e.preventDefault();
        const tag = e.target.id;
        const currentTags = [...data.keyword_tags];
        const index = currentTags.indexOf(tag);
        currentTags.splice(index, 1);
        setData((prevState) => ({
            ...prevState,
            ["keyword_tags"]: currentTags,
        }));
    }

    function addKeywordtoList(keyword: string): void {
        const keywordArray = data.keyword_tags;
        const currentPayload = keywordPayload;
        let keywordId: string;
        const existingTags = previousTagIds;
        currentPayload["tag"] = keyword;
        currentPayload["user_id"] = user.uid;
        const generatedColors = randomColor();
        currentPayload["colorcode"] = generatedColors.colorcode;
        currentPayload["colorname"] = generatedColors.colorname;
        setKeywordPayload(currentPayload);
        createTag(currentPayload).then((result) => {
            keywordId = result;
            existingTags.push(keywordId);
        });
        keywordArray.push(keyword);
        setPreviousTagIds(existingTags);
        setData((prevState) => ({
            ...prevState,
            ["keyword_tags"]: keywordArray,
        }));
        setCurrentKeyword("");
    }

    function handleCurrentKeywordState(e) {
        const value = e.target.value;
        setCurrentKeyword(value);
    }

    function resetForm() {
        setData({ ...INITIAL_FORMSTATE, ["keyword_tags"]: [] });
    }

    function submitHandler(e) {
        e.preventDefault();
        if (!isLastStep) return next();
        const payload = {
            ...data,
            user_id: user.uid,
            create_date: Timestamp.fromDate(new Date()),
        };
        createSwipe(payload);
        resetForm();
        connectSwipeIdtoTag(lastSwipe);
        goTo(0);
    }

    const createSwipe = async (payload: ISwipeData) => {
        const newSwipesRef = doc(collection(db, "swipes"));
        await setDoc(newSwipesRef, payload);
        // return swipeid
        setLastSwipe(newSwipesRef.id);
    };

    const createTag = async (keywordPayload: ITagDataObject) => {
        const tagRef = doc(collection(db, "tags"));
        await setDoc(tagRef, keywordPayload);
        return tagRef.id;
        // we will need to store TagIDs in state - current list of TagIds
    };

    const connectSwipeIdtoTag = async (swipeId: string) => {
        previousTagIds.forEach((tagId) => addSwipeOnTag(tagId, swipeId));
        setPreviousTagIds([]);
    };

    return (
        <div>
            <ExitButton />
            <h1>Create Swipe</h1>
            <p>{lastSwipe}</p>
            {previousTagIds.map((keywords) => {
                return <p>{keywords}</p>;
            })}
            <ColumnContainer>
                <Column1>
                    <FormContainer>
                        <form onSubmit={submitHandler}>
                            <StepContainer>
                                {currentStepIndex + 1}/{steps.length}
                            </StepContainer>
                            {step}
                            <ButtonContainer>
                                {!isFirstStep && (
                                    <button type="button" onClick={back}>
                                        Back
                                    </button>
                                )}
                                <button type="submit">
                                    {isLastStep ? "Complete" : "Next"}
                                </button>
                            </ButtonContainer>
                        </form>
                    </FormContainer>
                </Column1>
                <Column2 style={{ justifyContent: "flex-start" }}>
                    <Swipecard swipedata={data} onDeleteCard={async () => {}} />
                </Column2>
            </ColumnContainer>
        </div>
    );
};

const FormContainer = styled.div`
    position: relative;
    background: white;
    border: 1px solid black;
    padding: 2rem;
    margin: 1rem;
    border-radius: 0.5rem;
    width: 400px;
    align-self: center;
`;

const StepContainer = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;

const ButtonContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
`;
