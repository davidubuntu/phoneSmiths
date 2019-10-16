import React from "react"
import { Provider } from "react-redux"
import { Switch, Route } from "react-router-dom"
import App from "../../App"

import Phones from "../../containers/Phones/Phones"
import PhoneCardDetail from "../PhoneCardDetail/PhoneCardDetail"

const Root = ({ store }) => (
  <Provider store={store}>
    <Switch>
      <Route path="/" render={() => <App />} />
      <Route exact path="/phones" render={() => <Phones />} />
      <Route exact path="/phones-detail" render={() => <PhoneCardDetail />} />
    </Switch>
  </Provider>
)

export default Root
