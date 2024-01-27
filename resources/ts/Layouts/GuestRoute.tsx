import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Pages/Auth/useAuth";

type Props = {
    children: React.ReactNode;
};

export const GuestRoute = ({ children }: Props) => {
    const check = useAuth();

    if (!check.checked) {
        return <div>Loading...</div>;
    }

    if (check.isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }

    return <>{children}</>;
};
