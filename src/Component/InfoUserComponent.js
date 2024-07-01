import React from "react";
import { Descriptions, ConfigProvider, Row, Col, Table } from "antd";
import SectionComponent from "./SectionComponent";
import authService from "../service/authService";

const InfoUserComponent = () => {
  const user = authService.getCurrentUser() ? authService.getCurrentUser() : {};
  
  const items = [
    {
      key: "1",
      label: "Tên",
      children: <p>{user.name}</p>,
      span: 2,
    },
    {
      key: "2",
      label: "Số điện thoại",
      children: <p>{user.phoneNumber}</p>,
    },
    {
      key: "3",
      label: "Email",
      children: <p>{user.email}</p>,
    },
  ];
  const dataSource = [
    {
      key: "1",
      Date: "1 tháng",
      PriceBot: 700000,
      StartDate: "27-06-2024",
      EndDate: "27-07-2024",
      PaymentMethod: "Momo",
      Status: "Còn hạn sử dụng",
    },
    {
      key: "1",
      Date: "3 tháng",
      PriceBot: 2100000,
      StartDate: "01-02-2024",
      EndDate: "01-05-2024",
      PaymentMethod: "Zalo",
      Status: "hết hạn sử dụng",
    },
  ];

  const columns = [
    {
      title: "Gói",
      dataIndex: "Date",
      key: "Date",
    },
    {
      title: "Giá ",
      dataIndex: "PriceBot",
      key: "PriceBot",
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "StartDate",
      key: "StartDate",
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "EndDate",
      key: "EndDate",
    },
    {
      title: "Phương thức thanh toán",
      dataIndex: "PaymentMethod",
      key: "PaymentMethod",
      render: (text) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {text}
          </div>
        );
      },
    },
    {
      title: "Trạng thái gói",
      dataIndex: "Status",
      key: "Status",
    },
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "#25a09b",
            headerColor: "white",
          },
        },
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row style={{ width: "90%" }}>
          <Col md={10} xs={24}>
            <SectionComponent text="Thông tin tài khoản" />
            <Descriptions column={2} items={items} />
          </Col>
          <Col md={14} xs={24}>
            <SectionComponent text="Thông tin đăng ký các gói dịch vụ" />
            <Table dataSource={dataSource} columns={columns} />;
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
};

export default InfoUserComponent;
