import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';
import store from "./store"
import { Provider } from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App>

            </App> 
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
)

