import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type FormWrapperProps = {
    title: string;
    children: ReactNode;
};

export const FormWrapper: FC<FormWrapperProps> = ({ title, children }) => {
    return (
        <>
            <Heading>{title}</Heading>
            <ChildrenWrapper>{children}</ChildrenWrapper>
        </>
    );
};

const Heading = styled.h2`
    text-align: center;
    margin: 0;
    margin-bottom: 2rem;
`;

const ChildrenWrapper = styled.div`
    display: grid;
    gap: 1rem 0.5rem;
    justify-content: flex-start;
    grid-template-columns: auto minmax(auto, 400px);
`;

export const KWFormWrapper: FC<FormWrapperProps> = ({ title, children }) => {
    return (
        <>
            <Heading>{title}</Heading>
            <>{children}</>
        </>
    );
};
