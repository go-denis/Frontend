import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { Typography } from "@mui/material";

const ProductList = () => {
    const products = useSelector((state) => state.products.products);

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Каталог продуктов
            </Typography>
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))
            ) : (
                <Typography variant="body1" color="textSecondary">
                    Продуктов пока нет.
                </Typography>
            )}
        </div>
    );
};

export default ProductList;
