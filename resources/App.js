import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './sass/app.scss';
import InitialComponent from './components/initial/InitialComponent.js';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <InitialComponent />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;