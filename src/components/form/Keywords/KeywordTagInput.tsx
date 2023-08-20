import React, { ChangeEvent, FC, MouseEvent, useRef, useState } from "react";
import { TextLabelInput } from "../Input";
import styled from "styled-components";
import { KeywordTag } from ".";

type KeywordTagInputProps = {
    onArrayChange?: (newArray: string[] | undefined) => void;
    key: number;
};

export const KeywordTagInput: FC<KeywordTagInputProps> = ({
    onArrayChange,
    key,
}) => {
    const [keywordTags, setKeywordTags] = useState<string[] | []>([]);
    const Keyword = useRef<HTMLInputElement | null>(null);

    const handleRemoveClick = (e) => {
        const removeValue = e.target.dataset.label;
        const currentArray = [...keywordTags];
        const index = currentArray.indexOf(removeValue);
        currentArray.splice(index, 1);
        setKeywordTags(currentArray);
        onArrayChange!(currentArray);
    };

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
        <div key={key}>
            <TextLabelInput
                ref={Keyword}
                placeholder={"Add keywords"}
                label={"keyword_tags"}
                cta={"Keywords: "}
            />
            <br />
            <button onClick={addKeywords}>Add Keywords</button>
            <p>keyword tags</p>
            {keywordTags.map((words) => {
                return (
                    <KeywordTag
                        id={words}
                        bgcolor={"rgb(28, 56, 41)"}
                        color={"#FFFFFF"}
                        tag={words}
                        editable={true}
                        onXClick={handleRemoveClick}
                    />
                );
            })}
        </div>
    );
};
