import React, { FC, useState } from "react";
import styled from "styled-components";
import { FieldTypes, ISwipeData } from "../../types";
import { TextLabelInput, IconLabelInput } from "./Input";

type CreateFormProps = {
    fields: keyof ISwipeData[] & FieldTypes[];
};

export const CreateForm = () => {
    const [keywordTags, setKeywordTags] = useState([""]);
    return (
        <StyledCreateForm>
            <TextLabelInput
                placeholder={"Who is the author?"}
                label={"author"}
                cta={"Author: "}
            />
            <TextLabelInput
                placeholder={"Which platform?"}
                label={"platform"}
                cta={"Platform: "}
            />
            <TextLabelInput
                placeholder={"Add a custom title"}
                label={"title"}
                cta={"Title: "}
            />
            <TextLabelInput
                placeholder={"Add a link"}
                label={"hyperlink"}
                cta={"Link: "}
            />
            <TextLabelInput
                placeholder={"Add notes"}
                label={"notes"}
                cta={"Notes: "}
            />
            <p>keyword tags</p>
            {}
            <TextLabelInput
                placeholder={"Add keywords"}
                label={"keyword_tags"}
                cta={"Keywords: "}
            />
            <button></button>
            {/* onclickAdd keywords - push value into keywords tag */}

            <p>images</p>
            <p>hidden: user_id, id, board_id</p>
        </StyledCreateForm>
    );
};

const StyledCreateForm = styled.form`
    display: flex;
    flex-direction: column;
`;
