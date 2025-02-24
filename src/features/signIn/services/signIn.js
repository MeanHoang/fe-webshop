import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const signIn = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/sign-in`, { email, password });
        console.log("check data sign in: ", response.data);

        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Đăng nhập thất bại!";
    }
};
