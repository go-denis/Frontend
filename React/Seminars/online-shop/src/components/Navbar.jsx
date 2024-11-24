import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Интернет-магазин
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Главная
                </Button>
                <Button color="inherit" component={Link} to="/catalog">
                    Каталог
                </Button>
                <Button color="inherit" component={Link} to="/cart">
                    Корзина
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
