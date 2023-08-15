import React, { ChangeEvent, FC, MouseEvent, useRef, useState } from "react";
import { TextLabelInput } from "../Input";
import styled from "styled-components";
import { KeywordTag } from ".";

type KeywordTagInputProps = {
    onArrayChange?: (newArray: string[] | undefined) => void;
};

export const KeywordTagInput: FC<KeywordTagInputProps> = ({
    onArrayChange,
}) => {
    const [keywordTags, setKeywordTags] = useState<string[] | []>([]);
    const Keyword = useRef<HTMLInputElement | null>(null);

    const addKeywords = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        let newArray;
        if (Keyword.current) {
            newArray = [...keywordTags, Keyword.current.value];
            setKeywordTags([...keywordTags, Keyword.current.value]);
        } else {
            console.log("error - keyword doesn't exist");
        }
        onArrayChange!(newArray);
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
                return <KeywordTag color={"rgb(28, 56, 41)"} tag={words} />;
            })}
        </div>
    );
};
