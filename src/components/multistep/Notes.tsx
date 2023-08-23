import React from "react";
import { FormWrapper } from ".";

export const Notes = () => {
    return (
        <FormWrapper title="Notes">
            <label htmlFor="keywords">Keywords</label>
            <input autoFocus required type="text" id="keywords" />
            <label htmlFor="images">Images</label>
            <input required type="text" id="images" />
            <label htmlFor="notes">Notes</label>
            <input required type="text" id="notes" />
            <label htmlFor="board">Add to board?</label>
            <input required type="text" id="board" />
        </FormWrapper>
    );
};
