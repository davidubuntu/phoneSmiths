import React from "react"
import PhoneCard from "./PhoneCard"
import { mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"
describe("<PhoneCard />", () => {
  const phone = {
    id: 1,
    name: "Galaxy S7",
    manufacturer: "Samsung",
    description:
      "Introducing the smartphone your life can not do without, The Samsung Galaxy S7. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket.",
    color: "grey",
    price: 209,
    imageFileName: "Galaxy_S7.png",
    screen: "5,1 inch Quad-HD",
    processor: "Snapdragon 820",
    ram: 4
  }
  const wrapper = mount(
    <BrowserRouter>
      <PhoneCard phone={phone} />
    </BrowserRouter>
  )
  it("contains h4", () => {
    const value = wrapper.find("h4").text()
    expect(value).toEqual("Galaxy S7")
  })
  it("accepts phone props", () => {
    expect(wrapper.find("PhoneCard").props().phone).toEqual(phone)
  })
})
