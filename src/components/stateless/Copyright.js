import {Box, Link, Typography} from "@material-ui/core";
import React from "react";

export default function Copyright() {
    return (
        <Box pt={4}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="/">
                    Все права защищены
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}