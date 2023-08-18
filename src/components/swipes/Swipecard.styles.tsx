import styled from "styled-components";

export const StyledSwipecard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #000000;
    border-radius: 16px;
    height: 400px;
    width: 400px;
`;

export const TopRow = styled.div`
    padding: 0.5em 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const KeywordWrapper = styled.div`
    padding: 0.5em 1em;
    height: 40px;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: auto;
`;

export const BottomRow = styled.div`
    padding: 0.5em 1em;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
`;
