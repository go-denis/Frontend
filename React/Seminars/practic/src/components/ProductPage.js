import React from "react";
import AddProductForm from "./product/AddProductForm";
import ProductList from "./product/ProductList";
import { Container, Typography } from "@mui/material";

const ProductPage = () => {
    return (
        <Container maxWidth="md" style={{ marginTop: "20px" }}>
            <Typography variant="h4" align="center" gutterBottom>
                Управление продуктами
            </Typography>
            <AddProductForm />
            <ProductList />
        </Container>
    );
};

export default ProductPage;
