import axios from "axios";
import { AuthUser } from "ts/types/user";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
axios.defaults.baseURL = import.meta.env.VITE_APP_URL;

// ユーザ新規作成API
export const registerUser = async (user: AuthUser): Promise<void> => {
    await axios.post("/api/registerUser", { ...user });
    return;
};

// ログインAPI
export const login = async (user: AuthUser): Promise<void> => {
    await axios.post("/api/login", { ...user });
    return;
};

export const checkAuthenticated = async (): Promise<{ checked: boolean, isAuthenticated:boolean }> => {
    const response = await axios.get("/api/checkAuthenticated");
    return response.data;
};

export const logout = async (): Promise<void> => {
    await axios.post("/api/logout")
    return;
};
