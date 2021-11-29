import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DevTools, loadServer } from "jira-dev-tool";
import { AppProviders } from "context/index";
import { store } from "store";
import { Provider } from "react-redux";
// jira-dev-tool也用了antd 所以这里放在后面进行覆盖
import "antd/dist/antd.less";

loadServer(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <AppProviders>
          <DevTools />
          <App />
        </AppProviders>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
