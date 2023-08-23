import React from "react";
import { FormWrapper } from ".";

export const Hyperlink = () => {
    return (
        <FormWrapper title="Hyperlink">
            <label htmlFor="hyperlink">Hyperlink</label>
            <input autoFocus required type="text" id="hyperlink" />
        </FormWrapper>
    );
};
