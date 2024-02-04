import axios from 'axios';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = import.meta.env.VITE_APP_URL;

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
