import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const signUp = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/sign-up`, userData);
        console.log("check data sign up: ", response.data);

        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Đăng ký thất bại!";
    }
};
