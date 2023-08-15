import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconType } from "../../types";

import {
    IconDefinition,
    faAt,
    faChalkboard,
    faFile,
    faFont,
    faImage,
    faLink,
    faNoteSticky,
    faTag,
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
    Linkedin: faLinkedin,
    Facebook: faSquareFacebook,
    Dribbble: faSquareDribbble,
    Twitter: faSquareXTwitter,
    YouTube: faSquareYoutube,
    TikTok: faTiktok,
    Reddit: faSquareReddit,
};

export const Icon = (label: IconType): React.JSX.Element => {
    const icon = iconMapping[label];
    return <FontAwesomeIcon icon={icon}></FontAwesomeIcon>;
};
