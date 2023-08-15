import React, { useState } from "react";
import { SignIn } from "../components/auth/SignIn";
import { SignUp } from "../components/auth/SignUp";
import { auth } from "../../firebase-config";
import { User, onAuthStateChanged } from "firebase/auth";
import Logout from "../components/auth/Logout";

export const LandingPage = () => {
    const [user, setUser] = useState<User | null>({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    return (
        <div>
            <SignIn />
            <SignUp />
            <p> User logged in: {user?.email}</p>
            <Logout />
            {/* <section>
                <h1>Hero Section</h1>
            </section>
            <section>
                <h1>Features section</h1>
            </section>
            <section>
                <h1>Footer</h1>
            </section> */}
        </div>
    );
};
