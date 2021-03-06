import React from "react"
import Phones from "./containers/Phones/Phones"
import PhoneCardDetail from "./components/PhoneCardDetail/PhoneCardDetail"

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faArrowLeft,
  faEuroSign,
  faChevronCircleDown,
  faCaretDown,
  faHome,
  faBars
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faArrowLeft,
  faEuroSign,
  faChevronCircleDown,
  faCaretDown,
  faHome,
  faBars
)

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/phones" render={() => <Phones />} />
      <Route exact path="/phones-detail" render={() => <PhoneCardDetail />} />
    </Switch>
  </BrowserRouter>
)

export default App
