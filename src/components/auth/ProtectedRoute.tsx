import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { InAppWrapper, NonsidebarWrapper, Sidebar } from "../navbar";

export const ProtectedRoute = ({ children }) => {
    const user = useAuth();

    if (user == null) {
        return <Navigate to="/login" />;
    }
    return (
        <InAppWrapper>
            <Sidebar />
            <NonsidebarWrapper>
                <div>{children}</div>
            </NonsidebarWrapper>
        </InAppWrapper>
    );
};
