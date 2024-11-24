import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/productsSlice";
import {
    TextField,
    Button,
    Grid,
    FormControlLabel,
    Checkbox,
    Paper,
} from "@mui/material";

const AddProductForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addProduct({
                name,
                description,
                price: parseFloat(price),
                available,
            })
        );
        setName("");
        setDescription("");
        setPrice("");
        setAvailable(false);
    };

    return (
        <Paper style={{ padding: "20px", marginBottom: "20px" }}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Название продукта"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Описание продукта"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Цена"
                            variant="outlined"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={available}
                                    onChange={(e) => setAvailable(e.target.checked)}
                                />
                            }
                            label="Доступен"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Добавить продукт
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default AddProductForm;
