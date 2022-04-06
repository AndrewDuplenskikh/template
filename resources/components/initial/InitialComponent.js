import React  from "react";
import logo from '../../img/logo.svg';
import { NavLink } from "react-router-dom";

function InitialComponent() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <NavLink
                    className="App-link"
                    to="/mui"
                    exact
                >
                    TO MUI PAGE
                </NavLink>
            </header>
        </div>
    );
}

export default InitialComponent;