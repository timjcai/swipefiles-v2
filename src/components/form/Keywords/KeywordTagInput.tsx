import React, { FC, MouseEvent, useState } from "react";
import { TextInput } from "../Input";
import { KeywordTag } from ".";

type KeywordTagInputProps = {
    // onArrayChange?: (newArray?: string[]) => void;
    tags: string[];
    deleteTags: (e: MouseEvent) => void;
    addKeywordTags: (keyword: string) => void;
    handleKeywordState: (e) => void;
    state: string;
};

export const KeywordTagInput: FC<KeywordTagInputProps> = ({
    tags,
    deleteTags,
    addKeywordTags,
    handleKeywordState,
    state,
}) => {
    return (
        <div>
            <TextInput
                placeholder={"Add keywords"}
                label={"keyword_tags"}
                cta={"Keywords: "}
                changeFunction={handleKeywordState}
                state={state}
            />
            <br />
            <button type="button" onClick={addKeywordTags}>
                Add Keywords
            </button>
            <p>keyword tags</p>
            {tags.map((words) => {
                return (
                    <KeywordTag
                        id={words}
                        bgcolor={"rgb(28, 56, 41)"}
                        color={"#FFFFFF"}
                        tag={words}
                        editable={true}
                        onXClick={deleteTags}
                    />
                );
            })}
        </div>
    );
};
