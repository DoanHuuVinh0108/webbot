import React from "react";
import { Row, Col } from "antd";
import {
  BarChartOutlined,
  FallOutlined,
  GlobalOutlined,
  CustomerServiceOutlined,
  ApartmentOutlined,
  PieChartOutlined,
  StockOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./style.css";
import SectionComponent from "./SectionComponent";
import CardComponent from "./CardComponent";
const AboutComponent = () => {
  return (
    <>
      <Row
        gutter={[16, 16]}
        style={{
          width: "80%",
          margin: "0 auto",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Col xs={24}>
          <SectionComponent text="Chào mừng bạn đến với Bot Đầu Tư Chứng Khoán" />
        </Col>
        <Col xs={24}>
          <CardComponent
            description={
              <Row gutter={[16, 16]}>
                <Col xs={24} lg={14}>
                  <h1
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      textAlign: "left",
                    }}
                  >
                    Trong thời đại công nghệ 4.0, việc ứng dụng trí tuệ nhân tạo
                    (AI) và máy học (machine learning) vào đầu tư chứng khoán đã
                    trở nên phổ biến và đem lại nhiều lợi ích đáng kể cho nhà
                    đầu tư. Bot Đầu Tư Chứng Khoán là một công cụ mạnh mẽ giúp
                    bạn tối ưu hóa danh mục đầu tư và gia tăng lợi nhuận với sự
                    hỗ trợ của công nghệ hiện đại nhất, đặc biệt được phát triển
                    trên nền tảng Amibroker.
                  </h1>
                </Col>
                <Col xs={24} lg={10}>
                  <img
                    src="https://timo.vn/wp-content/uploads/so-giao-dich-chung-khoan-la-gi.png"
                    alt="ad"
                  />
                </Col>
              </Row>
            }
          />
        </Col>
        <Col xs={24}>
          <SectionComponent text="Tại Sao Chọn Bot Đầu Tư Chứng Khoán?" />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <CardComponent
            icon={<StockOutlined className="icon_feature" />}
            title="Phân Tích Dữ Liệu Nhanh Chóng và Chính Xác"
            description="Sử dụng Amibroker, một trong những nền tảng phân tích kỹ thuật hàng đầu, Bot tận dụng các thuật toán tiên tiến để phân tích hàng triệu điểm dữ liệu từ thị trường chứng khoán toàn cầu. Điều này giúp phát hiện các xu hướng và cơ hội đầu tư mà con người có thể bỏ lỡ."
          />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <CardComponent
            icon={<GlobalOutlined className="icon_feature" />}
            title="Giao Dịch Tự Động và Linh Hoạt"
            description="Bot có khả năng thực hiện giao dịch tự động dựa trên các chiến lược đã được lập trình sẵn hoặc tùy chỉnh theo nhu cầu của bạn, được lập trình trong Amibroker AFL (Amibroker Formula Language). Điều này đảm bảo rằng bạn không bỏ lỡ bất kỳ cơ hội nào, ngay cả khi bạn đang bận rộn."
          />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <CardComponent
            icon={<FallOutlined className="icon_feature" />}
            title="Giảm Thiểu Rủi Ro"
            description="Với khả năng phân tích rủi ro và quản lý danh mục đầu tư một cách hiệu quả, Bot giúp bạn giảm thiểu rủi ro và bảo vệ lợi nhuận của mình."
          />
        </Col>
        <Col xs={24} md={12} lg={6}>
          <CardComponent
            icon={<CustomerServiceOutlined className="icon_feature" />}
            title="Hỗ Trợ 24/7"
            description="Bot hoạt động liên tục 24/7, giúp bạn luôn nắm bắt được mọi biến động của thị trường. Bạn có thể yên tâm rằng danh mục đầu tư của mình luôn được theo dõi và điều chỉnh kịp thời."
          />
        </Col>
        <Col xs={24}>
          <SectionComponent text="Các Tính Năng Nổi Bật" />
        </Col>
        <Col xs={24} md={8}>
          <CardComponent
            icon={<BarChartOutlined className="icon_feature" />}
            title="Phân Tích Kỹ Thuật và Cơ Bản"
            description="Bot sử dụng cả hai phương pháp phân tích kỹ thuật và cơ bản, được hỗ trợ bởi Amibroker, để đưa ra các quyết định đầu tư thông minh."
          />
        </Col>
        <Col xs={24} md={8}>
          <CardComponent
            icon={<ApartmentOutlined className="icon_feature" />}
            title="Tùy Biến Cao"
            description="Bot cho phép bạn tùy chỉnh chiến lược đầu tư theo phong cách và mục tiêu cá nhân, với sự linh hoạt của ngôn ngữ AFL trong Amibroker."
          />
        </Col>
        <Col xs={24} md={8}>
          <CardComponent
            icon={<PieChartOutlined className="icon_feature" />}
            title="Báo Cáo và Thống Kê Chi Tiết"
            description="Nhận các báo cáo và thống kê chi tiết về hiệu suất đầu tư của bạn một cách dễ dàng và nhanh chóng thông qua Amibroker."
          />
        </Col>
        <Col xs={24} style={{ marginTop: 50, marginBottom: 50 }}>
          <Link to="/price" className="button_signup">
            Đăng ký ngay
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default AboutComponent;
