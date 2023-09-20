import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import { Badge } from "../landingpage";
import { Logo } from "../common/Logo";

export const Navbar = () => {
    const user = useAuth();
    return (
        <NavbarWrapper>
            <NavbarSection>
                <Link to="/">
                    <Logo />
                </Link>
            </NavbarSection>
            <NavbarSection>
                <Link to="/pricing">Pricing</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/login">Log in</Link>
                {!user && (
                    <Badge size="16px">
                        <Link to="/register">Sign up</Link>
                    </Badge>
                )}
                {user && (
                    <Badge size="16px">
                        <Link to="/swipes">Dashboard</Link>
                    </Badge>
                )}
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
    align-items: center;
    justify-content: space-around;
    gap: 25px;
`;
