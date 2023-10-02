import { ISwipeData, ITagDataObject } from "../types";

export const DEFAULT_TAG_SETTINGS: Partial<ITagDataObject> = {
    colorname: "",
    colorcode: "",
    tag: "",
    user_id: "",
    swipes: [],
};

export const INITIAL_FORMSTATE: Partial<ISwipeData> = {
    author: "",
    board_id: [],
    images: [],
    keyword_tags: [],
    hyperlink: "",
    notes: "",
    platform: "",
    title: "",
    user_id: "",
};