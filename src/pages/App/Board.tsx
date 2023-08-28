import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { Hyperlink, IDdetails, Notes } from "../../components/multistep";
import {
    Column1,
    Column2,
    ColumnContainer,
    StyledCreateForm,
} from "../../components/common";
import { Swipecard } from "../../components/swipes/Swipecard";
import { ISwipeData, PlatformTypes } from "../../types";

type FormData = {
    hyperlink: string;
    title: string;
    author: string;
    platform: string;
    images: string[];
    board_id: string[];
    notes: string;
    keyword_tags: string[];
    user_id: string;
    id: string;
};

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

export const Board = () => {
    const [data, setData] = useState<ISwipeData>(INITIAL_FORMSTATE);

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

    const {
        steps,
        currentStepIndex,
        isFirstStep,
        isLastStep,
        back,
        next,
        step,
    } = useMultistepForm([
        <Hyperlink {...data} updateFields={updateFields} />,
        <IDdetails
            {...data}
            updateFields={updateFields}
            handleSelectChange={handleSelectChange}
        />,
        <Notes {...data} updateFields={updateFields} />,
    ]);

    function submitHandler(e: FormEvent) {
        e.preventDefault();
        if (!isLastStep) return next();
        console.log(data);
        alert("successful account creation");
    }

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
                                <button type="submit" onClick={next}>
                                    {isLastStep ? "Complete" : "Next"}
                                </button>
                            </ButtonContainer>
                        </form>
                    </FormContainer>
                </Column1>
                <Column2>
                    <Swipecard
                        swipedata={data}
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
