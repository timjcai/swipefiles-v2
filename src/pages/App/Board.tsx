import React from "react";
import styled from "styled-components";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { Hyperlink, IDdetails, Notes } from "../../components/multistep";

export const Board = () => {
    const {
        steps,
        currentStepIndex,
        isFirstStep,
        isLastStep,
        back,
        next,
        step,
    } = useMultistepForm([<Hyperlink />, <IDdetails />, <Notes />]);

    return (
        <div>
            <h1>All Boards Page</h1>
            <FormContainer>
                <form>
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
                        {isLastStep ? (
                            <button type="button" onClick={next}>
                                Complete
                            </button>
                        ) : (
                            <button type="button" onClick={next}>
                                Next
                            </button>
                        )}
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
    max-width: 500px;
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
