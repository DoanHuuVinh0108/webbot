import { Button, ConfigProvider, Form, Input, Spin, message } from 'antd'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LockOutlined } from '@ant-design/icons'
import authService from '../../service/authService'

const NewPassword = () => {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const location = useLocation()

  const { email, token } = location.state || {}

  const onFinish = (values) => {
    if (!email || !token) {
      message.error('Invalid reset link.')
      return
    }
    setLoading(true)
    const { newPassword, confirmPassword } = values
    if (newPassword !== confirmPassword) {
      message.error('Passwords do not match!')
      setLoading(false)
      return
    }

    const data = { email: email, token: token, newPassword: form.getFieldValue('newPassword') }
    console.log(data)
    authService
      .resetPassword(data)
      .then((res) => {
        console.log(res)
        message.success('Password thay đổi thành công! Đăng nhập với password mới')
        navigate('/login')
      })
      .catch((err) => {
        console.log(err)
        message.error('Đổi mật khẩu thất bại.')
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
            <Form.Item name="newPassword" rules={[{ required: true, message: 'Nhập mật khẩu!' }]}>
              <Input.Password
                size="large"
                placeholder="Mật khẩu mới"
                prefix={<LockOutlined className="text-gray-300 mx-1" />}
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              dependencies={['newPassword']}
              rules={[
                {
                  required: true,
                  message: 'Xác nhận mật khẩu!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
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

export default NewPassword
