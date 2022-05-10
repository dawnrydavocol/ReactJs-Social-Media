import React from 'react';
import { Box, display } from '@mui/system';
import { Stack, FormControlLabel, Checkbox, Divider } from '@mui/material';
import {
    Grid,
    TextField,
    Typography,
    Button,
    AppBar,
    Toolbar,
    Paper,
    IconButton,
    Avatar
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Post } from './Post';

const MyAppBar = () => {
    return (
        <Box
            borderBottom={1}
            borderColor={'divider'}
            component="header"
            zIndex={20}
            px={3}
            sx={{
                justifyContent: 'space-between',
                top: 0,
                position: 'fixed',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                bgcolor: 'background.paper'
            }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                }}>
                <IconButton aria-label="logo" size="large">
                    <TwitterIcon color="primary" fontSize="inherit" />
                </IconButton>
                <Typography
                    fontWeight="bold"
                    variant="h6"
                    component="h1"
                    color="primary">
                    Tunog
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5
                    }}>
                    <Avatar>TD</Avatar>
                </Box>
            </Box>
        </Box>
    );
};

export const Newsfeed = () => {
    return (
        <Box
            sx={{
                paddingTop: '64px',
                display: 'flex',
                justifyContent: 'center'
            }}>
            <MyAppBar></MyAppBar>
            <Stack>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </Stack>
        </Box>
    );
};
