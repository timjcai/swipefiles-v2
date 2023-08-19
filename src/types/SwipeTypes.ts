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
    | "Facebook"
    | "Linkedin"
    | "Twitter"
    | "Pinterest"
    | "Reddit"
    | "Tumblr"
    | "Medium"
    // | "Substack"
    | "Dribbble"
    | "YouTube"
    | "TikTok"
    | "Google"
    | "Apple"
    | "Github"
    | "Instagram"
    | "Behance"
    | "Amazon"
    | "Website"

export type ActionTypes = 
    | "Play"
    | "Stop"
    | "Next"
    | "Skip"
    | "Share"

export type NavigationTypes = 
    | "Home" 
    | "Swipes" 
    | "Settings" 
    | "Boards" 
    | "Create"