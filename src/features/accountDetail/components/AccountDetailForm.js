import React from "react";

const AccountDetailForm = ({ user, tempUser, editing, setEditing, handleChange, handleUpdate, handleCancel }) => {
    if (!user) return <p>Đang tải...</p>;

    return (
        <div className="card p-3 shadow-lg">
            <div className="mb-2">
                <label><strong>Họ và tên:</strong></label>
                {editing ? (
                    <input type="text" name="fullname" value={tempUser.fullname || ""} onChange={handleChange} className="form-control" />
                ) : (
                    <p>{user.fullname}</p>
                )}
            </div>

            <div className="mb-2">
                <label><strong>Email:</strong></label>
                {editing ? (
                    <input type="email" name="email" value={tempUser.email || ""} onChange={handleChange} className="form-control" />
                ) : (
                    <p>{user.email}</p>
                )}
            </div>

            <div className="mb-2">
                <label><strong>Số điện thoại:</strong></label>
                {editing ? (
                    <input type="text" name="phonenumber" value={tempUser.phonenumber || ""} onChange={handleChange} className="form-control" />
                ) : (
                    <p>{user.phonenumber}</p>
                )}
            </div>

            <div className="mb-2">
                <label><strong>Giới tính:</strong></label>
                {editing ? (
                    <select name="sex" value={tempUser.sex ?? 1} onChange={handleChange} className="form-control">
                        <option value={1}>Nam</option>
                        <option value={0}>Nữ</option>
                    </select>
                ) : (
                    <p>{user.sex === 1 ? "Nam" : "Nữ"}</p>
                )}
            </div>

            <div className="mb-2">
                <label><strong>Ngày sinh:</strong></label>
                {editing ? (
                    <input type="date" name="birthday" value={tempUser.birthday || ""} onChange={handleChange} className="form-control" />
                ) : (
                    <p>{user.birthday}</p>
                )}
            </div>

            <div className="mb-2">
                <label><strong>Chiều cao (cm):</strong></label>
                {editing ? (
                    <input type="number" name="height" value={tempUser.height || ""} onChange={handleChange} className="form-control" />
                ) : (
                    <p>{user.height} cm</p>
                )}
            </div>

            <div className="mb-2">
                <label><strong>Cân nặng (kg):</strong></label>
                {editing ? (
                    <input type="number" name="weight" value={tempUser.weight || ""} onChange={handleChange} className="form-control" />
                ) : (
                    <p>{user.weight} kg</p>
                )}
            </div>

            <div className="mt-3">
                {editing ? (
                    <>
                        <button className="btn btn-success me-2" onClick={handleUpdate}>Lưu</button>
                        <button className="btn btn-secondary" onClick={handleCancel}>Hủy</button>
                    </>
                ) : (
                    <button className="btn btn-primary" onClick={() => setEditing(true)}>Cập nhật</button>
                )}
            </div>
        </div>
    );
};

export default AccountDetailForm;
