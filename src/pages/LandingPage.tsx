import React, { useContext } from "react";
import { Register } from "../components/auth/Register";
import { UserContext } from "../context";
import { Logout } from "../components/auth";

export const LandingPage = () => {
    const user = useContext(UserContext);

    return (
        <div>
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
