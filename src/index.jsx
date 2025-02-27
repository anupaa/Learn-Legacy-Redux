import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provider Enables us To Share State To Entire App By Receiving Store AS A Props  */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
