import React, { FC, useState } from "react";
import { ISwipeData, ReadOnlyProps } from "../../types";
import { Link } from "react-router-dom";
import { KeywordSection, SummarySection } from ".";
import { QuillEditor } from "../quilljs";
import { KeywordTag, KeywordTagInput } from "../form";
import { Icon } from "../common";
import styled from "styled-components";

interface ISwipePage {
    swipedata: ISwipeData;
    updateFields?: (id: ISwipeData) => void;
    handleKeywordState: (e: PointerEvent) => void;
    deleteTags: (e: PointerEvent) => void;
    addTags: (keyword: string) => void;
    allKeywords: string[];
    currentKeyword: string;
}

export const EditSwipePage: FC<ISwipePage> = ({
    swipedata,
    updateFields,
    handleKeywordState,
    deleteTags,
    addTags,
    allKeywords,
    currentKeyword,
}) => {
    const {
        title,
        id,
        author,
        hyperlink,
        platform,
        keyword_tags: tags,
        user_id,
        board_id: boards,
    } = swipedata;

    return (
        <div>
            <div>
                <EditHeading
                    type="text"
                    onChange={(e) => updateFields({ title: e.target.value })}
                    value={title}
                />
                <SummarySection>
                    <p>User Id:</p>
                    <p>{user_id}</p>
                    <p className="author">Author:</p>
                    <EditInput
                        type="text"
                        onChange={(e) =>
                            updateFields({ author: e.target.value })
                        }
                        value={author}
                    />
                    <p className="hyperlink">Link:</p>
                    <EditInput
                        type="text"
                        onChange={(e) =>
                            updateFields({ hyperlink: e.target.value })
                        }
                        value={hyperlink}
                    />
                    <p className="platform">Platform:</p>
                    <p className="platform">{platform}</p>
                    <p className="board_id">Boards:</p>
                    <p className="board_id">{boards}</p>
                </SummarySection>
                <KeywordSection>
                    <KeywordTagInput
                        tags={allKeywords}
                        addKeywordTags={() => addTags(currentKeyword)}
                        deleteTags={deleteTags}
                        handleKeywordState={handleKeywordState}
                        state={currentKeyword}
                    />
                </KeywordSection>
                <p>{swipedata.notes}</p>
            </div>

            <QuillEditor />
        </div>
    );
};

export default EditSwipePage;

const EditInput = styled.input`
    border: none;
    outline: none;
    background: none;
    color: black;
    font-size: 16px;

    &:focus {
        border-bottom: 1px solid black;
    }
`;

const EditHeading = styled.input`
    border: none;
    outline: none;
    background: none;
    color: black;
    font-size: 3.2em;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 700;
    width: 100%;

    &:focus {
        border-bottom: 1px solid black;
    }
`;
