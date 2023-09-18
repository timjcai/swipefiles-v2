import React, { FC } from "react";
import styled from "styled-components";
import { Icon } from "./Icon";
import { IconType } from "../../types";
import { Link } from "react-router-dom";

type RoundButtonProps = {
    label: IconType;
    bgcolor: string;
    color: string;
    url?: string;
    onClick?: (e: MouseEvent) => void;
};
export const RoundButton: FC<RoundButtonProps> = ({
    label,
    bgcolor,
    color,
    url,
    onClick,
}) => {
    const linkType = IntExtLinkMap[label];
    // const { deleteSwipe, updateSwipe } = useContext(SwipeActionsContext);

    let button: JSX.Element;

    if (linkType === "External") {
        button = (
            <>
                <CircleWrapper bgcolor={bgcolor} color={color}>
                    <a href={url}>
                        <Icon label={label} className={"white"} />
                    </a>
                </CircleWrapper>
            </>
        );
    } else if (linkType === "Internal") {
        button = (
            <>
                <CircleWrapper bgcolor={bgcolor} color={color}>
                    <Link to={`${url}`}>
                        <Icon label={label} className={"white"} />
                    </Link>
                </CircleWrapper>
            </>
        );
    } else {
        button = (
            <>
                <CircleWrapper
                    bgcolor={bgcolor}
                    color={color}
                    onClick={onClick}
                >
                    <Icon label={label} className={"white"} />
                </CircleWrapper>
            </>
        );
    }

    return <>{button}</>;
};

type CircleWrapperProps = {
    bgcolor?: string;
    color?: string;
    size?: string;
};
export const CircleWrapper = styled.div<CircleWrapperProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => (props.size ? props.size : "28px")};
    width: ${(props) => (props.size ? props.size : "28px")};
    padding: 0.25em 0.25em;
    border-radius: 50%;
    background-color: ${(props) => props.bgcolor};
    color: ${(props) => props.color};
`;

const IntExtLinkMap = {
    hyperlink: "External",
    Share: "Internal",
    notes: "Internal",
    Delete: "Action",
    Edit: "Internal",
};

export const ExitButton: FC = () => {
    return (
        <StaticExitButton>
            <Link to={"/swipes"}>
                <Icon label="Back" />
            </Link>
        </StaticExitButton>
    );
};

const StaticExitButton = styled.div`
    position: absolute;
    margin-left: -32px;
    top: 44px;
    font-size: 24px;
`;
