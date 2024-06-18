import React from "react";
import { Row, Col } from "antd";
import {
  FilterOutlined,
  IdcardOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import "./style.css";
import SectionComponent from "./SectionComponent";
import CardComponent from "./CardComponent";
const Feature = () => {
  return (
    <>
      <SectionComponent text="Tính năng của hệ thống" />
      <Row
        gutter={[16, 16]}
        style={{ width: "80%", margin: "0 auto", textAlign: "center" }}
      >
        <Col xs={24} lg={8}>
          <CardComponent
            icon={<AppstoreOutlined className="icon_feature" />}
            title="Dễ sử dụng"
            description="Giao diện trực quan, tự động đưa ra tín hiệu mua bán rõ ràng giúp nhà đầu tư ra quyết định trong thời gian ngắn nhất."
          />
        </Col>
        <Col xs={24} lg={8}>
          <CardComponent
            icon={<FilterOutlined className="icon_feature" />}
            title="Bộ lọc chất lượng"
            description="Lọc tín hiệu MUA/BÁN sớm nhất, realtime cho các mã thuận lợi cao nhất, đảm bảo tối ưu hóa lợi nhuận trên vốn đầu tư ban đầu."
          />
        </Col>
        <Col xs={24} lg={8}>
          <CardComponent
            icon={<IdcardOutlined className="icon_feature" />}
            title="Bảo mật thông tin"
            description="Thông tin khách hàng được bảo mật an toàn"
          />
        </Col>
      </Row>
    </>
  );
};

export default Feature;
