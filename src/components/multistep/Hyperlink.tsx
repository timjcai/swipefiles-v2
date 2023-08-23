import React, { FC } from "react";
import { FormWrapper } from ".";

type HyperlinkData = {
    hyperlink: string;
};

type HyperlinkFormProps = HyperlinkData & {
    updateFields: (fields: Partial<HyperlinkData>) => void;
};

export const Hyperlink: FC<HyperlinkFormProps> = ({
    hyperlink,
    updateFields,
}) => {
    return (
        <FormWrapper title="Hyperlink">
            <label htmlFor="hyperlink">Hyperlink</label>
            <input
                autoFocus
                required
                type="text"
                id="hyperlink"
                value={hyperlink}
                onChange={(e) => updateFields({ hyperlink: e.target.value })}
            />
        </FormWrapper>
    );
};
