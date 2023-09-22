import styled from "styled-components";

export const CenterColumn = styled.div`
    padding: 0 11%;
`;

export const CenteredHeading = styled.h1`
    display: flex;
    justify-content: center;
`;

export const Section = styled.section``;

export const CompareColumnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
`;

export const CompareColumn = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    border: 1px solid rgb(196, 199, 205);
    width: 100%;
    padding: 0px 0px 0px 5px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;

export const Grid2x2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    grid-template-columns: auto minmax(auto, 400px);
    font-size: 14px;
`;

export const InlineRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const FeatureListParagraph = styled.p`
    height: fit-content;
    margin-bottom: 12px;
    margin-top: -4px;
`;
