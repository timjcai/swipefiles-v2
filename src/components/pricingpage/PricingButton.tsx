import React, { FC } from "react";
import styled from "styled-components";

type PricingButtonProps = {
    primaryCTA: boolean;
    text: string;
};

export const PricingCTAButton: FC<PricingButtonProps> = ({
    primaryCTA,
    text,
}) => {
    return <StyledButton primaryCTA={primaryCTA}>{text}</StyledButton>;
};

const StyledButton = styled.button<Partial<PricingButtonProps>>`
    border-radius: 45px;
    display: flex;
    justify-content: center;
    background-color: ${(props) => (props.primaryCTA ? "#166ee1;" : "#ffffff")};
    border: ${(props) =>
        props.primaryCTA ? `1px solid #166ee1;` : "1px solid #2e2f32"};
    color: ${(props) => (props.primaryCTA ? "#ffffff" : "#000000")};
    padding: 1rem 0rem;
`;
