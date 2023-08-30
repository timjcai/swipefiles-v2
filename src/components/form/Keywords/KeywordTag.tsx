import React, { FC } from "react";
import styled from "styled-components";
import { Icon } from "../../common/Icon";

type KeywordTagProps = {
    tag: string;
    id: string;
    bgcolor?: string;
    color?: string;
    editable?: boolean;
    onXClick?: (e) => void;
};

export const KeywordTag: FC<KeywordTagProps> = ({
    tag,
    id,
    bgcolor,
    color,
    editable = false,
    onXClick = () => {},
}) => {
    return (
        <>
            <TagStyle role="button" bgcolor={bgcolor} color={color} id={id}>
                <p>{tag}</p>
                {editable && (
                    <TagButtonWrapper onClick={onXClick} data-label={id}>
                        {editable && <Icon label="Remove" data-label={id} />}
                    </TagButtonWrapper>
                )}
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
    gap: 10px;
`;

const TagButtonWrapper = styled.div``;
