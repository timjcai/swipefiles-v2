import React, { FC } from "react";
import { FormWrapper } from ".";
import { SelectInput } from "../form";
import { ALL_PLATFORMS } from "../../util/PlatformUtil";
import { SelectPicker } from "../form/SelectPicker";

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
    handleSelectChange,
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
            <SelectPicker
                label={"platform"}
                placeholder={platform}
                list={ALL_PLATFORMS}
                onChange={handleSelectChange}
                color={"#212121"}
                state={platform}
            />
            {/* <SelectInput
                placeholder={platform}
                label={"platform"}
                cta={"Platform: "}
                changeFunction={handleSelectChange}
                data={ALL_PLATFORMS}
                state={platform}
            /> */}
            {/* <input
                required
                type="text"
                id="platform"
                value={platform}
                onChange={(e) => updateFields({ platform: e.target.value })}
            /> */}
        </FormWrapper>
    );
};
