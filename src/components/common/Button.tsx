import React, { FC, useContext } from "react";
import styled from "styled-components";
import { Icon } from "./Icon";
import { IconType } from "../../types";
import { Link } from "react-router-dom";
import { SwipeActionsContext } from "../../context/SwipeActionsProvider";

type RoundButtonProps = {
    label: IconType;
    backgroundColor: string;
    color: string;
    url: string;
};
export const RoundButton: FC<RoundButtonProps> = ({
    label,
    backgroundColor,
    color,
    url,
}) => {
    const linkType = IntExtLinkMap[label];
    // const { deleteSwipe, updateSwipe } = useContext(SwipeActionsContext);

    let button: JSX.Element;

    if (linkType === "External") {
        button = (
            <>
                <CircleWrapper backgroundColor={backgroundColor} color={color}>
                    <a href={url}>
                        <Icon label={label} className={"white"} />
                    </a>
                </CircleWrapper>
            </>
        );
    } else if (linkType === "Internal") {
        button = (
            <>
                {" "}
                <CircleWrapper backgroundColor={backgroundColor} color={color}>
                    <Link to={`/${url}`}>
                        <Icon label={label} className={"white"} />
                    </Link>
                </CircleWrapper>
            </>
        );
    } else {
        button = (
            <>
                {" "}
                <CircleWrapper backgroundColor={backgroundColor} color={color}>
                    <Icon label={label} className={"white"} />
                </CircleWrapper>
            </>
        );
    }

    return <>{button}</>;
};

type CircleWrapperProps = {
    backgroundColor?: string;
    color?: string;
};
const CircleWrapper = styled.div<CircleWrapperProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    width: 28px;
    padding: 0.25em 0.25em;
    border-radius: 50%;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
`;

const IntExtLinkMap = {
    hyperlink: "External",
    Share: "Internal",
    notes: "Internal",
    Delete: "Action",
    Edit: "Action",
};
