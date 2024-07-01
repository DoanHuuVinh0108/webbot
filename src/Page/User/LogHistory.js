import HeaderComponent from "../../Component/HeaderComponent";
import { Row, Col } from "antd";
import Footer from "../../Component/Footer";
import HistoryComponent from "../../Component/HistoryComponent";
import React from "react";

const User = () => {
  return (
    <>
      <HeaderComponent />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row style={{ width: "90%" }}>
          <Col xs={24}>
            <HistoryComponent />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default User;
