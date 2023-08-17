import styled from "styled-components";

export const LandingPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    background-color: #ffffff;
    color: #000;
`;

export const StyledSection = styled.section`
    margin-bottom: 200px;
`;

export const TwoColumn = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1224px;
    padding: 0 8%;
    margin: 0 auto;
`;

export const ColumnTextRight = styled.div`
    margin-left: 50px;
`;

export const ColumnTextLeft = styled.div`
    margin-right: 50px;
`;

export const InlineRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const StyledHeader = styled.header`
    margin-top: 250px;
`;
