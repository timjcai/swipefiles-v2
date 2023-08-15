import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarSection>
                <Link to="/">Logo</Link>
            </NavbarSection>
            <NavbarSection>
                <Link to="/swipes">Swipes</Link>
                <Link to="/boards">Boards</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/create">Create</Link>
            </NavbarSection>
        </NavbarWrapper>
    );
};

const Bar = styled.div`
    top: 1px;
    text-align: center;
`;

const NavbarWrapper = styled.div`
    position: sticky;
    padding: 20px 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const NavbarSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;
`;
