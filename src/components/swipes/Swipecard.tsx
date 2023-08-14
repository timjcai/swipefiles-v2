import styled from "styled-components";
import React from "react";
import { ISwipeData } from "../../types";

export const Swipecard = (swipedata: ISwipeData) => {
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
    } = swipedata;

    return (
        <div>
            <h1>{title}</h1>
            {keyword_tags &&
                keyword_tags.map((words) => {
                    return <p>{words}</p>;
                })}
            <p>@{author}</p>
            <p>{platform}</p>
            <p>{board_id}</p>
            <p>{links}</p>
            <p>{notes}</p>
        </div>
    );
};
