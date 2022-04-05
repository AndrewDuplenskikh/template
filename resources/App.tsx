import React from "react";
import './sass/app.scss';
import { Layout } from "./views/Layout";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./store/reducers/root";

function App() {
    const store = createStore(rootReducer);

    return (
        <Provider store={store}>
            <Layout/>
        </Provider>
    );
}

export default App;