import styled from "styled-components";
import React, { FC } from "react";
import { ISwipeData } from "../../types";
import { generateRandomString } from "../../util/randomUtils";

export const Swipecard: FC<ISwipeData> = (swipedata) => {
    const {
        author,
        images,
        keyword_tags,
        links,
        notes,
        platform,
        title,
        board_id,
        user_id,
        id,
    } = swipedata;

    return (
        <div key={id}>
            <h1 key={title}>{title}</h1>
            {keyword_tags &&
                keyword_tags.map((words) => {
                    return <p key={generateRandomString(10)}>{words}</p>;
                })}
            <p key={`${generateRandomString(10)}`}>@{author}</p>
            <p key={platform}>{platform}</p>
            <p key={board_id}>{board_id}</p>
            <p key={links}>{links}</p>
            <p key={notes}>{notes}</p>
        </div>
    );
};
