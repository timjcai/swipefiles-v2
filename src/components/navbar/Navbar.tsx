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
                <Link to="/pricing">Pricing</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/login">Log in</Link>
                <Link to="/register">Sign up</Link>
            </NavbarSection>
        </NavbarWrapper>
    );
};

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
    gap: 25px;
`;
