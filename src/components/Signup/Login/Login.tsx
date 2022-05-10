import React from 'react';
import { Box, display } from '@mui/system';
import { Stack, FormControlLabel, Checkbox, Divider } from '@mui/material';
import { Grid, TextField, Typography, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Login = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Box
                sx={{
                    margin: 3,
                    top: 0,
                    left: 0,
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1
                }}>
                <TwitterIcon
                    sx={{
                        fontSize: 38
                    }}></TwitterIcon>
                <Typography fontWeight="medium" variant="h6" color="initial">
                    Twitter
                </Typography>
            </Box>
            <Box
                mx={3}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: 400,
                    minWidth: 340,
                    maxWidth: 420
                }}>
                <Typography fontWeight="bold" variant="h4" component="h1">
                    Login
                </Typography>
                <Typography variant="body1" component="h2">
                    Email
                </Typography>
                <TextField
                    fullWidth
                    id="login-form__email-input"
                    label="Email"
                />
                <Typography variant="body1" component="h2">
                    Password
                </Typography>
                <TextField
                    fullWidth
                    id="login-form__password-input"
                    label="Password"
                    type="password"
                />

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Remember me"
                    />
                    <Typography
                        fontWeight="bold"
                        variant="subtitle1"
                        color="initial">
                        Forgot Password?
                    </Typography>
                </Box>

                <Button size="large" variant="contained">
                    Login
                </Button>

                <Divider>or login with</Divider>
                <Button
                    size="large"
                    variant="outlined"
                    startIcon={<GoogleIcon />}>
                    Google
                </Button>
                <Button
                    size="large"
                    variant="outlined"
                    startIcon={<FacebookIcon />}>
                    Facebook
                </Button>
                <Typography
                    fontWeight="medium"
                    variant="subtitle1"
                    color="initial">
                    Don't have account? Click Here to Sign-Up!
                </Typography>
            </Box>
        </Box>
    );
};
