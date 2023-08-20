import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CommonStylingProps, EventProps } from "../types";
import { Icon } from "../../common/Icon";
import {
    PopupMenu,
    PopupMenuItem,
    PopupWrapper,
    SelectButton,
    SelectIconSpacer,
    Selector,
    SelectorLabel,
} from ".";

interface ISelectPicker {
    label: string;
    placeholder: string | EventProps;
    list: string[];
    onChange: (e: MouseEvent) => void;
    color: string;
}

export const SelectPicker: FC<ISelectPicker> = ({
    label,
    value,
    list,
    color,
    onChange,
}) => {
    const [selectItem, setSelectItem] = useState(value);
    const [isHidden, setIsHidden] = useState(true);
    const selectorRef = useRef(null);

    // what does stopPropagation do?
    const handlePopup = (e: MouseEvent) => {
        e.stopPropagation();
        setIsHidden((prevState) => !prevState);
    };

    const handleSelect = (e: MouseEvent) => {
        if (e.target !== null) {
            const value = e.target.id;
            setSelectItem(value);
            onChange(e);
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
        <Selector
            id={label}
            className="combobox"
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={!isHidden}
        >
            <SelectorLabel $bgcolor={color}>{label}</SelectorLabel>
            <SelectButton
                type="button"
                aria-controls="dropdownOptions"
                ref={selectorRef}
                onClick={handlePopup}
            >
                <span id={label}>{selectItem}</span>
            </SelectButton>
            <PopupSelector
                id="dropdownOptions"
                role="listbox"
                aria-label="Options"
                label={label}
                selected={selectItem}
                list={list}
                isHidden={isHidden}
                handleSelect={handleSelect}
                onChange={onChange}
            />
        </Selector>
    );
};

// export const SelectInput = styled.input`
//     padding: 0;
//     background: none;
//     border: none;
//     border-radius: 0;
//     outline: none;
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     appearance: none;
//     width: 100px;
//     overflow: hidden;
//     margin-left: 6px;
//     &: hover {
//         cursor: pointer;
//     }
// `;

type PopupSelectorProps = {
    list: string[];
    isHidden: boolean;
    handleSelect: (e: MouseEvent) => void;
    selected: string;
    label: string;
};

export const PopupSelector: FC<PopupSelectorProps> = ({
    list,
    isHidden,
    handleSelect,
    selected,
    label,
}) => {
    const isTrue = (item: string): boolean => {
        return item === selected;
    };
    return (
        <PopupWrapper ishidden={isHidden} onClick={(e) => e.stopPropagation}>
            <PopupMenu>
                {list &&
                    list.map((items) => {
                        return (
                            <PopupMenuItem
                                id={items}
                                key={items}
                                role="option"
                                onClick={handleSelect}
                                value={items}
                                aria-selected={isTrue(items)}
                            >
                                <SelectIconSpacer>
                                    <Icon label={items} />
                                    {items}
                                </SelectIconSpacer>
                            </PopupMenuItem>
                        );
                    })}
            </PopupMenu>
        </PopupWrapper>
    );
};
