import React, { FC, FormEvent, useState } from "react";
import styled from "styled-components";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { Hyperlink, IDdetails, Notes } from "../../components/multistep";
import { Column1, Column2, ColumnContainer } from "../../components/common";
import { Swipecard } from "../../components/swipes/Swipecard";
import { ISwipeData, PlatformTypes } from "../../types";
import { Search } from "../../components/multistep/Search";
import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { useAuth } from "../../hooks/useAuth";

const INITIAL_FORMSTATE: ISwipeData = {
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
};

export const Create: FC = () => {
    const [data, setData] = useState<ISwipeData>(INITIAL_FORMSTATE);
    const [currentKeyword, setCurrentKeyword] = useState<string>("");
    const user = useAuth();
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

        keywordArray.push(keyword);
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
        const newForm = { ...INITIAL_FORMSTATE };
        // newForm["keyword_tags"] = [];
        console.log(newForm);
        setData(newForm);
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
        goTo(0);
    }

    const createSwipe = async (payload) => {
        const newSwipesRef = doc(collection(db, "swipes"));
        const docRef = await setDoc(newSwipesRef, payload);
        docRef;
    };

    return (
        <div>
            <h1>All Boards Page</h1>
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
    max-width: max-content;
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
