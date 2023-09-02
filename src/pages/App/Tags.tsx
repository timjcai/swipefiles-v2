import React, { FC, useEffect, useState } from "react";
import { TagTable } from "../../components/tables/TagTable";
import { Loading } from "./Loading";
import { ITagTableDB } from "../../types";
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";

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

    return (
        <div>
            {!loading && <TagTable title={"Tags"} data={tableData} />}
            {/* {!loading && <Table title={"Tags"} data={exampleData} />} */}
            {loading && <Loading />}
        </div>
    );
};
