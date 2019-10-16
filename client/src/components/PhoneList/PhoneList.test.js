import React from "react"
import { shallow } from "enzyme"
import PhoneList from "./PhoneList"
import PhoneCard from "../PhoneCard/PhoneCard"
const phones = [
  {
    id: 0,
    name: "Nokia 7.1",
    manufacturer: "Nokia",
    description:
      "Great phone with an excellent interface. One of the best mid price range phones in the market.",
    color: "black",
    price: 275,
    imageFileName: "Nokia_7.1.jpg",
    screen: "5,84 inch Full-HD",
    processor: "Octa-core",
    ram: 4
  },
  {
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
  },
  {
    id: 2,
    name: "Honor 10",
    manufacturer: "Huawei",
    description:
      "Great phone with an excellent interface. One of the best mid price range phones in the market.",
    color: "blue",
    price: 399,
    imageFileName: "Honor_10.png",
    screen: "5,84 inch Full-HD",
    processor: "Kirin 970",
    ram: 6
  }
]

describe("Phones List tests", () => {
  // Testing that list is rendered without crashing
  it("renders component without crashing", () => {
    shallow(<PhoneList />)
  })

  //It renders several phones items
  it("renders list-items", () => {
    const wrapper = shallow(<PhoneList phones={phones} />)

    // Expect the wrapper object to be defined
    expect(wrapper.find(".list-items")).toBeDefined()
    expect(wrapper.find(".item")).toHaveLength(phones.length)
  })
})
