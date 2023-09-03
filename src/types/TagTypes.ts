import { DefaultColors } from ".";

export interface ITagColorDB {
    colorname: DefaultColors;
    colorcode: string;
    tag: string;
    user_id?: string;
    swipes?: string[];
    id: string;
}

export interface ITagTableDB extends ITagColorDB {
    numberOfSwipes: number;
}

export interface ITableTags {
    title: string;
    data: ITagTableDB[];
    handleSelectChange: (e: any)=> Promise<void>;
}