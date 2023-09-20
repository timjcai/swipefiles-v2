import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../common/Icon";
import { NavigationTypes } from "../../types";
import { ThemeButton } from "../../context";

export const Sidebar = () => {
    const [selected, setSelected] = useState(null);

    const handleClick = (e: MouseEvent) => {
        console.log(e.target.id);
        setSelected(e.target.id);
    };

    return (
        <SidebarWrapper>
            <StyledDiv padding={"3rem 1.5rem"} justify={"space-between"}>
                <div>
                    <BetweenRow>{/* <div>Logo</div> */}</BetweenRow>
                    <InlineColumn>
                        {/* <Link to="/dashboard">
                            <SidenavButton
                                label="Home"
                                selected={selected}
                                onClick={handleClick}
                            />
                        </Link> */}
                        <Link to="/swipes">
                            <SidenavButton
                                label="Home"
                                selected={selected}
                                onClick={handleClick}
                            />
                        </Link>
                        <Link to="/create">
                            <SidenavButton
                                label="Create"
                                selected={selected}
                                onClick={handleClick}
                            />
                        </Link>
                        {/* <Link to="/boards">
                            <SidenavButton
                                label="Boards"
                                selected={selected}
                                onClick={handleClick}
                            />
                        </Link> */}
                        <Link to="/tags">
                            <SidenavButton
                                label="Tags"
                                selected={selected}
                                onClick={handleClick}
                            />
                        </Link>
                    </InlineColumn>
                </div>
                <div>
                    <ThemeButton />
                    {/* <div>Picture</div> */}
                    <div>
                        <Link to="/settings" onClick={handleClick}>
                            <SidenavButton
                                label="Settings"
                                selected={selected}
                                onClick={handleClick}
                            />
                        </Link>
                    </div>
                </div>
            </StyledDiv>
        </SidebarWrapper>
    );
};

const SidebarWrapper = styled.aside`
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 100vh;
    background: #121212;
    color: #ffffff;
    z-index: 1;
`;

export const NonsidebarWrapper = styled.div`
    // background: #ffffff;
    height: 100vh;
    width: 100vw;
    padding-left: 64px;
    overflow: scroll;
`;

export const InAppWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

type StyledDivProps = {
    padding?: string;
    justify?: string;
    direction?: string;
};

const StyledDiv = styled.div<StyledDivProps>`
    display: flex;
    flex-direction: column;
    padding: ${(props) => props.padding};
    justify-content: ${(props) => props.justify};
    height: 100vh;
`;

const BetweenRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3rem;
`;

const InlineColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const IconSpacer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    justify-content: space-between;
    width: 20px;
    height: 20px;
    margin: 4px 10px 4px 10px;
`;

const Selected = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    background: #1164a3;
    border-radius: 6px;
    height: 28px;
    color: #ffffff;
    width: 100%;
`;

type SidenavButtonProps = {
    label: NavigationTypes;
    selected: NavigationTypes | null;
    onClick?: (e: MouseEvent) => void;
};

export const SidenavButton: FC<SidenavButtonProps> = ({
    label,
    selected,
    onClick,
}) => {
    const isSelected = selected === label;

    return (
        <>
            {isSelected ? (
                <IconSpacer id={label} onClick={onClick}>
                    <Selected>
                        <Icon label={label} />
                        <p>{label}</p>
                    </Selected>
                </IconSpacer>
            ) : (
                <IconSpacer id={label} onClick={onClick}>
                    <Icon label={label} />
                    <p>{label}</p>
                </IconSpacer>
            )}
        </>
    );
};
