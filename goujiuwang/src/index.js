import React from "react";
import {render} from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./routers/"
let ele = (
    <HashRouter>
        <App></App>
    </HashRouter>
)
render(
    ele,
    document.querySelector('#app')
)
