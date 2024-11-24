import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const ThemePage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Управление темой</h1>
            <ThemeSwitcher />
        </div>
    );
}


export default ThemePage;