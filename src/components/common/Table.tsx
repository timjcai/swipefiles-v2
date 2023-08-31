import React, { FC, useState } from "react";
import styled from "styled-components";
import { ITableTags, ITagTableDB } from "../../types";

const Table: FC<ITableTags> = ({ title, data }) => {
    const [columnTitle, setColumnTitle] = useState(columns(data));

    function columns(data: ITagTableDB[]) {
        // get all keys of the object in the first element + "example"
        const firstElement = data[0];
        const currentColumns = Object.keys(firstElement);
        if (currentColumns.includes("user_id")) {
            const itemToRemove = "user_id";
            const index = currentColumns.findIndex(
                (element) => element === itemToRemove
            );
            currentColumns.splice(index, 1);
        }
        currentColumns.push("Example");
        return currentColumns;
    }

    return (
        <div>
            <h1>{title}</h1>
            <table>
                <thead>
                    <tr>
                        {columnTitle.map((title) => {
                            return (
                                <StyledColumnHeading
                                    colNumber={columnTitle.length}
                                >
                                    {title}
                                </StyledColumnHeading>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {/* {tagColorsArray.map((colorInfo, index) => (
                        <tr key={index}>
                            <td>{colorInfo.name}</td>
                            <td>{colorInfo.hexcolor}</td>
                            <td>{colorInfo.rgbcolor}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

type ColumnProps = {
    colNumber?: number;
};

const StyledColumnHeading = styled.th<ColumnProps>`
    width: ${(props) =>
        props.colNumber ? `calc(100vw/${props.colNumber})` : "300px"};
    border: 0.5px solid grey;
`;
