import styled from "styled-components";
import React, { FC } from "react";
import { ISwipeData } from "../../types";
import { generateRandomString } from "../../util/randomUtils";
import { ColorBrandIcon } from "../common/ColorBrandIcon";
import {
    BottomRow,
    KeywordWrapper,
    StyledSwipecard,
    TopRow,
} from "./Swipecard.styles";
import { Badge } from "../landingpage";
import { KeywordTag } from "../form";
import { Icon } from "../common/Icon";
import { RoundButton } from "../common/Button";
import { Link } from "react-router-dom";

export const Swipecard: FC<ISwipeData> = (swipedata) => {
    const {
        author,
        images,
        keyword_tags,
        hyperlink,
        notes,
        platform,
        title,
        board_id,
        user_id,
        id,
    } = swipedata;
    console.log(swipedata);

    return (
        <StyledSwipecard key={id}>
            <Link to={`/swipes/${id}`}>
                <TopRow>
                    {platform !== "" && <ColorBrandIcon label={platform} />}
                    {author !== "" && <Badge>{author}</Badge>}
                </TopRow>
                <h2 key={title}>{title}</h2>
                <KeywordWrapper>
                    {keyword_tags &&
                        keyword_tags.map((words) => {
                            return (
                                <KeywordTag
                                    key={generateRandomString(10)}
                                    color={"#009956"}
                                    tag={words}
                                />
                            );
                        })}
                </KeywordWrapper>
                <BottomRow>
                    <RoundButton
                        label={"hyperlink"}
                        backgroundColor="#3272F7"
                        color="#ffffff"
                        url={hyperlink}
                    />
                    <RoundButton
                        label={"notes"}
                        backgroundColor="#3272F7"
                        color="#ffffff"
                        url={hyperlink}
                    />
                    <RoundButton
                        label={"Share"}
                        backgroundColor="#3272F7"
                        color="#ffffff"
                        url={hyperlink}
                    />
                </BottomRow>
            </Link>

            {/* <p key={`${generateRandomString(10)}`}>@{author}</p>
            <p key={platform}>{platform}</p>
            <p key={board_id}>{board_id}</p>
            <p key={links}>{links}</p>
            <p key={notes}>{notes}</p> */}
        </StyledSwipecard>
    );
};
