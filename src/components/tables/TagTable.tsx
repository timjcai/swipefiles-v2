import React, { FC, useState } from "react";
import styled from "styled-components";
import { DefaultColors, ITableTags, ITagTableDB } from "../../types";
import { ColorTag, KeywordTag } from "../form";
import { useAuth } from "../../hooks/useAuth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

export const TagTable: FC<ITableTags> = ({
    title,
    data,
    handleSelectChange,
    newtagstate,
    newcolorstate,
    handleNewTagInput,
    handleNewTagSelectColor,
    createTag,
}) => {
    const [columnTitle, setColumnTitle] = useState(columns(data));
    const [tableData, setTableData] = useState(data);
    const [addingTag, setAddingTag] = useState<boolean>(true);
    const user = useAuth();

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
        const currentColumns = ["Tag", "Color Name", "# of Swipes"];
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
                                <StyledCell>
                                    <div>
                                        {" "}
                                        <KeywordTag
                                            tag={data.tag}
                                            id={data.id}
                                            bgcolor={data.colorcode}
                                            editable={true}
                                        />
                                    </div>
                                </StyledCell>
                                <StyledCell>
                                    <ColorTag
                                        id={data.id}
                                        tag={data.tag}
                                        colorname={data.colorname}
                                        handleSelectChange={handleSelectChange}
                                        state={data.colorname}
                                    />
                                </StyledCell>
                                <StyledCell>{data.numberOfSwipes}</StyledCell>
                            </tr>
                        );
                    })}
                    {addingTag && (
                        <tr>
                            <StyledCell>
                                <AddTagInput
                                    autoFocus
                                    onChange={handleNewTagInput}
                                    value={newtagstate}
                                />
                            </StyledCell>
                            <StyledCell>
                                <ColorTag
                                    tag={newtagstate}
                                    colorname={newcolorstate}
                                    handleSelectChange={handleNewTagSelectColor}
                                    state={newcolorstate}
                                />
                            </StyledCell>
                            <StyledCell>0</StyledCell>
                        </tr>
                    )}
                </tbody>
                <button onClick={createTag}>Add Tag</button>
            </StyledTable>
        </div>
    );
};

type ColumnProps = {
    colNumber?: number;
};

const StyledColumnHeading = styled.th<ColumnProps>`
    width: ${(props) =>
        props.colNumber ? `calc(100vw/${props.colNumber})` : "300px"};
    min-width: 300px;
    border: 1px solid hsl(202, 10%, 88%);
    background-color: #f3f3f3;
    margin: 0;
    padding: 0;
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
    border-collapse: collapse;
`;

const AddTagInput = styled.input`
    border: none;
    outline: none;
    background: none;
    color: inherit;
`;
