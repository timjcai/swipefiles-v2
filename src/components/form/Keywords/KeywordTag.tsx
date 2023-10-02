import React, { FC, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Icon } from "../../common/Icon";
import { colorSelectOptions, tagColorObject2 } from "../../../util/colorUtils";
import { DefaultColors } from "../../../types";
import { PopupSelector, SelectPicker } from "../SelectPicker";
import { TagContext } from "../../../context/TagProvider";

type KeywordTagProps = {
    tag: string;
    id: string;
    bgcolor?: string;
    color?: string;
    editable?: boolean;
    onXClick?: (e) => void;
};

export const KeywordTag: FC<KeywordTagProps> = ({
    tag,
    id,
    bgcolor,
    color,
    editable = false,
}) => {
    const [showDelete, setShowDelete] = useState<boolean>(false);
    const { deleteTag } = useContext(TagContext);

    function deleteIsActive() {
        setShowDelete(true);
    }
    function deleteisHidden() {
        setShowDelete(false);
    }

    return (
        <TagWrapper onMouseOver={deleteIsActive} onMouseLeave={deleteisHidden}>
            <TagStyle role="button" bgcolor={bgcolor} color={color} id={id}>
                <p>{tag}</p>
                {/* {editable && (
                    <TagButtonWrapper onClick={onXClick} data-label={id}>
                        {editable && <Icon label="Remove" data-label={id} />}
                    </TagButtonWrapper>
                )} */}
            </TagStyle>
            {editable && (
                <TagButtonWrapper
                    show={showDelete}
                    onClick={() => deleteTag(id)}
                    data-label={id}
                >
                    {editable && <Icon label="Remove" data-label={id} />}
                </TagButtonWrapper>
            )}
        </TagWrapper>
    );
};

type TagStyleProps = {
    bgcolor?: string;
    color?: string;
};

const TagWrapper = styled.div`
    position: relative;
    width: fit-content;
`;

const TagStyle = styled.div<TagStyleProps>`
    background-color: ${(props) => props.bgcolor};
    color: ${(props) => props.color};
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: fit-content;
    max-width: 200px;
    height: 20px;
    border-radius: 3px;
    padding-left: 8px;
    padding-right: 8px;
    margin: 2px 2px;
    font-size: 14px;
    line-height: 120%;
    overflow: hidden;
    gap: 10px;
`;
type TagButtonWrapperProps = {
    show: boolean;
};

const TagButtonWrapper = styled.div<TagButtonWrapperProps>`
    position: absolute;
    background: black;
    border-radius: 50%;
    padding: 2px 2px;
    font-size: 10px;
    color: white;
    height: 10px;
    width: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -4px;
    z-index: 1;
    top: -4px;
    display: ${(props) => (props.show ? "" : "none")};
`;

type ColorTagProps = {
    colorname: DefaultColors;
    handleSelectChange: (e: any) => void;
    state: string;
    id?: string;
};

export const ColorTag: FC<ColorTagProps> = ({
    colorname,
    handleSelectChange,
    state,
    id,
    tag,
}) => {
    const [selectItem, setSelectItem] = useState<string>(colorname);
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const selectorRef = useRef(null);

    // what does stopPropagation do?
    const handlePopup = (e: MouseEvent) => {
        e.stopPropagation();
        setIsHidden((prevState) => !prevState);
    };

    const handleSelect = (e: MouseEvent) => {
        if (e.target !== null) {
            const value = e.target.id;
            console.log(value);
            // setSelectItem(value);
            handleSelectChange(e);
            setIsHidden(true);
        }
    };

    // unable to implement a closepopup box - not sure how to implement this after 2-3 hours of work

    useEffect(() => {
        function closePopup(e: MouseEvent) {
            if (e.target !== selectorRef.current) {
                setIsHidden(true);
            }
        }

        document.addEventListener("click", closePopup);

        return () => {
            document.removeEventListener("click", closePopup);
        };
    }, []);

    return (
        <>
            <TagStyle
                type="button"
                aria-controls="dropdownOptions"
                ref={selectorRef}
                onClick={handlePopup}
            >
                <Icon label={"Square"} color={tagColorObject2[colorname]} />
                <p>{colorname}</p>
            </TagStyle>
            <PopupSelector
                id="dropdownOptions"
                dataid={id}
                datatag={tag}
                role="listbox"
                aria-label="Options"
                selected={state}
                list={colorSelectOptions}
                isHidden={isHidden}
                handleSelect={handleSelect}
            />
            {/* <SelectPicker
                placeholder={"color name"}
                list={colorSelectOptions}
                color={"#212121"}
                onChange={handleSelectChange}
                state={state}
            /> */}
        </>
    );
};
