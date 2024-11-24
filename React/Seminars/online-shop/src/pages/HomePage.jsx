import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <Container maxWidth="lg" sx={{ textAlign: "center", marginTop: "50px" }}>
            <Typography variant="h3" gutterBottom>
                Добро пожаловать в Интернет-магазин!
            </Typography>
            <Typography variant="h6" color="textSecondary" paragraph>
                Откройте для себя широкий ассортимент товаров, удобную сортировку и
                лёгкую навигацию.
            </Typography>
            <Box sx={{ marginTop: "20px" }}>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/catalog"
                    sx={{ marginRight: "10px" }}
                >
                    Перейти в каталог
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    component={Link}
                    to="/cart"
                >
                    Перейти в корзину
                </Button>
            </Box>
        </Container>
    );
};

export default HomePage;
