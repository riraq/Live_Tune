import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { StoreProvider } from "./store";

ReactDOM.render(
      <StoreProvider>
          <App />
      </StoreProvider>,
  document.getElementById('root')
);