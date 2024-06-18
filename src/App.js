import React from "react";
import "./App.css";
import homePage from "./Page/Home/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Backtest from "./Page/Backtest/index.js";
import ServicePrice from "./Page/ServicePrice/index.js";
import Contact from "./Page/Contact/index.js";
import About from "./Page/About/index.js";
const HomePage = homePage;
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/backtest" element={<Backtest />} />
        <Route path="/price" element={<ServicePrice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
