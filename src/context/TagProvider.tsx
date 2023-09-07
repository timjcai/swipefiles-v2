import React, {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import { useAuth } from "../hooks/useAuth";
import { DefaultColors, ITagDataObject } from "../types";
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    setDoc,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { tagColorObject2 } from "../util";

interface ITagContext {
    allTags: ITagDataObject[];
    loading: boolean;
    currentTag: string;
    currentColor: string;
    setCurrentTag: () => void;
    setCurrentColor: () => void;
    generateColorMap: () => void;
    deleteTag: (tagid: string) => Promise<void>;
    getTagData: (user) => Promise<void>;
    createTag: () => Promise<void>;
    changeTagColor: () => void;
}

export const TagContext = createContext<ITagContext>({} as ITagContext);

export const TagProvider = ({ children }) => {
    const user = useAuth();
    const [allTags, setAllTags] = useState<ITagDataObject[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentTag, setCurrentTag] = useState<string>("");
    const [currentColor, setCurrentColor] = useState<DefaultColors>("Mint");
    const tagCollection = collection(db, "tags");

    useEffect(() => {
        getTagData(user);
    }, [user]);

    const getTagData = useCallback(async (user) => {
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
    }, []);

    const generateColorMap = useCallback(() => {
        const tagColorMap = {};
        allTags.map((tagdata) => {
            tagColorMap[tagdata.tag] = tagdata.colorcode;
        });
        return tagColorMap;
    }, []);

    const resetTagPayload = useCallback(() => {
        setCurrentTag("Mint");
        setCurrentTag("");
    }, []);

    const createTag = useCallback(async () => {
        const tagRef = doc(collection(db, "tags"));
        const payload = {
            colorname: currentColor,
            tag: currentTag,
            user_id: user.uid,
            swipes: [],
            colorcode: tagColorObject2[currentColor],
        };
        console.log(payload);
        await setDoc(tagRef, payload);
        await getTagData(user);
        console.log("successfully created tag");
        resetTagPayload();
    }, [currentColor, currentTag, user, resetTagPayload]);

    const deleteTag = useCallback(
        async (tagid: string) => {
            console.log(tagid);
            const tagRef = doc(db, "tags", tagid);
            await deleteDoc(tagRef);
            await getTagData(user);
            console.log(`deleting tag: ${tagid}`);
        },
        [user]
    );

    const changeTagColor = useCallback(async (e) => {
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
        await getTagData(user);
        console.log(`succesfully updated: ${payload}`);
    }, []);
    const contextValue = useMemo(
        () => ({
            allTags,
            loading,
            currentTag,
            setCurrentTag,
            currentColor,
            setCurrentColor,
            getTagData,
            generateColorMap,
            createTag,
            deleteTag,
            changeTagColor,
        }),
        [
            allTags,
            loading,
            currentTag,
            setCurrentTag,
            currentColor,
            setCurrentColor,
            getTagData,
            generateColorMap,
            createTag,
            deleteTag,
            changeTagColor,
        ]
    );

    return (
        <TagContext.Provider value={contextValue}>
            {!loading && children}
        </TagContext.Provider>
    );
};
