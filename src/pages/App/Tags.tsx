import React, { FC, useEffect, useState } from "react";
import { TagTable } from "../../components/tables/TagTable";
import { Loading } from "./Loading";
import { DefaultColors, ITagTableDB } from "../../types";
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../../firebase-config";
import {
    collection,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { tagColorObject2 } from "../../util";

export const Tags: FC = () => {
    const [tableData, setTableData] = useState<ITagTableDB[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
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

        console.log(
            tableData.find((element) => {
                element.id === id;
            })
        );
        setTableData((prevState) => [...prevState]);
    };

    return (
        <div>
            {!loading && (
                <TagTable
                    title={"Tags"}
                    data={tableData}
                    handleSelectChange={handleSelectChange}
                />
            )}
            {/* {!loading && <Table title={"Tags"} data={exampleData} />} */}
            {loading && <Loading />}
        </div>
    );
};
