import { Button, ConfigProvider, Form, Input, Spin, message } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LockOutlined, PhoneOutlined } from '@ant-design/icons'
import authService from '../../service/authService'
import { useAuth } from '../../App'
import authActions from '../../service/authAction'

const Login = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { dispatch } = useAuth()

  const handleSubmit = () => {
    setLoading(true)
    authService
      .login(form.getFieldsValue())
      .then((res) => {
        dispatch(authActions.LOGIN)
        console.log(res)
        message.success('Đăng nhập thành công')
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
        message.error('Tài khoản hoặc mật khẩu không chính xác')
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="lg:w-1/3 md:w-1/2 w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-12 ">
          <div className="flex justify-center items-center">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" className="w-48 text-center" />
            </Link>
          </div>
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item name="username">
              <Input
                prefix={<PhoneOutlined className="text-gray-300 mx-1" />}
                placeholder="Số điện thoại"
                size="large"
                className="text-gray-600"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu',
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Mật khẩu"
                prefix={<LockOutlined className="text-gray-300 mx-1" />}
              />
            </Form.Item>
            <div className="flex items-center justify-end">
              <Link className="text-sm text-green-700 mb-6">Quên mật khẩu?</Link>
            </div>
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
                className="w-full px-4  text-white bg-green-700 rounded-3xl hover:bg-green-600 "
              >
                {loading ? <Spin style={{ color: 'red' }} /> : 'Đăng nhập'}
              </Button>
            </ConfigProvider>
          </Form>
          <div className="mt-6 text-center">
            <p className="mt-6 text-sm text-gray-700">
              Chưa có tài khoản?
              <Link to="/register" className="text-green-700">
                {' '}
                Đăng ký
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
