import React from "react";
import { Row, Col, ConfigProvider, Card } from "antd";
import {
  FilterOutlined,
  IdcardOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import "./style.css";
import SectionComponent from "./SectionComponent";
const { Meta } = Card;
const Feature = () => {
  return (
    <ConfigProvider
      theme={{
        components: {},
      }}
    >
      <SectionComponent text="Tính năng của hệ thống" />
      <Row
        gutter={[16, 16]}
        style={{ width: "80%", margin: "0 auto", textAlign: "center" }}
      >
        <Col xs={24} lg={8}>
          <Card
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Meta
              title={
                <div flex items-center>
                  <AppstoreOutlined className="icon_feature" />
                  <div>Dễ sử dụng</div>
                </div>
              }
              description="Giao diện trực quan, tự động đưa ra tín hiệu mua bán rõ ràng giúp nhà đầu tư ra quyết định trong thời gian ngắn nhất."
            />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Meta
              title={
                <div flex items-center>
                  <FilterOutlined className="icon_feature" />
                  <div>Bộ lọc chất lượng</div>
                </div>
              }
              description="Lọc tín hiệu MUA/BÁN sớm nhất, realtime cho các mã thuận lợi cao nhất, đảm bảo tối ưu hóa lợi nhuận trên vốn đầu tư ban đầu."
            />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Meta
              title={
                <div flex items-center>
                  <IdcardOutlined className="icon_feature" />
                  <div>Bảo mật thông tin</div>
                </div>
              }
              description="Thông tin khách hàng được bảo mật an toàn"
            />
          </Card>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default Feature;
