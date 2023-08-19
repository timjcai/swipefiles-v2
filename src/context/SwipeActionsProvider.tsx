import React, { createContext } from "react";
import { db } from "../../firebase-config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { ISwipeData } from "../types";

export const SwipeActionsContext = createContext(null);

export const SwipeActionsProvider = ({ children }) => {
    const deleteSwipe = async (id: string) => {
        const swipeRef = doc(db, "swipes", id);
        await deleteDoc(swipeRef);
    };

    const updateSwipe = async (id: string, payload: ISwipeData) => {
        const swipeRef = doc(db, "swipes", id);
        await updateDoc(swipeRef, payload);
    };

    const value = { deleteSwipe, updateSwipe };

    return (
        <SwipeActionsContext.Provider value={value}>
            {children}
        </SwipeActionsContext.Provider>
    );
};
