import React from 'react';
import './App.css';
import homePage from './Page/Home/index.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const HomePage = homePage;
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
        </Routes>
    </Router>
  );
}

export default App;
