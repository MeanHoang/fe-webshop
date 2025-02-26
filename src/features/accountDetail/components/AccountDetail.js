import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AccountDetailAction from "../actions/AccountDetailAction";
import AccountDetailForm from "./AccountDetailForm";

const AccountDetail = () => {
    const { user, tempUser, editing, setEditing, handleChange, handleUpdate, handleCancel } = AccountDetailAction();

    return (
        <div className="container mt-4">
            <h2>Thông tin tài khoản</h2>
            <AccountDetailForm
                user={user}
                tempUser={tempUser}
                editing={editing}
                setEditing={setEditing}
                handleChange={handleChange}
                handleUpdate={handleUpdate}
                handleCancel={handleCancel}
            />
        </div>
    );
};

export default AccountDetail;
