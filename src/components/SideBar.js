import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaUser, FaShoppingBag, FaWallet, FaMapMarkerAlt, FaStar, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: <FaUser />, label: "Thông tin tài khoản", path: "/thong-tin-tai-khoan" },
        { icon: <FaShoppingBag />, label: "Lịch sử đơn hàng", path: "/lich-su-don-hang" },
        { icon: <FaWallet />, label: "Lịch sử CoolCash", path: "/lich-su-coolcash" },
        { icon: <FaWallet />, label: "Ví Voucher", path: "/vi-voucher" },
        { icon: <FaMapMarkerAlt />, label: "Sổ địa chỉ", path: "/so-dia-chi" },
        { icon: <FaStar />, label: "Đánh giá và phản hồi", path: "/danh-gia-phan-hoi" },
        { icon: <FaQuestionCircle />, label: "Chính sách & Câu hỏi thường gặp", path: "/cs-va-cau-hoi" },
        { icon: <FaSignOutAlt />, label: "Đăng xuất", path: "/dang-nhap" },
    ];

    return (
        <div className="d-flex flex-column p-3 bg-light vh-100" style={{ width: "250px" }}>
            <ListGroup variant="flush">
                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <ListGroup.Item
                            key={index}
                            onClick={() => navigate(item.path)}
                            className={`d-flex justify-content-between align-items-center p-3 border-0 rounded mb-2 
                                ${isActive ? "bg-dark text-white" : "bg-white text-dark"} `}
                            action
                        >
                            <div className="d-flex align-items-center gap-2">
                                <span className="fs-5">{item.icon}</span>
                                <span>{item.label}</span>
                            </div>
                            <span className="fs-5">→</span>
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </div>
    );
};

export default Sidebar;
