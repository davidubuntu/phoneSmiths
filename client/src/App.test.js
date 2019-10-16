import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
//Test that app renders from the begining without crassing
it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
