import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App/App-connected"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/store"

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
)
