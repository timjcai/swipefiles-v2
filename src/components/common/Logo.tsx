import React, { FC, useContext } from "react";
import styled from "styled-components";
import SwipeLogo from "../../assets/swipelogo(2).png";
import BlackSwipeLogo from "../../assets/blackswipe.png";
import WhiteSwipeLogo from "../../assets/whiteswipe.png";
import { ThemeContext } from "../../context";

export const Logo: FC = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {theme === "light" ? (
                <LogoContainer>
                    {/* <LogoImg src={SwipeLogo} /> */}
                    <LogoImg src={WhiteSwipeLogo} />
                    Swipe
                </LogoContainer>
            ) : (
                <LogoContainer>
                    {/* <LogoImg src={SwipeLogo} /> */}
                    <LogoImg src={BlackSwipeLogo} />
                    Swipe
                </LogoContainer>
            )}
        </>
    );
};

const LogoImg = styled.img`
    max-height: 50px;
    width: auto;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
`;
