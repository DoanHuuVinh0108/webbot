import { LockOutlined, UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { Button, ConfigProvider, Form, Input, Spin } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../../service/authService'
import { useState } from 'react'

export default function Register() {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSumit = () => {
    setLoading(true)
    authService
      .register(form.getFieldsValue())
      .then((res) => {
        console.log(res)
        navigate('/login')
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="lg:w-1/3 md:w-1/2 w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-12">
          <div className="flex justify-center items-center">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-48"
              />
            </Link>
          </div>
          <Form form={form} onFinish={handleSumit}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Nhập tên của bạn!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-300 mx-1" />}
                placeholder="Tên"
                size="large"
                className="text-gray-600"
              />
            </Form.Item>
            <Form.Item
              // label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Vui lòng nhập email!',
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-300 mx-1" />}
                placeholder="Email"
                size="large"
                className="text-gray-600"
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập số điện thoại!',
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined className="text-gray-300 mx-1" />}
                placeholder="Số điện thoại"
                size="large"
                className="text-gray-600"
              />
            </Form.Item>
            <Form.Item
              // label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-300 mx-1" />}
                placeholder="Mật khẩu"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Xác nhận mật khẩu!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('Mật khẩu không khớp!'))
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-300 mx-1" />}
                placeholder="Xác nhận mật khẩu"
                size="large"
              />
            </Form.Item>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorPrimary: 'rgb(127 178 65)',
                    colorPrimaryHover: 'rgb(142, 178, 93)',
                    colorPrimaryActive: 'rgb(14, 75, 0)',
                  },
                },
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full px-4 mt-4 text-white bg-green-700 rounded-3xl hover:bg-green-600 "
              >
                {loading ? <Spin /> : 'Đăng ký'}
              </Button>
            </ConfigProvider>
          </Form>
          <div className="mt-6 text-center">
            <p className="mt-6 text-sm text-gray-700">
              Bạn đã có tài khoản?
              <Link to="/login" className="text-green-700">
                {' '}
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
