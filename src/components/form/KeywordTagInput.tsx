import React, { ChangeEvent, FC, MouseEvent, useRef, useState } from "react";
import { TextLabelInput } from "./Input";
import styled from "styled-components";

export const KeywordTagInput = () => {
    const [keywordTags, setKeywordTags] = useState<string[] | []>([]);
    const Keyword = useRef<HTMLInputElement | null>(null);

    const addKeywords = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (Keyword.current) {
            setKeywordTags([...keywordTags, Keyword.current.value]);
        } else {
            console.log("error - keyword doesn't exist");
        }
    };

    return (
        <div>
            <TextLabelInput
                ref={Keyword}
                placeholder={"Add keywords"}
                label={"keyword_tags"}
                cta={"Keywords: "}
            />
            <p></p>
            <button onClick={addKeywords}>Add Keywords</button>
            <p>keyword tags</p>
            {keywordTags.map((words) => {
                return <KWTag color={"rgb(28, 56, 41)"} tag={words} />;
            })}
        </div>
    );
};

type KWTagProps = {
    tag: string;
    color: string;
};

export const KWTag: FC<KWTagProps> = ({ tag, color }) => {
    return (
        <>
            <TagStyle role="button" color={color}>
                {tag}
            </TagStyle>
        </>
    );
};

const TagStyle = styled.div`
    background-color: ${(props) => props.color};
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
