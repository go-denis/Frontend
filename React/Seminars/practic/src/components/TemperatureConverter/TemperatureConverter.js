import React, { useState } from "react";
import { TextField, Grid, Typography } from "@mui/material";

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");

    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);
        if (value !== "") {
            setFahrenheit(((value * 9) / 5 + 32).toFixed(2));
        } else {
            setFahrenheit("");
        }
    };

    const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        if (value !== "") {
            setCelsius(((value - 32) * 5) / 9).toFixed(2);
        } else {
            setCelsius("");
        }
    };

    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Typography variant="h4" align="center">
                    Температурный конвертер
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Градусы Цельсия"
                    variant="outlined"
                    fullWidth
                    value={celsius}
                    onChange={handleCelsiusChange}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Градусы Фаренгейта"
                    variant="outlined"
                    fullWidth
                    value={fahrenheit}
                    onChange={handleFahrenheitChange}
                />
            </Grid>
        </Grid>
    );
};

export default TemperatureConverter;
