import styled from "styled-components";
import React, { FC } from "react";
import { ISwipeData } from "../../types";
import { generateRandomString } from "../../util/randomUtils";
import { ColorBrandIcon } from "../common/ColorBrandIcon";
import {
    BottomRow,
    HighlightGroup,
    HighlightWrapper,
    KeywordWrapper,
    StyledSwipecard,
    SwipeLinkWrapper,
    SwipecardHeading,
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

    const numbBoards = board_id.length;
    const numbImages = images.length;

    return (
        <StyledSwipecard key={id}>
            <Link to={`/swipes/${id}`}>
                <SwipeLinkWrapper>
                    <TopRow>
                        {platform !== "" && <ColorBrandIcon label={platform} />}
                        {author !== "" && <Badge>@ {author}</Badge>}
                    </TopRow>
                    <SwipecardHeading key={title}>{title}</SwipecardHeading>
                    <KeywordWrapper>
                        {keyword_tags &&
                            keyword_tags.map((words) => {
                                return (
                                    <KeywordTag
                                        key={generateRandomString(10)}
                                        bgcolor={"#009956"}
                                        tag={words}
                                    />
                                );
                            })}
                    </KeywordWrapper>
                    <HighlightWrapper>
                        <HighlightGroup>
                            <p>Boards?: </p>
                            <KeywordTag
                                key={generateRandomString(10)}
                                bgcolor={"#F6635C"}
                                color={"#ffffff"}
                                tag={numbBoards}
                            />
                        </HighlightGroup>
                        <HighlightGroup>
                            <p>Images:</p>
                            <KeywordTag
                                key={generateRandomString(10)}
                                bgcolor={"#C23373"}
                                color={"#ffffff"}
                                tag={numbImages}
                            />
                        </HighlightGroup>
                    </HighlightWrapper>
                </SwipeLinkWrapper>
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
