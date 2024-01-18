import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 공급을 한다. store 를 공급한다.
import { Provider } from "react-redux";
// 저장소 (전역)
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
