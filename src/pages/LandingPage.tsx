import React, { useContext } from "react";
import { SignIn } from "../components/auth/SignIn";
import { Register } from "../components/auth/Register";
import Logout from "../components/auth/Logout";
import { UserContext } from "../context";

export const LandingPage = () => {
    const user = useContext(UserContext);

    return (
        <div>
            <SignIn />
            <p> User logged in: {user?.email}</p>
            <p> User id: {user?.uid}</p>
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
