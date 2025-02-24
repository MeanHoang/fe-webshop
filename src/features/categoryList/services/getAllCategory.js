import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllCategory = async () => {

    console.log("URL: ", BASE_URL);
    try {

        const response = await axios.get(`${BASE_URL}/category/is-active`,);

        return response.data;
    } catch (error) {
        throw error.response?.data?.message || '';
    }
} 