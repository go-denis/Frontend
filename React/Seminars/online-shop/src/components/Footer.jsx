import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ textAlign: "center", p: 2, mt: 4, bgcolor: "#f5f5f5" }}>
            <Typography variant="body2">
                © {new Date().getFullYear()} Интернет-магазин. Все права защищены.
            </Typography>
        </Box>
    );
};

export default Footer;
