import React, { FC } from "react";
import styled from "styled-components";

type KeywordTagProps = {
    tag: string;
    bgcolor?: string;
    color?: string;
};

export const KeywordTag: FC<KeywordTagProps> = ({ tag, bgcolor, color }) => {
    return (
        <>
            <TagStyle role="button" bgcolor={bgcolor} color={color}>
                {tag}
            </TagStyle>
        </>
    );
};

type TagStyleProps = {
    bgcolor?: string;
    color?: string;
};

const TagStyle = styled.div<TagStyleProps>`
    background-color: ${(props) => props.bgcolor};
    color: ${(props) => props.color};
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: fit-content;
    max-width: 200px;
    height: 20px;
    border-radius: 3px;
    padding-left: 8px;
    padding-right: 8px;
    margin: 2px 2px;
    font-size: 14px;
    line-height: 120%;
    overflow: hidden;
`;
