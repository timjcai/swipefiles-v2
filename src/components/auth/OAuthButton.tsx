import React, { FC, useState } from "react";
import styled from "styled-components";
import { Icon } from "../common/Icon";
import { PlatformTypes } from "../../types";

type OAuthButtonProps = {
    label: PlatformTypes;
    authFunction: () => void;
    cta?: string;
};
export const OAuthButton: FC<OAuthButtonProps> = ({
    label,
    authFunction,
    cta,
}) => {
    // const [value, setValue] = useState();

    const handleOAuthClick = (e) => {
        e.preventDefault();
        authFunction();
    };

    return (
        <StyledOAuthButton onClick={handleOAuthClick}>
            <IconWrapper>
                <Icon label={label} />
            </IconWrapper>
            <OAuthText>
                {cta} {label}
            </OAuthText>
        </StyledOAuthButton>
    );
};

const StyledOAuthButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.2em 1.2em;
    font-size: 1em;
    font-weight: 400;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    margin-bottom: 8px;
    color: #ffffff;
`;

const OAuthText = styled.p`
    color: #ffffff;
`;

const IconWrapper = styled.div`
    position: absolute;
    left: 100px;
`;
