export interface ISwipeData {
    author: string;
    board_id: string;
    hyperlink: string;
    images: string[];
    keyword_tags: string[];
    notes: string;
    platform: PlatformTypes;
    title: string;
    user_id: string;
}

export type PlatformTypes =
    | "Linkedin"
    | "Facebook"
    | "Redbubble"
    | "Twitter"
    | "YouTube"
    | "TikTok"
    | "Reddit";
