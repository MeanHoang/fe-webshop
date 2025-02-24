import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate để điều hướng
import "bootstrap/dist/css/bootstrap.min.css";
import updateUser from "../services/updateUser";

const AccountDetail = () => {
    const [user, setUser] = useState({
        id: "",
        fullname: "",
        email: "",
        phonenumber: "",
        sex: "",
        birthday: "",
        height: "",
        weight: ""
    });

    const [isEditing, setIsEditing] = useState(false);
    const [originalUser, setOriginalUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        console.log("check user data: ", storedUser);
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setOriginalUser(parsedUser);
        } else {
            navigate("/dang-nhap");
        }
    }, [navigate]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            const updatedUser = await updateUser(user);
            console.log("check updatedUser:", updateUser);
            localStorage.setItem("user", JSON.stringify(updatedUser.User));
            setUser(updatedUser);
            setIsEditing(false);
            alert("Cập nhật thành công!");
        } catch (error) {
            console.error("Cập nhật thất bại:", error);
            alert(error.error || "Cập nhật thất bại");
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setUser(originalUser);
        setIsEditing(false);
    };

    return (
        <div className="container mt-4">
            <h2>Thông tin tài khoản</h2>
            <div className="card p-3 shadow-lg">
                <div className="mb-2">
                    <label><strong>Họ và tên:</strong></label>
                    <input type="text" name="fullname" value={user.fullname} onChange={handleChange} disabled={!isEditing} className="form-control" />
                </div>
                <div className="mb-2">
                    <label><strong>Email:</strong></label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} disabled={!isEditing} className="form-control" />
                </div>
                <div className="mb-2">
                    <label><strong>Số điện thoại:</strong></label>
                    <input type="text" name="phonenumber" value={user.phonenumber} onChange={handleChange} disabled={!isEditing} className="form-control" />
                </div>
                <div className="mb-2">
                    <label><strong>Giới tính:</strong></label>
                    <select name="sex" value={user.sex} onChange={handleChange} disabled={!isEditing} className="form-control">
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label><strong>Ngày sinh:</strong></label>
                    <input type="date" name="birthday" value={user.birthday} onChange={handleChange} disabled={!isEditing} className="form-control" />
                </div>
                <div className="mb-2">
                    <label><strong>Chiều cao (cm):</strong></label>
                    <input type="number" name="height" value={user.height} onChange={handleChange} disabled={!isEditing} className="form-control" />
                </div>
                <div className="mb-2">
                    <label><strong>Cân nặng (kg):</strong></label>
                    <input type="number" name="weight" value={user.weight} onChange={handleChange} disabled={!isEditing} className="form-control" />
                </div>

                <div className="mt-3">
                    {isEditing ? (
                        <>
                            <button className="btn btn-success me-2" onClick={handleUpdate}>Lưu</button>
                            <button className="btn btn-secondary" onClick={handleCancel}>Hủy</button>
                        </>
                    ) : (
                        <button className="btn btn-primary" onClick={handleEdit}>Cập nhật</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AccountDetail;
