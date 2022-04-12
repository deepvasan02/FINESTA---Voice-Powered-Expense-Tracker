import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "./context/Context";
import {SpeechProvider} from "@speechly/react-client";
import "./index.css";

ReactDOM.render(
    <SpeechProvider appId="3e1faf3c-20a9-4009-857d-2fc98c9c6c6c" language="en-US">
        <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById("root"));