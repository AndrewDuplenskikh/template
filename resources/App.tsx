import React from "react";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import './sass/app.scss';
import { Layout } from "./views/Layout";
import { Provider } from "react-redux";
import { rootReducer } from "./store/reducers/root";

function App() {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(
                thunk
            ),
            // следующая строка для включения redux devtools - исправлю позже
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return (
        <Provider store={store}>
            <Layout/>
        </Provider>
    );
}

export default App;