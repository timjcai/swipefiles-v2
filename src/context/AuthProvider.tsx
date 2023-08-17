import {
    User,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useState, useEffect } from "react";
import { auth } from "../../firebase-config";

export const AuthContext = createContext(null);

export const AuthProvider: FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signOut() {
        return auth.signOut();
    }

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function getUser() {
        return auth.currentUser();
    }

    function isAdmin() {
        return auth.currentUser.getIdTokenResult().then((idTokenResult) => {
            if (idTokenResult.claims.admin) {
                return true;
            } else {
                return false;
            }
        });
    }
    useEffect(() => {
        const unsubscribe = () =>
            onAuthStateChanged(auth, (currentUser) => {
                setCurrentUser(currentUser);
                setLoading(false);
            });

        return unsubscribe();
    }, []);

    const value = { currentUser, getUser, login, signOut, signUp };

    return (
        <AuthContext.Provider value={currentUser}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
