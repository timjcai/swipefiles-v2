import styled from "styled-components";

export const StyledCreateForm = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 16px;
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1200px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Column1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`;

export const Column2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
`;
