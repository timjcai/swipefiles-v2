import styled from "styled-components";

export const SummarySection = styled.section`
    display: grid;
    gap: 0rem 0.5rem;
    justify-content: flex-start;
    grid-template-columns: 160px minmax(auto, 80vw);
    grid-template-rows: repeat(6, 28px);
    align-items: center;
`;

export const KeywordSection = styled.section`
    display: flex;
    flex-direction: column;
`;
