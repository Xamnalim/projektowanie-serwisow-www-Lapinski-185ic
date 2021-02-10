import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";

//Import pliku css dodającego opaskę w lewym górnym rogu aplikacji
import "github-fork-ribbon-css/gh-fork-ribbon.css";

//Wyrenderowanie głównego komponentu aplikacji
ReactDOM.render(<App />, document.getElementById("root"));
