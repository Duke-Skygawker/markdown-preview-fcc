import React from "react";
import ReactDOM from "react-dom";
import AppContext from "./Context/Context";
import App from "./App.jsx";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>,
  document.getElementById("root")
);
