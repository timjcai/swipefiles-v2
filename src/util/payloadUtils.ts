import { ISwipeData, ITagColorDB } from "../types";

export const DEFAULT_TAG_SETTINGS: ITagColorDB = {
    colorname: "Mint",
    colorcode: "rgb(170, 255, 195)",
    tag: "",
    user_id: "",
    swipes: [],
};

export const INITIAL_FORMSTATE: ISwipeData = {
    author: "",
    board_id: [],
    images: [],
    keyword_tags: [],
    hyperlink: "",
    notes: "",
    platform: "",
    title: "",
    user_id: "",
    id: "",
};