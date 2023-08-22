import React from "react";
import styled from "styled-components";
import { CreateForm } from "../../components/form/CreateForm";

export const Create = () => {
    return (
        <>
            <CreateForm />
        </>
    );
};

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;
