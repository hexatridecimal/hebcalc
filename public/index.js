import { React } from "react";
import { ReactDOM }from "react-dom";

import { App } from "./App";
import "./index.css";

function startApp() {
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <React.StrictMode>
      <App />
      </React.StrictMode>,
    rootElement
  );
}

if(!window.cordova) {
  startApp()
} else {
  document.addEventListener('deviceready', startApp, false)
}

