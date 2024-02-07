import axios from 'axios';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = import.meta.env.VITE_APP_URL;

// ユーザ新規作成API
export const registerUser = async (name: string, email: string, password: string, password_confirmation: string): Promise<void> => {
    await axios.post("/api/registerUser",{ name, email, password, password_confirmation });
    return;
};

export const login = async (email: string, password: string): Promise<void> => {
    await axios.post("/api/login",{ email, password });
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
