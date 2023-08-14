import React from "react";
import styled from "styled-components";

export const Navbar = () => {
    return (
        <Bar>
            <NavbarWrapper>
                <NavbarSection>
                    <p>Logo</p>
                </NavbarSection>
                <NavbarSection>
                    <p>Search</p>
                </NavbarSection>
                <NavbarSection>
                    <p>All Swipes</p>
                    <p>Settings</p>
                    <p>Create</p>
                </NavbarSection>
            </NavbarWrapper>
        </Bar>
    );
};

const Bar = styled.div`
    position: absolute;
    top: 1px;
    padding-left: 1em;
    padding-right: 1em;
    width: 80vw;
    text-align: center;
`;

const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    width: auto;
    top: 10px;
`;

const NavbarSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;
`;
