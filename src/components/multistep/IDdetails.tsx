import React from "react";
import { FormWrapper } from ".";

export const IDdetails = () => {
    return (
        <FormWrapper title="ID Details">
            <label htmlFor="title">Title</label>
            <input autoFocus required type="text" id="title" />
            <label htmlFor="author">Author</label>
            <input required type="text" id="author" />
            <label htmlFor="platform">Platform</label>
            <input required type="text" id="platform" />
        </FormWrapper>
    );
};
