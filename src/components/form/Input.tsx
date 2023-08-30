import React, { ChangeEvent, FC, forwardRef, useState } from "react";
import styled from "styled-components";
import { Icon } from "../common/Icon";
import { FieldTypes, ISwipeData } from "../../types";
import { SelectPicker } from "./SelectPicker/SelectPicker";

type InputProps = {
    label: keyof ISwipeData | FieldTypes;
    placeholder?: string;
    cta?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextLabelInput: FC<InputProps> = forwardRef(
    ({ placeholder, label, cta }, ref) => {
        const [inputValue, setInputValue] = useState<string>();
        const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
        };

        return (
            <StyledInputGroupRow>
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
            </StyledInputGroupRow>
        );
    }
);

type TextInputProps = {
    label: keyof ISwipeData | FieldTypes;
    placeholder?: string;
    cta?: string;
    changeFunction: (e: ChangeEvent<HTMLInputElement> | MouseEvent) => void;
    state: string;
    data?: string[];
    key?: number | string;
};

export const TextInput: FC<TextInputProps> = ({
    placeholder,
    label,
    cta,
    changeFunction,
    state,
}) => {
    return (
        <StyledInputGroupRow>
            <label htmlFor={label}>
                <Icon label={label} />
                {cta}
            </label>
            <input
                type="text"
                id={label}
                name={label}
                placeholder={placeholder}
                value={state}
                onChange={changeFunction}
            />
        </StyledInputGroupRow>
    );
};

export const TextInputCol: FC<TextInputProps> = ({
    placeholder,
    label,
    cta,
    changeFunction,
    state,
}) => {
    return (
        <StyledInputGroupCol>
            <label htmlFor={label}>
                <Icon label={label} />
                {cta}
            </label>
            <input
                type="text"
                id={label}
                name={label}
                placeholder={placeholder}
                value={state}
                onChange={changeFunction}
            />
        </StyledInputGroupCol>
    );
};

export const TextareaInput: FC<TextInputProps> = ({
    placeholder,
    label,
    cta,
    changeFunction,
    state,
}) => {
    return (
        <StyledInputGroupRow>
            <label htmlFor={label}>
                <Icon label={label} />
                {cta}
            </label>
            <StyledTextarea
                type="text"
                id={label}
                cols={50}
                rows={10}
                name={label}
                placeholder={placeholder}
                value={state}
                onChange={changeFunction}
            />
        </StyledInputGroupRow>
    );
};

export const StyledTextarea = styled.textarea`
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 14px;
    outline: none;
    resize: none;
`;

// not used anywhere
export const IconLabelInput: FC<InputProps> = ({ placeholder, label }) => {
    return (
        <StyledInputGroupRow>
            <label htmlFor={label}>
                <Icon label={label} />
            </label>
            <input
                type="text"
                id={label}
                name={label}
                placeholder={placeholder}
            />
        </StyledInputGroupRow>
    );
};

export const ImageInput: FC<InputProps> = ({ label, cta }) => {
    return (
        <StyledInputGroupRow>
            <label htmlFor={label}>{cta}</label>
            <input
                type="file"
                id={label}
                name={label}
                multiple
                accept="image/*"
            />
        </StyledInputGroupRow>
    );
};

const StyledInputGroupRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledInputGroupCol = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SelectInput: FC<TextInputProps> = ({
    label,
    cta,
    data,
    placeholder,
    changeFunction,
    state,
}) => {
    return (
        <StyledInputGroupRow>
            <label htmlFor={label}>{cta}</label>
            <SelectPicker
                label={label}
                placeholder={placeholder}
                list={data}
                onChange={changeFunction}
                color={"#212121"}
                state={state}
            />
        </StyledInputGroupRow>
    );
};
