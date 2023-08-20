import React, { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconType } from "../../types";

import {
    IconDefinition,
    faAt,
    faChalkboard,
    faChevronRight,
    faCircleCheck,
    faCircleXmark,
    faCog,
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
    faSquarePlus,
    faSun,
    faTag,
    faTrash,
    faUser,
    faWindowMaximize,
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
    Play: faPlay,
    Home: faHouse,
    Swipes: faPaperPlane,
    Settings: faCog,
    Boards: faLayerGroup,
    Create: faSquarePlus,
    Share: faShare,
    Delete: faTrash,
    Edit: faEdit,
    Website: faWindowMaximize,
    Light: faSun,
    Dark: faMoon,
};

type IconProps = {
    label: IconType;
    className?: string;
};

export const Icon: FC<IconProps> = ({ label, className }) => {
    const icon = iconMapping[label];
    return (
        <FontAwesomeIcon icon={icon} className={className}></FontAwesomeIcon>
    );
};
