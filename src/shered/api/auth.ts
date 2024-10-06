import axios from 'axios';

const API_URL = 'https://traveltok.pythonanywhere.com/users-api/';

export const registerUser = async (email: string, password: string, confirmPassword: string) => {
    const response = await axios.post(`${API_URL}register/`, {
        email,
        password,
        password_confirm: confirmPassword,
    });
    return response.data;
};

export const loginUser = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}login/`, {
        email,
        password,
    });
    return response.data;
};
