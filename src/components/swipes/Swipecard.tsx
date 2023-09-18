import styled from "styled-components";
import React, { FC, useContext } from "react";
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
import { TagContext } from "../../context/TagProvider";

type SwipecardProps = {
    swipedata: ISwipeData;
    onDeleteCard: (id: string) => Promise<void>;
};

export const Swipecard: FC<SwipecardProps> = ({ swipedata, onDeleteCard }) => {
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

    const { generateColorMap } = useContext(TagContext);

    const colorMap = generateColorMap();

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
                    <SwipecardHeading>{title}</SwipecardHeading>
                    <KeywordWrapper>
                        {keyword_tags &&
                            keyword_tags.map((tag) => {
                                return (
                                    <KeywordTag
                                        id={tag}
                                        key={tag}
                                        bgcolor={
                                            colorMap[tag]
                                                ? colorMap[tag]
                                                : "grey"
                                        }
                                        tag={tag}
                                    />
                                );
                            })}
                    </KeywordWrapper>
                    <HighlightWrapper>
                        <HighlightGroup>
                            <p>Boards?: </p>
                            <KeywordTag
                                bgcolor={"#F6635C"}
                                color={"#ffffff"}
                                tag={numbBoards}
                            />
                        </HighlightGroup>
                        <HighlightGroup>
                            <p>Images:</p>
                            <KeywordTag
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
                        bgcolor="#3272F7"
                        color="#ffffff"
                        url={hyperlink}
                    />
                    <RoundButton
                        label={"Edit"}
                        bgcolor="#3272F7"
                        color="#ffffff"
                        url={`/swipes/edit/${id}`}
                    />
                    <RoundButton
                        label={"Share"}
                        bgcolor="#3272F7"
                        color="#ffffff"
                        url={hyperlink}
                    />
                    <RoundButton
                        label={"Delete"}
                        bgcolor="#C70039"
                        color="#ffffff"
                        onClick={(e) => {
                            e.preventDefault();
                            onDeleteCard(id);
                        }}
                    />
                </BottomRow>
            </Link>
        </StyledSwipecard>
    );
};
