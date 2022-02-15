import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom";

// import { AuthProvider } from "./context/AuthProvider";

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
