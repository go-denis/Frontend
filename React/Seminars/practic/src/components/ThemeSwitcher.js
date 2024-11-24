import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/actions";

const ThemeSwitcher = () => {
    const theme = useSelector((state) => state.theme); // Получение текущей темы из состояния
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTheme()); // Переключение темы
    };

    return (
        <div
            style={{
                backgroundColor: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <h1>{theme === "light" ? "Светлая тема" : "Темная тема"}</h1>
            <button
                onClick={handleToggle}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                Переключить тему
            </button>
        </div>
    );
};

export default ThemeSwitcher;
