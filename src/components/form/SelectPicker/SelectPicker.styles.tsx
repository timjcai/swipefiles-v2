import styled from "styled-components";

export const Selector = styled.div`
    margin-right: 0;
`;

export const SelectButton = styled.button`
    padding: "12px 10px";
    border: 1px solid grey;
    border-radius: 4px;
    width: fit-content;
    text-align: left;
    width: 100%;
    // width: 128px;
    min-width: 47px;
    color: white;
    &: hover {
        cursor: pointer;
    }
    span {
        margin-left: 5px;
    }
`;

type SelectorLabelType = {
    $bgcolor: string;
};
export const SelectorLabel = styled.label<SelectorLabelType>`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375em;
    letter-spacing: 0.00938em;
    padding: 0px 6px;
    display: block;
    transform-origin: left top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(133% - 32px);
    position: absolute;
    transform: translate(12px, -9px) scale(0.75);
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    z-index: 1;
    pointer-events: auto;
    user-select: none;
    background-color: ${(props) => props.$bgcolor};
    color: white;
    border-radius: 12px;
`;

export const SelectIconSpacer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    align-items: center;
    padding: 0;
    height: 20px;
    pointer-events: none;
`;

export const PopupWrapper = styled.div<PWProps>`
    opacity: 1;
    transform: none;
    min-width: 120px;
    transition: opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transform-origin: 60px 0px;
    position: absolute;
    z-index: 2;
    width: 100px;
    display: ${(props) => (props.ishidden ? "none" : "block")};
`;

type PWProps = {
    top?: string;
    left?: string;
    ishidden?: boolean;
};

export const PopupMenu = styled.ul`
    list-style: none;
    margin: 0px;
    position: relative;
    outline: 0px;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.12),
        rgba(255, 255, 255, 0.12)
    );
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
        rgba(0, 0, 0, 0.14) 0px 8px 10px 1px,
        rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    border-radius: 4px;
    background-color: #2f2f2f;
    color: white;
    width: 128px;
    height: auto;
    max-height: 200px;
    overflow-y: scroll;
    overflow-x: clip;
`;

export const PopupMenuItem = styled.li`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    text-decoration: none;
    padding: 4px 16px 4px 16px;
    border: 1px solid black;
    width: 100%;
    margin-left: -40px;

    &: hover {
        background-color: #6b7a90;
        color: white;
        font-weight: 500;
        cursor: pointer;
    }

    &[aria-selected="true"] {
        background-color: #6b728e;
    }
`;
