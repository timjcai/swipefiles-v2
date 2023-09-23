import React from "react";
import styled from "styled-components";

export const PricingAdditionalQuestions = () => {
    return (
        <AdditionalQuestionsCol>
            <h2>Additional questions?</h2>
            <AdditionalQuestionsRow>
                <AdditionalQuestionsCol>
                    <GreyHeader>Billing</GreyHeader>
                    <a>Billing FAQ</a>
                </AdditionalQuestionsCol>
                <AdditionalQuestionsCol>
                    <GreyHeader>Support</GreyHeader>
                    <a>Contact Support</a>
                </AdditionalQuestionsCol>
                <AdditionalQuestionsCol>
                    <GreyHeader>Sales</GreyHeader>
                    <a>Contact Sales</a>
                </AdditionalQuestionsCol>
            </AdditionalQuestionsRow>
        </AdditionalQuestionsCol>
    );
};

const AdditionalQuestionsCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AdditionalQuestionsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
`;

const GreyHeader = styled.p`
    color: hsl(0, 0%, 20%);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.5;
    font-weight: 475;
`;
