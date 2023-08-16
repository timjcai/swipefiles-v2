import React, { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconType } from "../../types";

import {
    IconDefinition,
    faAt,
    faChalkboard,
    faCheck,
    faCircleCheck,
    faCircleXmark,
    faFile,
    faFont,
    faHashtag,
    faImage,
    faInfoCircle,
    faLink,
    faNoteSticky,
    faTag,
    faTimes,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faSquareDribbble,
    faSquareFacebook,
    faSquareReddit,
    faSquareXTwitter,
    faSquareYoutube,
    faTiktok,
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
    Facebook: faSquareFacebook,
    Dribbble: faSquareDribbble,
    Twitter: faSquareXTwitter,
    YouTube: faSquareYoutube,
    TikTok: faTiktok,
    Reddit: faSquareReddit,
    Info: faInfoCircle,
    Valid: faCircleCheck,
    Invalid: faCircleXmark,
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
