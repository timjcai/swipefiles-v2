import React, { FC } from "react";
import styled from "styled-components";
import { Icon } from "../common/Icon";
import { FieldTypes, ISwipeData } from "../../types";

export const TextLabelInput: FC<InputProps> = ({ placeholder, label, cta }) => {
    return (
        <StyledInputGroup>
            <label htmlFor={label}>
                <Icon label={label} />
                {cta}
            </label>
            <input
                type="text"
                id={label}
                name={label}
                placeholder={placeholder}
            />
        </StyledInputGroup>
    );
};

export const IconLabelInput: FC<InputProps> = ({ placeholder, label }) => {
    return (
        <StyledInputGroup>
            <label htmlFor={label}>
                <Icon label={label} />
            </label>
            <input
                type="text"
                id={label}
                name={label}
                placeholder={placeholder}
            />
        </StyledInputGroup>
    );
};

export const ImageInput: FC<InputProps> = ({ label, cta }) => {
    return (
        <StyledInputGroup>
            <label htmlFor={label}>{cta}</label>
            <input
                type="file"
                id={label}
                name={label}
                multiple
                accept="image/*"
            />
        </StyledInputGroup>
    );
};

type InputProps = {
    label: keyof ISwipeData | FieldTypes;
    placeholder?: string;
    cta?: string;
};

const StyledInputGroup = styled.div`
    display: flex;
    flex-direction: row;
`;
