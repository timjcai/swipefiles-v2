import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { Hyperlink, IDdetails, Notes } from "../../components/multistep";

type FormData = {
    hyperlink: string;
    title: string;
    author: string;
    platform: string;
    keywords: string;
    images: string;
    boards: string;
    notes: string;
};

const INITIAL_FORMSTATE: FormData = {
    hyperlink: "",
    title: "",
    author: "",
    platform: "",
    keywords: "",
    images: "",
    boards: "",
    notes: "",
};

export const Board = () => {
    const [data, setData] = useState(INITIAL_FORMSTATE);

    function updateFields(fields: Partial<FormData>) {
        setData((prev) => {
            return { ...prev, ...fields };
        });
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
        <IDdetails {...data} updateFields={updateFields} />,
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
