import React, { createContext, useContext, useReducer } from "react";
import "./App.css";
import homePage from "./Page/Home/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Admin from "./Page/Admin";
import { initialState, reducer } from "./service/authReducer";
import Backtest from "./Page/Backtest/index.js";
import ServicePrice from "./Page/ServicePrice/index.js";
import Contact from "./Page/Contact/index.js";
import About from "./Page/About/index.js";
import ForgetPass from "./Page/ForgetPass";
import NewPassword from "./Page/NewPassword";
import { Info, LogHistory } from "./Page/User";
const HomePage = homePage;
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
          <Route path="/info" element={<Info />} />
          <Route path="/history" element={<LogHistory />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export default App;
