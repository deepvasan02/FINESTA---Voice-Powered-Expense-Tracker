import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "./context/Context";
import {SpeechProvider} from "@speechly/react-client";
import "./index.css";

ReactDOM.render(
    <SpeechProvider appId={process.env.REACT_APP_APPID} language="en-US">
        <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById("root"));