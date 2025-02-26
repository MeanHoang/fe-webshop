import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getProductByCategoryId = async (categoryId) => {
    try {
        const url = `${BASE_URL}/product/product-category`;

        const response = await axios.get(url, {
            params: { categoryId },
        });

        console.log("check response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching user profile:", error.response?.data || error.message);
        return null;
    }
};

export default getProductByCategoryId;
