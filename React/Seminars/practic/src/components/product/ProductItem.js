import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability } from "../../redux/productsSlice";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Grid,
    CardActions,
} from "@mui/material";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <Card style={{ marginBottom: "15px" }}>
            <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                    {product.description}
                </Typography>
                <Typography variant="body1" style={{ marginTop: "10px" }}>
                    Цена: {product.price} руб.
                </Typography>
                <Typography
                    variant="body2"
                    style={{ color: product.available ? "green" : "red" }}
                >
                    Статус: {product.available ? "Доступен" : "Не доступен"}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container spacing={2}>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() => dispatch(toggleAvailability(product.id))}
                        >
                            Переключить доступность
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="error"
                            size="small"
                            onClick={() => dispatch(deleteProduct(product.id))}
                        >
                            Удалить
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
};

export default ProductItem;
