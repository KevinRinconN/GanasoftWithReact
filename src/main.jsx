import React from "react";
import ReactDOM from "react-dom/client";
import 'semantic-ui-css/semantic.min.css'

import { CounterApp } from "./CounterApp";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <App value={1}/>
    </React.StrictMode>
);