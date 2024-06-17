import React from "react";
import { Col, Descriptions, Row, Button, Form, Input } from "antd";
import MapComponent from "./MapComponent";
import SectionComponent from "./SectionComponent";
const ContactComponent = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    form.resetFields();
  };

  const validateMessages = {
    required: "${label} không được để trống!",
    types: {
      email: "${label} không đúng định dạng!",
    },
  };
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Row gutter={16} style={{width: "80%"}}>
        <Col span={24}>
          <MapComponent />
        </Col>
        <Col span={24}>
          <SectionComponent text="Liên hệ với chúng tôi" />
        </Col>
        <Col span={10}>
          <Descriptions
            title={
              <h1
                style={{
                  fontSize: "1.8rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Thông tin để liên hệ{" "}
              </h1>
            }
            layout="horizontal"
            column={1}
          >
            <Descriptions.Item>
              <span>
                Quý khách hàng cần tư vấn thêm về sản phẩm, hoặc thắc mắc có thể
                liên hệ với chúng tôi theo thông tin dưới đây:
              </span>
            </Descriptions.Item>
            <Descriptions.Item>
              <hr style={{ width: "100%", height: 1 }} />
            </Descriptions.Item>
            <Descriptions.Item label="Trụ sở chính">
              CUSC - Cantho University Software Center 1 Đ. Lý Tự Trọng, An Phú,
              Ninh Kiều, Cần Thơ
            </Descriptions.Item>
            <Descriptions.Item label="Hotline">XXXX</Descriptions.Item>
            <Descriptions.Item label="Email">XXX@gmail.com</Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={14}>
          <Form
            onFinish={onFinish}
            form={form}
            style={{
              width: "100%",
            }}
            layout="vertical"
            validateMessages={validateMessages}
          >
            <Row gutter={[16, 16]}>
              <Col sm={24} md={12}>
                <Form.Item
                  name="name"
                  label="Họ tên"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  style={{ marginBottom: 0 }}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col sm={24} md={12}>
                <Form.Item
                  name="email"
                  label="Email "
                  rules={[
                    {
                      type: "email",
                      required: true,
                    },
                  ]}
                  style={{ marginBottom: 0 }}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="introduction"
                  label="Nội dung"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  style={{ marginBottom: 0 }}
                >
                  <Input.TextArea />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="backtest">
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ContactComponent;
