import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Pages/Auth/useAuth";
import { Loading } from "../Components/Loading";

type Props = {
    children: React.ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
    const check = useAuth();

    if (!check.checked) {
        return <Loading />;
    }

    if (check.isAuthenticated) {
        return <>{children}</>;
    }

    return <Navigate to="/" />;
};
