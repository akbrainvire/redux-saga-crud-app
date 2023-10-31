import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/store";
import App from "./App";
import { Global } from "./Global";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>
);
