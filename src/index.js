import React from "react"
import { render } from "react-dom"
import { Router, browserHistory } from "react-router"
import { Provider } from "react-redux"
import createStore from "./store"
import routes from "./routes"

const savedState = JSON.parse(localStorage.getItem("savedState"))
const store = savedState ? createStore(savedState) : createStore()

store.subscribe(() => {
  localStorage.setItem("savedState", JSON.stringify(store.getState()))
})

render(
  <Provider store={ store }>
    <Router
      history={ browserHistory }
      routes={ routes } />
  </Provider>,
  document.querySelector("#root")
)
