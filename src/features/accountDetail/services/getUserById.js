import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getUserById = async (userId) => {
    try {
        const url = `${BASE_URL}/user/profile`;
        console.log("check API URL:", url, "with params:", { userId });

        const response = await axios.get(url, {
            params: { userId },
        });

        console.log("check response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching user profile:", error.response?.data || error.message);
        return null;
    }
};

export default getUserById;
