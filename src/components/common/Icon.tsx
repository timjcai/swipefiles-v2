import React, { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconType } from "../../types";

import {
    IconDefinition,
    faAt,
    faChalkboard,
    faCheck,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faCircleCheck,
    faCircleXmark,
    faCog,
    faDownload,
    faEdit,
    faFile,
    faFont,
    faHashtag,
    faHouse,
    faImage,
    faInfoCircle,
    faLayerGroup,
    faLink,
    faMoon,
    faNoteSticky,
    faPaperPlane,
    faPlay,
    faShare,
    faSquare,
    faSquarePlus,
    faSun,
    faTag,
    faTrash,
    faUpload,
    faUser,
    faWindowMaximize,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
    faAmazon,
    faApple,
    faBehance,
    faDribbble,
    faFacebook,
    faGithub,
    faGoogle,
    faInstagram,
    faLinkedin,
    faMedium,
    faPinterest,
    faReddit,
    faSquareXTwitter,
    faTiktok,
    faTumblr,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const iconMapping: {
    [key in IconType]: IconDefinition;
} = {
    author: faAt,
    board_id: faChalkboard,
    hyperlink: faLink,
    images: faImage,
    keyword_tags: faTag,
    notes: faNoteSticky,
    title: faFont,
    user_id: faUser,
    id: faFile,
    platform: faHashtag,
    Linkedin: faLinkedin,
    Facebook: faFacebook,
    Dribbble: faDribbble,
    Twitter: faSquareXTwitter,
    YouTube: faYoutube,
    TikTok: faTiktok,
    Reddit: faReddit,
    Google: faGoogle,
    Apple: faApple,
    Github: faGithub,
    Pinterest: faPinterest,
    Tumblr: faTumblr,
    Instagram: faInstagram,
    Behance: faBehance,
    Amazon: faAmazon,
    Medium: faMedium,
    Info: faInfoCircle,
    Valid: faCircleCheck,
    Invalid: faCircleXmark,
    Next: faChevronRight,
    Back: faChevronLeft,
    Play: faPlay,
    Square: faSquare,
    Home: faHouse,
    Swipes: faPaperPlane,
    Settings: faCog,
    Boards: faLayerGroup,
    Tags: faTag,
    Create: faSquarePlus,
    Share: faShare,
    Delete: faTrash,
    Edit: faEdit,
    Remove: faXmark,
    Website: faWindowMaximize,
    Light: faSun,
    Dark: faMoon,
    Upload: faUpload,
    Download: faDownload,
    Included: faCheck,
    Open: faChevronDown,
};

type IconProps = {
    label: IconType;
    className?: string;
    color?: string;
};

export const Icon: FC<IconProps> = ({ label, className, color }) => {
    const icon = iconMapping[label];
    return (
        <FontAwesomeIcon
            icon={icon}
            className={className}
            color={color}
            style={{ pointerEvents: "none" }}
        />
    );
};
