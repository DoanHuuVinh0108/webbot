import React, { useState, useEffect } from "react";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Row, Col, Avatar, Dropdown } from "antd";
import "./style.css"; // Ensure to include your CSS file
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const items = [
    {
      key: "1",
      label: <Link to="/history">Lịch sử giao dịch</Link>,
    },
    {
      key: "2",
      label: <Link to="/edit">Chỉnh sửa profile</Link>,
    },
    {
      key: "3",
      label: <Link to="/logout">Đăng xuất</Link>,
    },
  ];
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1000);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigationItems = (
    <ul
      className={`custom-menu ${isMobile ? "vertical" : "horizontal"} ${
        isMobile && isMenuVisible ? "visible" : ""
      }`}
    >
      <li>
        <Link to="/">Trang chủ</Link>
      </li>
      <li>
        <Link to="/about">Giới thiệu</Link>
      </li>
      <li>
        <Link to="/backtest">Backtest</Link>
      </li>
      <li>
        <Link to="/price">Bảng giá dịch vụ</Link>
      </li>

      <li>
        <Link to="/contact">Liên hệ</Link>
      </li>
      <li>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow
        >
          <div className="user-content" style={{ marginLeft: 10 }}>
            <Avatar size="large" icon={<UserOutlined />} />
            <span className="user-name">Hiền</span>
          </div>
        </Dropdown>
      </li>
    </ul>
  );

  return (
    <>
      <Row
        align="middle"
        style={{
          width: "100%",
          backgroundColor: "#094442",
          padding: "10px 0",
          minHeight: "80px",
        }}
        className={`header-row ${isMenuVisible ? "expanded" : ""}`}
      >
        <Col offset={1}>
          <img src="/images/logo.png" alt="Logo" className="logo" />
        </Col>
        <Col flex="auto">
          {isMobile ? (
            <div
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Button
                type="primary"
                icon={<MenuOutlined />}
                onClick={toggleMenu}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid white",
                }}
              />
            </div>
          ) : null}
          {navigationItems}
        </Col>
      </Row>
    </>
  );
};

export default HeaderComponent;
