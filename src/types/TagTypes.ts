export interface ITagColorDB {
    colorname: string;
    colorcode: string;
    tag: string;
    user_id?: string;
    swipes?: string[];
}

export interface ITagTableDB extends ITagColorDB {
    numberOfSwipes: number;
}

export interface ITableTags {
    title: string;
    data: ITagTableDB[];
}