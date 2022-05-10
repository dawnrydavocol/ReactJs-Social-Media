import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './components/Signup/Login/Login';
import { Newsfeed } from './components/Newsfeed/Newsfeed';
import { Post } from './components/Newsfeed/Post';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <React.StrictMode>
            <CssBaseline />
            <Newsfeed></Newsfeed>
        </React.StrictMode>
    </ThemeProvider>
);
