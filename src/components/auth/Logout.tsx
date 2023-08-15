import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../../firebase-config";

const Logout = () => {
    const logout = async () => {
        await signOut(auth);
    };
    return <button onClick={logout}>Sign out</button>;
};

export default Logout;
