import React, { useState } from "react";
import { Table, ConfigProvider } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import SectionComponent from "./SectionComponent";
import userService from "../service/userService";
import authService from "../service/authService";
const { Column } = Table;

const HistoryComponent = () => {
  const [logHistory, setLogHistory] = useState();
  const user = authService.getCurrentUser() ? authService.getCurrentUser() : {};
  // console.log(user.userId);
  const id = user.userId;

  useState(() => {
    const fetchData = async () => {
      try {
        const data = await userService.getLogHistory(id);
        setLogHistory(data); // Đặt dữ liệu từ API vào state courses
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);
  console.log(logHistory);
  const dataSource = [
    {
      key: "1",
      datetime: "2024-06-25 14:45:00",
      signal: "SHORT",
      TP: "",
      SL: "",
      NumberContract: "",
      PriceBuy: "",
      Profit: "",
    },
    {
      key: "2",
      datetime: "2024-06-25 14:20:00",
      signal: "LONG",
      TP: "",
      SL: "",
      NumberContract: "",
      PriceBuy: "",
      Profit: "",
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
      <SectionComponent text="Lịch sử giao dịch" />

      <Table
        dataSource={dataSource}
        locale={{
          emptyText: (
            <React.Fragment>
              <FrownOutlined style={{ fontSize: 32 }} />
              <div>No Data</div>
            </React.Fragment>
          ),
        }}
      >
        <Column
          align="center"
          title="Thời gian"
          dataIndex="datetime"
          key="datetime"
        />
        <Column
          align="center"
          title="Loại lệnh"
          dataIndex="signal"
          key="signal"
        />
        <Column align="center" title="TP" dataIndex="TP" key="TP" />
        <Column align="center" title="SL" dataIndex="SL" key="SL" />
        <Column
          align="center"
          title="Số hợp đồng"
          dataIndex="NumberContract"
          key="NumberContract"
        />
        <Column
          align="center"
          title="Giá khớp"
          dataIndex="PriceBuy"
          key="PriceBuy"
        />
        <Column
          align="center"
          title="Lợi nhuận"
          dataIndex="Profit"
          key="Profit"
        />
      </Table>
    </ConfigProvider>
  );
};

export default HistoryComponent;
