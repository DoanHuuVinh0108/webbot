import React from "react";
import {
  Row,
  Col,
  Form,
  DatePicker,
  Button,
  Descriptions,
  Space,
  ConfigProvider,
  Card,
  Flex,
  Progress,
} from "antd";
import "./style.css";

const FeatureBot = () => {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 10,
      },
    },
  };
  const conicColors = {
    "0%": "#87d068",
    "50%": "#ffe58f",
    "100%": "#ffccc7",
  };
  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      fromDay: fieldsValue["fromDay"].format("YYYY-MM-DD"),
      toDay: fieldsValue["toDay"].format("YYYY-MM-DD"),
    };
    console.log("Từ ngày: ", values.fromDay);
    console.log("Đến ngày: ", values.toDay);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: "#bfbfc5",
          },
          Descriptions: {
            titleColor: "#25a09b",
          },
        },
      }}
    >
      <Row gutter={[16, 16]} style={{width: '80%', margin: '0 auto', textAlign: 'center'}}>
        <Col xs={24} lg={8}>
          <Card>
            <Descriptions title="THÔNG TIN BOT" column={1}>
              <Descriptions.Item label="Tên bot">
                <span style={{ fontWeight: "bold" }}>Chicken Rock3 V3.9 </span>
              </Descriptions.Item>
              <Descriptions.Item label="Thông tin">
                <span>
                  Mã GD:VN30F1M | Khung TG: 15 phút | Giá khớp lệnh: Giá mở cửa
                  sau nến tín hiệu
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="Thời gian Backtest">
                <span>từ 2024-05-01 đến 2024-05-31</span>
              </Descriptions.Item>
              <Descriptions.Item label="Liên kết">
                {" "}
                <span style={{ color: "#25a09b" }}>
                  https://chobot.vn/bot/backtest?guid=8cfe6c72-c31a-435c-a2f5-d409edab2fec
                </span>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card style={{ height: "100%" }}>
            <Descriptions title="THÔNG TIN CHI TIẾT" />
            <Form {...formItemLayout} onFinish={onFinish}>
              <Form.Item label="Từ ngày" name="fromDay">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Đến ngày" name="toDay">
                <DatePicker />
              </Form.Item>
              <Form.Item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Space>
                  <Button htmlType="submit" className="backtest">
                    <span className="textbacktest">Backtest</span>
                  </Button>
                  <Button className="order_number">
                    <a href="https://google.com">Số lệnh</a>
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card style={{ height: "100%" }}>
            <Descriptions title="TỈ LỆ THẮNG" />
            <Flex align="center" justify="center" gap="middle" wrap>
              <Progress
                size={150}
                type="circle"
                percent={93}
                strokeColor={conicColors}
              />
            </Flex>
          </Card>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default FeatureBot;
