import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import App from "./App"; // counter
import App_Vidly from "./App_Vidly";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <BrowserRouter>
    <App_Vidly />
  </BrowserRouter>,
  document.getElementById("root")
);
