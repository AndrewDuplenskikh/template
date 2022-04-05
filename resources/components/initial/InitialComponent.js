import React from "react";
import logo from '../../img/logo.svg';
import { NavLink, useHistory } from "react-router-dom";

function InitialComponent() {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <NavLink
                    className="App-link"
                    to="/"
                    exact
                >
                    Learn React
                </NavLink>
            </header>
        </div>
    );
}

export default InitialComponent;