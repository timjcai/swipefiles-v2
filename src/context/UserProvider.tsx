import { User, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../../firebase-config";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState<User | null>({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
