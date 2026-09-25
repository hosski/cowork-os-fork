import React from "react";
import ReactDOM from "react-dom/client";
import "./react-refresh-ignored-exports";
import { App } from "./App";
import { CoWorkReduxWrapper } from "./redux-provider";
import "./styles/index.css";
import "./components/right-panel.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CoWorkReduxWrapper>
      <App />
    </CoWorkReduxWrapper>
  </React.StrictMode>,
);
