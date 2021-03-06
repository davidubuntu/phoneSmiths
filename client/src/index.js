import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import "mdbreact/dist/css/mdb.css"

import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"

import { phonesReducer, initialState } from "./reducers/index"
const middlewares = [thunk]
const store = createStore(
  phonesReducer,
  initialState,
  applyMiddleware(...middlewares)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
