import React, { FC } from "react";
import { FormWrapper } from ".";
import { StyledTextarea } from "../form";

type NoteFormData = {
    images: string;
    notes: string;
};

type NoteFormProps = NoteFormData & {
    updateFields: (fields: Partial<NoteFormData>) => void;
};

export const Notes: FC<NoteFormProps> = ({ images, notes, updateFields }) => {
    return (
        <FormWrapper title="Notes">
            {/* <label htmlFor="images">Images</label>
            <input
                type="text"
                id="images"
                value={images}
                onChange={(e) => updateFields({ images: e.target.value })}
            /> */}
            <label htmlFor="notes">Notes</label>
            <StyledTextarea
                type="text"
                id={"notes"}
                cols={50}
                rows={10}
                name={"notes"}
                placeholder={notes}
                value={notes}
                onChange={(e) => updateFields({ notes: e.target.value })}
            />
        </FormWrapper>
    );
};
