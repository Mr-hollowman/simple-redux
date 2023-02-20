import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./components/learn-redux/store"
// import store from "./redux/store";
// import ReactCalc from "./ReactCalc";
import MyTable from "./MyTable";
import View from "./components/learn-redux/View";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <View />
      {/* <App /> */}
      {/* <ReactCalc /> */}
      {/* <MyTable /> */}
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
