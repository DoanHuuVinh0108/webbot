import { Button, ConfigProvider, Form, Input, Spin, message } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import authService from '../../service/authService'

const ForgetPass = () => {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const onFinish = (values) => {
    setLoading(true)
    const { email, token } = values
    authService
      .confirmCode(form.getFieldsValue({ email, token: token }))
      .then((res) => {
        console.log(res)
        message.success('Xác thực thành công! Đặt lại mật khẩu mới')
        navigate('/newPass', { state: { email, token: token } })
      })
      .catch((err) => {
        console.log(err)
        message.error('Lỗi xác thực.')
      })
      .finally(() => setLoading(false))
  }

  const sendVerificationCode = (email) => {
    setLoading(true)
    authService
      .sendPassword(form.getFieldsValue(email))
      .then((res) => {
        console.log(res)
        message.success('Please check your email for the verification code.')
      })
      .catch((err) => {
        console.log(err)
        message.error('Failed to send verification code.')
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
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please enter your email!' }]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-300 mx-1" />}
                placeholder="Email"
                size="large"
                className="text-gray-600"
              />
            </Form.Item>
            <Form.Item
              name="token"
              rules={[{ required: true, message: 'Please enter the verification code!' }]}
            >
              <Input
                size="large"
                placeholder="Verification Code"
                prefix={<LockOutlined className="text-gray-300 mx-1" />}
                addonAfter={
                  <Button type="primary" onClick={sendVerificationCode} disabled={loading}>
                    {loading ? <Spin /> : 'Gửi'}
                  </Button>
                }
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
                className="w-full px-4  text-white bg-green-700 rounded-3xl hover:bg-green-600 "
                disabled={loading}
              >
                {loading ? <Spin style={{ color: 'red' }} /> : 'Xác nhận'}
              </Button>
            </ConfigProvider>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ForgetPass
