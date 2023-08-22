import styled from "styled-components";

export const StyledSwipecard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #000000;
    border-radius: 16px;
    max-width: 300px;
    min-height: 300px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 10px solid rgba(255, 255, 255, 0.3);
`;

export const SwipeLinkWrapper = styled.div`
    position: relative;
    width: 300px;
`;

export const TopRow = styled.div`
    padding: 1em 1.5em 0em 1.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const KeywordWrapper = styled.div`
    padding: 0.25em 1.25em;
    height: 2.8em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-x: clip;
    overflow-y: clip;
    color: beige;
`;

export const HighlightWrapper = styled.div`
    padding: 0em 1.25em;
    min-height: 1.4em;
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 10px;
    align-items: center;
`;

export const HighlightGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const BottomRow = styled.div`
    position: absolute;
    bottom: 0px;
    padding: 0.5em 1.5em;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 10px;
`;

export const SwipecardHeading = styled.h2`
    display: flex;
    width: 230px;
    font-size: 1.4em;
    height: 2.8em;
    text-wrap: wrap;
    overflow: hidden;
    padding: 0em 0em 0em 1em;
    margin-top: 0px;
`;
