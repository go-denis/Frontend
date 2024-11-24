import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <Card sx={{ maxWidth: 300, margin: "10px" }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.size.join(", ")}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    Цена: ${product.price}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => onAddToCart(product)}
                >
                    Добавить в корзину
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
