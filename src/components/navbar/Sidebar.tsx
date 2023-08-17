import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../common/Icon";

export const Sidebar = () => {
    return (
        <SidebarWrapper>
            <StyledDiv padding={"3rem 1.5rem"} justify={"space-between"}>
                {" "}
                <div>
                    <BetweenRow>
                        <div>Logo</div>
                    </BetweenRow>
                    <InlineColumn>
                        <Link to="/dashboard">
                            <Icon label="Home" />
                            <span> </span>
                            Home
                        </Link>
                        <Link to="/swipes">
                            {" "}
                            <Icon label="Swipes" />
                            <span> </span>
                            Swipes
                        </Link>
                        <Link to="/create">
                            {" "}
                            <Icon label="Create" />
                            <span> </span>
                            Create
                        </Link>
                        <Link to="/boards">
                            {" "}
                            <Icon label="Boards" />
                            <span> </span>
                            Boards
                        </Link>
                    </InlineColumn>
                </div>
                <div>
                    <div>Picture</div>
                    <div>
                        {" "}
                        <Link to="/settings">
                            {" "}
                            <Icon label="Settings" />
                            <span> </span>
                            Settings
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
    width: 200px;
    height: 100vh;
    background: #121212;
    color: #ffffff;
    z-index: 1;
`;

export const NonsidebarWrapper = styled.div`
    background: #ffffff;
    height: 100vh;
    width: 100vw;
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
