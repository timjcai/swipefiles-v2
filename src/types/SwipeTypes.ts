export interface ISwipeData {
    author: string;
    board_id: string[];
    hyperlink: string;
    images: string[];
    keyword_tags: string[];
    notes: string;
    platform: PlatformTypes | "";
    title: string;
    user_id: string;
    id: string;
    create_date?: Date;
    last_update?: Date;
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
    | "Back"
    | "Skip"
    | "Share"
    | "Delete"
    | "Edit"
    | "Light"
    | "Dark"
    | "Remove"
    | "Upload"
    | "Download"
    | "Back"

export type NavigationTypes = 
    | "Home" 
    | "Swipes" 
    | "Settings" 
    | "Boards" 
    | "Create"
    | "Tags"