import React, { useState, useEffect } from "react"
import {
  ProductCard,
  ProductImageBox,
  AddButton,
  ProductName,
  ProductPrice,
  ProductBlock,
  ProductAction
} from "./style.js"
import HoverImg from "../HoverImg/HoverImg"
import colors from "../../styles/colors"

const PhoneCard = ({ phone }) => {
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsAdded(false)
    }, 1000)
  }, [isAdded])

  return (
    <ProductCard>
      <ProductImageBox>
        <HoverImg
          imgUrl={`./images/${phone.imageFileName}`}
          alt={phone.name}
          text={phone.manufacturer}
          textColor={colors["white"]}
        />
      </ProductImageBox>
      <ProductBlock>
        <ProductPrice />
        <ProductName>{phone.name}</ProductName>
      </ProductBlock>
      <ProductAction>
        <AddButton
          to={{
            pathname: "/phones-detail",
            state: {
              phone: phone
            }
          }}
          className={!isAdded ? "" : "added"}
          type="button"
        >
          {!isAdded ? "BUY IT" : "✔ Go For It"}
        </AddButton>
      </ProductAction>
    </ProductCard>
  )
}

export default PhoneCard
