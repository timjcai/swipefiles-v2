import React, { createContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { ITagDataObject } from "../types";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";

type TagContextType = {
    allTags: ITagDataObject[];
};

export const TagContext = createContext<TagContextType | null>(null);

export const TagProvider = ({ children }) => {
    const user = useAuth();
    const [allTags, setAllTags] = useState<ITagDataObject[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const tagCollection = collection(db, "tags");

    useEffect(() => {
        getTagData(user);
    }, [user]);

    console.log(`user is: ${user}`);
    const getTagData = async (user) => {
        const userQuery = query(
            tagCollection,
            where("user_id", "==", `${user.uid}`)
        );
        setLoading(true);
        const data = await getDocs(userQuery);
        setAllTags(
            data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
                numberOfSwipes: doc.data().swipes.length,
            }))
        );
        setLoading(false);
    };

    const value = { allTags };

    return (
        <TagContext.Provider value={value}>
            {!loading && children}
        </TagContext.Provider>
    );
};
