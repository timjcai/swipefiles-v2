import React, { FC } from "react";
import styled from "styled-components";
import { Icon } from ".";

export type AccordionProps = {
    question: string;
    answer: string;
};

export const Accordion: FC<AccordionProps> = ({ question, answer }) => {
    return (
        <AccordionWrapper>
            <AccordionLine>
                <h3>{question}</h3>
                <Icon label={"Open"} />
            </AccordionLine>
            <AccordionDropDown></AccordionDropDown>
        </AccordionWrapper>
    );
};

const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const AccordionDropDown = styled.div``;

const AccordionLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position relative;

    &:hover {
        cursor: pointer;
    }
`;
