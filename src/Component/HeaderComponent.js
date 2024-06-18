import React, { useState, useEffect } from 'react'
import { MenuOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Row, Col, Space, Descriptions, Avatar, Dropdown } from 'antd'
import './style.css' // Ensure to include your CSS file
import { Link } from 'react-router-dom'
import { useAuth } from '../App'
import authService from '../service/authService'
import authActions from '../service/authAction'

const HeaderComponent = () => {
  const { state, dispatch } = useAuth()
  const [username, setUsername] = useState('')

  useEffect(() => {
    const user = authService.getCurrentUser()
    user ? setUsername(user.name) : setUsername('')
  }, [state.isAuthenticated])

  const handleLogout = () => {
    dispatch(authActions.LOGOUT)
    authService.logout()
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const items = [
    {
      key: '1',
      label: <Link to="/history">Lịch sử giao dịch</Link>,
    },
    {
      key: '2',
      label: <Link to="/edit">Chỉnh sửa profile</Link>,
    },
    {
      key: '3',
      label: <div onClick={handleLogout}>Đăng xuất</div>,
    },
  ]
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1000)
  }

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navigationItems = (
    <ul
      className={`custom-menu ${isMobile ? 'vertical' : 'horizontal'} ${
        isMobile && isMenuVisible ? 'visible' : ''
      }`}
    >
      <li>
        <Link to="/">Trang chủ</Link>
      </li>
      <li>
        <Link to="/about">Giới thiệu</Link>
      </li>
      <li>
        <Link to="/price list">Bảng giá dịch vụ</Link>
      </li>
      <li>
        <Link to="/contact">Liên hệ</Link>
      </li>
      <li>
        <Link to="/backtest">Backtest</Link>
      </li>
      <li>
        {state.isAuthenticated ? (
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <div className="user-content" style={{ marginLeft: 10 }}>
              <span className="user-name">
                <Col>
                  <div>
                    <Avatar size="large" icon={<UserOutlined />} />
                  </div>
                  <span className="">{username}</span>
                </Col>
              </span>
            </div>
          </Dropdown>
        ) : (
          <div className="user-content" style={{ marginLeft: 10 }}>
            <Avatar size="large" icon={<UserOutlined />} />
          </div>
        )}
      </li>
    </ul>
  )

  return (
    <>
      <Row
        align="middle"
        style={{
          width: '100%',
          backgroundColor: '#094442',
          padding: '10px 0',
          minHeight: '80px',
        }}
        className={`header-row ${isMenuVisible ? 'expanded' : ''}`}
      >
        <Col offset={1}>
          <img src="/images/logo.png" alt="Logo" className="logo" />
        </Col>
        <Col flex="auto">
          {isMobile ? (
            <div
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <Button
                type="primary"
                icon={<MenuOutlined />}
                onClick={toggleMenu}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid white',
                }}
              />
            </div>
          ) : null}
          {navigationItems}
        </Col>
      </Row>
      <Row className="header_background_image">
        <Col span={24} className="hexagon">
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '40%',
              transform: 'translate(-50%, -40%)',
            }}
          >
            <Descriptions
              title={
                <span
                  style={{
                    color: 'white',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  HIỆU SUẤT ĐẦU TƯ CAO
                </span>
              }
            >
              <Descriptions.Item span={3}>
                <span style={{ color: 'white', fontSize: '1.1rem' }}>
                  Tự động báo điểm mua bán phái sinh
                </span>
              </Descriptions.Item>
              <Descriptions.Item span={3} />
              <Descriptions.Item>
                <Space size={50} wrap="8">
                  <Link to="/login">
                    <Button className="signin_signup signin">
                      <span>Đăng nhập</span>
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button className="signin_signup signup">
                      <span>Đăng Ký</span>
                    </Button>
                  </Link>
                </Space>
              </Descriptions.Item>
            </Descriptions>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default HeaderComponent
