import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./layouts/App";
import { BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
console.disableYellowBox = true;
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
