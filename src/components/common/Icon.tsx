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
    faFile,
    faFont,
    faHashtag,
    faImage,
    faInfoCircle,
    faLink,
    faNoteSticky,
    faPlay,
    faTag,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
    faApple,
    faDribbble,
    faFacebook,
    faGithub,
    faGoogle,
    faLinkedin,
    faReddit,
    faSquareXTwitter,
    faTiktok,
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
    Info: faInfoCircle,
    Valid: faCircleCheck,
    Invalid: faCircleXmark,
    Next: faChevronRight,
    Play: faPlay,
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
