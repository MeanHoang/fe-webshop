import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllCategory = async (page = 1,
    limit = 7, searchTerm = '') => {

    console.log("URL: ", BASE_URL);
    try {

        const response = await axios.get(`${BASE_URL}/category`,
            {
                params: { page, limit, searchTerm },
            });

        return response.data;
    } catch (error) {
        throw error.response?.data?.message || '';
    }
} 