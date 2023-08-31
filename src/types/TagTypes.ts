export interface ITagColorDB {
    color: string;
    tag: string;
    user_id?: string;   
}

export interface ITagTableDB extends ITagColorDB {
    numberOfSwipes: number;
}

export interface ITableTags {
    title: string;
    data: ITagTableDB[];
}