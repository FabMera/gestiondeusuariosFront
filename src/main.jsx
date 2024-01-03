import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import UsersApp from "./UsersApp";
import { BrowserRouter } from "react-router-dom";
/* import { AuthProvider } from "./auth/context/AuthProvider"; */

ReactDOM.createRoot(document.getElementById("root")).render(
    /* Eliminamos AuthProvider para utilizar redux */
    <React.StrictMode>
        <BrowserRouter>
            <UsersApp />
        </BrowserRouter>
    </React.StrictMode>
);
