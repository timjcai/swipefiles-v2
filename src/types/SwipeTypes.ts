export interface ISwipeData {
    author: string;
    board_id: string[];
    hyperlink: string;
    images: string[] | [];
    keyword_tags: string[] | [];
    notes: string;
    platform: PlatformTypes | "";
    title: string;
    user_id: string;
    id: string;
}

export type PlatformTypes =
    | "Linkedin"
    | "Facebook"
    | "Dribbble"
    | "Twitter"
    | "YouTube"
    | "TikTok"
    | "Reddit"
    | "Google"
    | "Apple"
    | "Github"

export type ActionTypes = 
    | "Play"
    | "Stop"
    | "Next"
    | "Skip"