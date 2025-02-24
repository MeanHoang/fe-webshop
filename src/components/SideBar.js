import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaUser, FaShoppingBag, FaWallet, FaMapMarkerAlt, FaStar, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
    const menuItems = [
        { icon: <FaUser />, label: "Thông tin tài khoản", active: true },
        { icon: <FaShoppingBag />, label: "Lịch sử đơn hàng" },
        { icon: <FaWallet />, label: "Lịch sử CoolCash" },
        { icon: <FaWallet />, label: "Ví Voucher" },
        { icon: <FaMapMarkerAlt />, label: "Sổ địa chỉ" },
        { icon: <FaStar />, label: "Đánh giá và phản hồi" },
        { icon: <FaQuestionCircle />, label: "Chính sách & Câu hỏi thường gặp" },
        { icon: <FaSignOutAlt />, label: "Đăng xuất" },
    ];

    return (
        <div className="d-flex flex-column p-3 bg-light vh-100" style={{ width: "250px" }}>
            <ListGroup variant="flush">
                {menuItems.map((item, index) => (
                    <ListGroup.Item
                        key={index}
                        className={`d-flex justify-content-between align-items-center p-3 border-0 rounded mb-2 
                            ${item.active ? "bg-dark text-white" : "bg-white text-dark"} `}
                        action
                    >
                        <div className="d-flex align-items-center gap-2">
                            <span className="fs-5">{item.icon}</span>
                            <span>{item.label}</span>
                        </div>
                        <span className="fs-5">→</span>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default Sidebar;
