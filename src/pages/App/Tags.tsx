import React, { FC, useEffect, useState } from "react";
import { TagTable } from "../../components/tables/TagTable";
import { Loading } from "./Loading";
import { DefaultColors, ITagColorDB, ITagTableDB } from "../../types";
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../../firebase-config";
import {
    collection,
    doc,
    getDocs,
    query,
    setDoc,
    updateDoc,
    where,
} from "firebase/firestore";
import { DEFAULT_TAG_SETTINGS, tagColorObject2 } from "../../util";

export const Tags: FC = () => {
    const [tableData, setTableData] = useState<ITagTableDB[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [keywordPayload, setKeywordPayload] =
        useState<ITagColorDB>(DEFAULT_TAG_SETTINGS);
    const [currentTag, setCurrentTag] = useState<string>("");
    const [currentColor, setCurrentColor] = useState<DefaultColors>("Mint");
    const user = useAuth();
    const tagCollection = collection(db, "tags");

    useEffect(() => {
        getTagData(user);
    }, [user]);

    const getTagData = async (user) => {
        const userQuery = query(
            tagCollection,
            where("user_id", "==", `${user.uid}`)
        );
        setLoading(true);
        const data = await getDocs(userQuery);
        setTableData(
            data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
                numberOfSwipes: doc.data().swipes.length,
            }))
        );
        setLoading(false);
    };

    const handleSelectChange = async (e: any) => {
        const id = e.target.parentNode.dataset.id;
        const tag = e.target.parentNode.dataset.tag;
        const colorname: DefaultColors = e.target.id;
        const colorcode = tagColorObject2[colorname];
        const payload = {
            id: id,
            colorname: colorname,
            colorcode: colorcode,
            user_id: user.uid,
            tag: tag,
        };

        const tagRef = doc(db, "tags", id);
        await updateDoc(tagRef, payload);
        console.log(`succesfully updated: ${payload}`);

        // how do I update and change the state of the tableData - when we update the tagColor

        // const object = tableData.find((element) => {
        //     element.id === id;
        // });
        // console.log(object);
        // setTableData((prevState) => [...prevState, payload]);
    };

    const createTag = async () => {
        const tagRef = doc(collection(db, "tags"));
        const payload = {
            colorname: currentColor,
            tag: currentTag,
            user_id: user.uid,
            swipes: [],
            colorcode: tagColorObject2[currentColor],
        };
        await setDoc(tagRef, payload);
        console.log("successfully created tag");
        resetTagPayload();
    };

    function resetTagPayload() {
        setCurrentTag("Mint");
        setCurrentTag("");
    }

    return (
        <div>
            {!loading && (
                <TagTable
                    title={"Tags"}
                    data={tableData}
                    handleSelectChange={handleSelectChange}
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
