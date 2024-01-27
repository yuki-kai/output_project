import axios from 'axios';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

export const login = async (email: string, password: string): Promise<void> => {
    await axios.post("http://localhost/api/login",{ email, password });
    return;
};

export const checkAuthenticated = async (): Promise<{ checked: boolean, isAuthenticated:boolean }> => {
    const response = await axios.get("http://localhost/api/checkAuthenticated");
    return response.data;
};

export const logout = async (): Promise<void> => {
    await axios.post("http://localhost/api/logout")
    return;
};
