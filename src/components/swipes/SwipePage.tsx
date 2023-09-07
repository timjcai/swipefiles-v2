import React, { FC, useContext } from "react";
import { ISwipeData } from "../../types";
import { Link } from "react-router-dom";
import { KeywordSection, SummarySection } from ".";
import { QuillEditor } from "../quilljs";
import { KeywordTag } from "../form";
import { Icon } from "../common";
import { TagContext } from "../../context/TagProvider";

interface ISwipePage {
    swipedata: ISwipeData;
}

export const SwipePage: FC<ISwipePage> = ({ swipedata }) => {
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

    console.log(tags);
    const { allTags } = useContext(TagContext);

    console.log(allTags);

    return (
        <div>
            <h1>{title}</h1>
            <SummarySection>
                <p>User Id:</p>
                <p>{user_id}</p>
                <p>Author:</p>
                <p>{author}</p>
                <p>Link:</p>
                <p style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {hyperlink}
                </p>
                <p>Platform:</p>
                <p>{platform}</p>
                <p>Boards:</p>
                <p>{boards}</p>
            </SummarySection>
            <KeywordSection>
                {tags.map((tag) => {
                    return (
                        <KeywordTag
                            id={tag}
                            key={tag}
                            tag={tag}
                            bgcolor={"blue"}
                            color={"white"}
                            onXClick={() => {}}
                        />
                    );
                })}
            </KeywordSection>
            <p>{swipedata.notes}</p>
            <QuillEditor />
        </div>
    );
};
