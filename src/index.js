import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

const root = createRoot(document.getElementById("root"));
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/purpledog_test2">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
