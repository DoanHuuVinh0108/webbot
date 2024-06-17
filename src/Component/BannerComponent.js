import React from "react";
import { Button, Row, Col, Space, Descriptions } from "antd";
import "./style.css";
import { Link } from "react-router-dom";

const BannerComponent = () => {
  return (
    <Row className="header_background_image">
      <Col span={24} className="hexagon">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "40%",
            transform: "translate(-50%, -40%)",
          }}
        >
          <Descriptions
            title={
              <span
                style={{
                  color: "white",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                HIỆU SUẤT ĐẦU TƯ CAO
              </span>
            }
          >
            <Descriptions.Item span={3}>
              <span style={{ color: "white", fontSize: "1.1rem" }}>
                Tự động báo điểm mua bán phái sinh
              </span>
            </Descriptions.Item>
            <Descriptions.Item span={3} />
            <Descriptions.Item>
              <Space size={50} wrap="8">
                <Link to="/login">
                  <Button className="signin_signup signin">
                    <span>Đăng nhập</span>
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="signin_signup signup">
                    <span>Đăng Ký</span>
                  </Button>
                </Link>
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </div>
      </Col>
    </Row>
  );
};

export default BannerComponent;
