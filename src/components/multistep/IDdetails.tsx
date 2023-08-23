import React, { FC } from "react";
import { FormWrapper } from ".";

type IDdetailsData = {
    title: string;
    author: string;
    platform: string;
};

type IDdetailsFormProps = IDdetailsData & {
    updateFields: (fields: Partial<IDdetailsData>) => void;
};

export const IDdetails: FC<IDdetailsFormProps> = ({
    title,
    author,
    platform,
    updateFields,
}) => {
    return (
        <FormWrapper title="ID Details">
            <label htmlFor="title">Title</label>
            <input
                autoFocus
                required
                type="text"
                id="title"
                value={title}
                onChange={(e) => updateFields({ title: e.target.value })}
            />
            <label htmlFor="author">Author</label>
            <input
                required
                type="text"
                id="author"
                value={author}
                onChange={(e) => updateFields({ author: e.target.value })}
            />
            <label htmlFor="platform">Platform</label>
            <input
                required
                type="text"
                id="platform"
                value={platform}
                onChange={(e) => updateFields({ platform: e.target.value })}
            />
        </FormWrapper>
    );
};
