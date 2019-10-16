import React from "react"
import { shallow } from "enzyme"
import PhoneList from "./PhoneList"

// Testing that list is rendered in different cases
it("renders component without crashing", () => {
  shallow(<PhoneList />)
})
