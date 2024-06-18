import React, { createContext, useContext, useReducer } from 'react'
import './App.css'
import homePage from './Page/Home/index.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Page/Login'
import Register from './Page/Register'
import Admin from './Page/Admin'
import { initialState, reducer } from './service/authReducer'

const HomePage = homePage
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)
export default App
