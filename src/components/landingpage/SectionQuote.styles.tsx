import styled from "styled-components";

export const QuoteWrapper = styled.div`
    max-width: 410px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    padding: 4px 16px;
    text-align: left;
    background: #f6f6f6;
    border-radius: 18px;
`;

export const QuoteImg = styled.img`
    width: 64px;
    height: 64px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 24px;
    overflow: hidden;
    border-radius: 8px;
`;

export const QuoteText = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 8px;
    color: #000;
`;

export const QuoteBoldText = styled.p`
    margin-top: 1px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.35;
    color: #000;
`;
