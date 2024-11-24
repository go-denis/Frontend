import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProductPage from "./components/ProductPage";
import ThemePage from "./components/ThemePage";
import TaskList from "./components/tasks/TaskList";
import { Link } from "react-router-dom";

function App() {
  return (
      <Router>
          <div>
              <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
                  <Link to="/">Главная</Link>
                  <Link to="/about">О нас</Link>
                  <Link to="/theme">Тема</Link>
                  <Link to="/products">Продукты</Link>
                  <Link to="/tasks">Задачи</Link>
              </nav>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/theme" element={<ThemePage />} />
                  <Route path="/products" element={<ProductPage />} />
                  <Route path="/tasks" element={<TaskList />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
