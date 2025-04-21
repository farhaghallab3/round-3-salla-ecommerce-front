import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const projectRoot = ReactDOM.createRoot(document.getElementById("root")!);
projectRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
