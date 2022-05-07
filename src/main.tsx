import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './components/Signup/Login/Login';
import CssBaseline from '@mui/material/CssBaseline';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CssBaseline />
        <Login></Login>
    </React.StrictMode>
);
