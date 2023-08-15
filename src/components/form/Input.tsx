import React, { ChangeEvent, FC, forwardRef, useState } from "react";
import styled from "styled-components";
import { Icon } from "../common/Icon";
import { FieldTypes, ISwipeData } from "../../types";

export const TextLabelInput: FC<InputProps> = forwardRef(
    ({ placeholder, label, cta }, ref) => {
        const [inputValue, setInputValue] = useState<string>();
        const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
        };

        return (
            <StyledInputGroup>
                <label htmlFor={label}>
                    <Icon label={label} />
                    {cta}
                </label>
                <input
                    ref={ref}
                    type="text"
                    id={label}
                    name={label}
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={changeValue}
                />
            </StyledInputGroup>
        );
    }
);

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
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledInputGroup = styled.div`
    display: flex;
    flex-direction: row;
`;
