import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const updateUser = async (userData) => {
    console.log("check userData to update: ", userData);
    try {
        const response = await axios.put(`${BASE_URL}/user/profile`, userData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("check res: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating user profile:", error);
        throw error.response?.data || { error: "Unknown error" };
    }
};

export default updateUser;
