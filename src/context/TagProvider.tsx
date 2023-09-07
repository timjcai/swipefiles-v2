import React, {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import { useAuth } from "../hooks/useAuth";
import { ITagDataObject } from "../types";
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { db } from "../../firebase-config";

type TagContextType = {
    allTags: ITagDataObject[];
    generateColorMap: () => void;
    deleteTag: (tagid: string) => Promise<void>;
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

    const generateColorMap = useCallback(() => {
        const tagColorMap = {};
        allTags.map((tagdata) => {
            tagColorMap[tagdata.tag] = tagdata.colorcode;
        });
        return tagColorMap;
    }, []);

    const deleteTag = useCallback(async (tagid: string) => {
        console.log(tagid);
        const tagRef = doc(db, "tags", tagid);
        await deleteDoc(tagRef);
        await getTagData(user);
        console.log(`deleting tag: ${tagid}`);
    }, []);

    const contextValue = useMemo(
        () => ({
            allTags,
            generateColorMap,
            deleteTag,
        }),
        [allTags, generateColorMap, deleteTag]
    );

    return (
        <TagContext.Provider value={contextValue}>
            {!loading && children}
        </TagContext.Provider>
    );
};
