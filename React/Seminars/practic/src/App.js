import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Navigation from "./components/Navigation";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
      <Router>
          <div>
              <ThemeSwitcher />
              <Navigation />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
