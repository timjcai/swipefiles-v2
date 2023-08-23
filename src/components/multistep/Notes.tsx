import React, { FC } from "react";
import { FormWrapper } from ".";

type NoteFormData = {
    keywords: string;
    images: string;
    notes: string;
    boards: string;
};

type NoteFormProps = NoteFormData & {
    updateFields: (fields: Partial<NoteFormData>) => void;
};

export const Notes: FC<NoteFormProps> = ({
    keywords,
    images,
    notes,
    boards,
    updateFields,
}) => {
    return (
        <FormWrapper title="Notes">
            <label htmlFor="keywords">Keywords</label>
            <input
                autoFocus
                required
                type="text"
                id="keywords"
                value={keywords}
                onChange={(e) => updateFields({ keywords: e.target.value })}
            />
            <label htmlFor="images">Images</label>
            <input
                required
                type="text"
                id="images"
                value={images}
                onChange={(e) => updateFields({ images: e.target.value })}
            />
            <label htmlFor="notes">Notes</label>
            <input
                required
                type="text"
                id="notes"
                value={notes}
                onChange={(e) => updateFields({ notes: e.target.value })}
            />
            <label htmlFor="board">Add to board?</label>
            <input
                required
                type="text"
                id="board"
                value={boards}
                onChange={(e) => updateFields({ boards: e.target.value })}
            />
        </FormWrapper>
    );
};
