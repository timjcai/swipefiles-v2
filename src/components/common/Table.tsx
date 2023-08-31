import React, { FC, useState } from "react";
import styled from "styled-components";
import { ITableTags, ITagTableDB } from "../../types";
import { ColorTag, KeywordTag } from "../form";
import { Icon } from ".";

const Table: FC<ITableTags> = ({ title, data }) => {
    const [columnTitle, setColumnTitle] = useState(columns(data));
    const [tableData, setTableData] = useState(data);

    function columns(data: ITagTableDB[]) {
        // get all keys of the object in the first element + "example"
        // const firstElement = data[0];
        // const currentColumns = Object.keys(firstElement);
        // if (currentColumns.includes("user_id")) {
        //     const itemToRemove = "user_id";
        //     const index = currentColumns.findIndex(
        //         (element) => element === itemToRemove
        //     );
        //     currentColumns.splice(index, 1);
        // }
        // if (currentColumns.includes("colorcode")) {
        //     const itemToRemove = "colorcode";
        //     const index = currentColumns.findIndex(
        //         (element) => element === itemToRemove
        //     );
        //     currentColumns.splice(index, 1);
        // }
        // currentColumns.push("Example");
        const currentColumns = ["Tag", "Color Name", "# of Swipes", "Example"];
        return currentColumns;
    }

    return (
        <div>
            <h1>{title}</h1>
            <StyledTable>
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
                    {tableData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <StyledCell>{data.tag}</StyledCell>
                                <StyledCell>
                                    <ColorTag colorname={data.colorname} />
                                </StyledCell>
                                <StyledCell>{data.numberOfSwipes}</StyledCell>
                                <StyledCell>
                                    <KeywordTag
                                        tag={data.tag}
                                        id={index}
                                        bgcolor={data.colorcode}
                                        color={"#000000"}
                                    />
                                </StyledCell>
                            </tr>
                        );
                    })}
                    <tr>
                        <StyledCell colspan="4">Add Tag</StyledCell>
                    </tr>
                </tbody>
            </StyledTable>
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
    min-width: 300px;
    border: 1px solid hsl(202, 10%, 88%);
`;

const StyledCell = styled.td`
    text-align: left;
    padding-left: 5px;
    border-bottom: 1px solid hsl(202, 10%, 88%);
    border-left: 1px solid hsl(202, 10%, 88%);
`;

const StyledTable = styled.table`
    margin-top: 20px;
    display: inline-block;
    overflow: scroll;
    height: calc(100vh - 150px);
`;
