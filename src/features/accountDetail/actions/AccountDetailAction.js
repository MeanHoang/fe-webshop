import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import getUserById from "../services/getUserById";
import updateUser from "../services/updateUser";


const AccountDetailAction = () => {
    const [user, setUser] = useState(null);
    const [tempUser, setTempUser] = useState(null);
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userId = localStorage.getItem("userId");
                if (!userId) {
                    navigate("/dang-nhap");
                    return;
                }

                let storedUser = await getUserById(userId);
                console.log("User từ API:", storedUser);

                storedUser.sex = storedUser.sex === 1 ? 1 : 0;
                if (storedUser.birthday) {
                    storedUser.birthday = storedUser.birthday.split("T")[0];
                }

                setUser(storedUser);
                setTempUser(storedUser);
            } catch (error) {
                console.error("Lỗi khi lấy user:", error);
                navigate("/dang-nhap");
            }
        };

        fetchUser();
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempUser((prevUser) => ({
            ...prevUser,
            [name]: name === "sex" ? Number(value) : value,
        }));
    };

    const handleUpdate = async () => {
        try {
            const updatedData = {
                ...tempUser,
                sex: tempUser.sex ? 1 : 0,
                birthday: tempUser.birthday || null,
            };

            console.log("Dữ liệu gửi đi:", updatedData);
            const response = await updateUser(updatedData);
            console.log("API trả về:", response);

            setUser(tempUser);
            setEditing(false);
            toast.success("Cập nhật thành công!");
        } catch (error) {
            console.error("Lỗi cập nhật:", error);
            toast.error(error.message || "Cập nhật thất bại");
        }
    };

    const handleCancel = () => {
        setTempUser(user);
        setEditing(false);
    };

    return { user, tempUser, editing, setEditing, handleChange, handleUpdate, handleCancel };
};

export default AccountDetailAction;
