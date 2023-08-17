import { User, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../../firebase-config";

export const AuthContext = createContext(null);

export const AuthProvider: FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
