import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Auth/Login";
import { RegisterUser } from "./Pages/Auth/RegisterUser";
import { RegisteredUser } from "./Pages/Auth/RegisteredUser";
import { Dashboard } from "./Pages/Dashboard";
import { NotFound } from "./Pages/Error/NotFound";

export const App = () => {
    return (
        <Routes>
            <Route path="/login"  element={<Login />} />
            <Route path="/registerUser"  element={<RegisterUser />} />
            <Route path="/registeredUser"  element={<RegisteredUser />} />
            <Route path="/dashboard"  element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
