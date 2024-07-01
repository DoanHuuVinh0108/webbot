import React, { createContext, useContext, useEffect, useReducer } from 'react'
import './App.css'
import homePage from './Page/Home/index.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Page/Login'
import Register from './Page/Register'
import { initialState, reducer } from './service/authReducer'

import Backtest from './Page/Backtest/index.js'
import ServicePrice from './Page/ServicePrice/index.js'
import Contact from './Page/Contact/index.js'
import About from './Page/About/index.js'
import ForgetPass from './Page/ForgetPass'
import NewPassword from './Page/NewPassword'
import authService from './service/authService.js'

const HomePage = homePage
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.isAuthenticated) {
      const user = authService.getCurrentUser()
      const data = { refresh_token: user.refresh_token }
      authService.refreshToken(data).then((res) => authService.setUserToken(res.data?.access_token))
      setInterval(() => {
        authService
          .refreshToken(data)
          .then((res) => authService.setUserToken(res.data?.access_token))
      }, 300000)
    }
  }, [state.isAuthenticated])

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/backtest" element={<Backtest />} />
          <Route path="/price" element={<ServicePrice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPass" element={<ForgetPass />} />
          <Route path="/newPass" element={<NewPassword />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)
export default App
