import { DefaultColors } from ".";

export interface ITagDataObject {
    colorname: DefaultColors;
    colorcode: string;
    tag: string;
    user_id?: string;
    swipes?: string[];
    id: string;
}

export interface ITagTableDB extends ITagDataObject {
    numberOfSwipes: number;
}

export interface ITableTags {
    title: string;
    data: ITagTableDB[];
    handleSelectChange: (e: any)=> Promise<void>;
    newtagstate: string;
    newcolorstate: string;
    handleNewTagInput: () => void;
    handleNewTagSelectColor: () => void;
    createTag: () => void;
}