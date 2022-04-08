import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { InitialForm } from './InitialForm/InitialForm';
import MyForm from './MyForm/MyForm';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const Layout: React.FC = () => {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                    <Switch>
                        <Route path="/" exact>
                            <InitialForm />
                        </Route>
                        <Route path="/myform" exact>
                            <MyForm />
                        </Route>
                    </Switch>
                </Box>
            </Container>
        </BrowserRouter>
    );
};
