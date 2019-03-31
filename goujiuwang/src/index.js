import React from "react";
import {render} from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./routers/";
import 'swiper/dist/css/swiper.min.css';
import "./assets/css/base.css"
let ele = (
    <HashRouter>
        <App></App>
    </HashRouter>
)
render(
    ele,
    document.querySelector('#app')
)
