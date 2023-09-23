import React, { FC, useState } from "react";
import styled from "styled-components";
import { Icon } from ".";

export type AccordionProps = {
    question: string;
    answer: string;
};

export const Accordion: FC<AccordionProps> = ({ question, answer }) => {
    const [dropdownActive, setDropdownActive] = useState(false);

    function toggleDropdown() {
        setDropdownActive((prevState) => !prevState);
    }

    return (
        <AccordionWrapper>
            <AccordionLine onClick={toggleDropdown}>
                <h3>{question}</h3>
                <Icon label={"Open"} />
            </AccordionLine>
            <AccordionDropDown active={dropdownActive}>
                <p>{answer}</p>
            </AccordionDropDown>
        </AccordionWrapper>
    );
};

const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

type DropdownProps = {
    active: boolean;
};

const AccordionDropDown = styled.div<DropdownProps>`
    display: ${(props) => (props.active ? "block" : "none")};
`;

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
