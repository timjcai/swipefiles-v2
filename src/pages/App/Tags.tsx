import React, { FC, useContext } from "react";
import { TagTable } from "../../components/tables/TagTable";
import { Loading } from "./Loading";
import { useAuth } from "../../hooks/useAuth";
import { TagContext } from "../../context/TagProvider";

export const Tags: FC = () => {
    const {
        allTags,
        loading,
        createTag,
        currentTag,
        currentColor,
        setCurrentColor,
        setCurrentTag,
        changeTagColor,
    } = useContext(TagContext);
    const user = useAuth();

    return (
        <div>
            {!loading && (
                <TagTable
                    title={"Tags"}
                    data={allTags}
                    handleSelectChange={changeTagColor}
                    newtagstate={currentTag}
                    newcolorstate={currentColor}
                    handleNewTagInput={(e) => setCurrentTag(e.target.value)}
                    handleNewTagSelectColor={(e) =>
                        setCurrentColor(e.target.id)
                    }
                    createTag={createTag}
                />
            )}
            {/* {!loading && <Table title={"Tags"} data={exampleData} />} */}
            {loading && <Loading />}
        </div>
    );
};
