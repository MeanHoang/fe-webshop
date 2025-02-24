import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAllCategory } from "../services/getAllCategory";

import "./CategoryList.scss";

const CategoryList = ({ showDropdown, setShowDropdown }) => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (showDropdown) {
            fetchCategories();
        }
    }, [showDropdown]);

    const fetchCategories = async () => {
        try {
            const data = await getAllCategory();
            console.log("check data: ", data);
            setCategories(data.categories);
        } catch (error) {
            console.error("Lỗi khi lấy danh mục:", error);
        }
    };

    const handleCategoryClick = (category) => {
        navigate(`/danhmuc/${category.id}`);
        setShowDropdown(false);
    };

    return (
        <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
            {categories.length > 0 ? (
                categories.map((category) => (
                    <li key={category.id}>
                        <span className="dropdown-item" onClick={() => handleCategoryClick(category)}>
                            {category.name}
                        </span>
                    </li>
                ))
            ) : (
                <li className="dropdown-item">Đang tải...</li>
            )}
        </ul>
    );
};

export default CategoryList;
