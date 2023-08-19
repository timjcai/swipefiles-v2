import styled from "styled-components";

export const Badge = styled.div<BadgeStylingProps>`
    display: inline-block;
    padding: 4px 12px 5px 12px;
    font-weight: 700;
    line-height: 1.35;
    font-size: ${(props) => (props.size ? props.size : "12px")};
    color: ${(props) => (props.bgcolor ? props.bgcolor : "#0669ff")};
    background: ${(props) => (props.bgcolor ? props.bgcolor : "#e2eeff")};
    border-radius: 20px;
`;

type BadgeStylingProps = {
    size?: string;
    color?: string;
    bgcolor?: string;
};

export const LPImageContainer = styled.div`
    display: flex;
    padding: 0.25rem;
    border-radius: 1rem;
`;

export const LPImage = styled.img`
    max-width: 600px;
    border-radius: 1rem;
    border: 1px solid #1c19171a;
`;
