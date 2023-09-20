import React, { FC, useContext, useState, createContext } from "react";
import { Icon } from "../components/common/Icon";
import styled from "styled-components";

export const ThemeContext = createContext(null);

type Theme = "light" | "dark";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("light");
    const [loading, setLoading] = useState<boolean>(true);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const color = theme === "light" ? "#333" : "#FFF";
    const backgroundColor = theme === "light" ? "#FFF" : "#333";

    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const ThemeButton: FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            {theme === "dark" ? (
                <button onClick={toggleTheme}>
                    <IconSpacer>
                        <Icon label="Light" />
                        <p>Light Theme</p>
                    </IconSpacer>
                </button>
            ) : (
                <button onClick={toggleTheme}>
                    <IconSpacer>
                        <Icon label="Dark" />
                        Dark Theme
                    </IconSpacer>
                </button>
            )}
        </>
    );
};

const IconSpacer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    align-items: center;
    padding: 0;
    height: 20px;
`;
