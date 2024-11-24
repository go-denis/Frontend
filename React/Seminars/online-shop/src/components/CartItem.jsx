import React from "react";
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Grid,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = ({ item, onIncrease, onDecrease }) => {
    return (
        <Card sx={{ marginBottom: "10px" }}>
            <CardContent>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Цена: ${item.price} | Количество: {item.quantity}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <IconButton
                            color="primary"
                            onClick={() => onIncrease(item.id)}
                        >
                            <AddCircleOutlineIcon />
                        </IconButton>
                        <IconButton
                            color="secondary"
                            onClick={() => onDecrease(item.id)}
                        >
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CartItem;
