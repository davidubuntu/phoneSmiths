import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
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
  return (
    <ProductCard>
      <ProductImageBox>
        <HoverImg
          imgUrl={`./images/${phone.imageFileName}`}
          alt={phone.name}
          text={phone.manufacturer}
          textColor={colors["white-color"]}
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
          type="button"
        >
          BUY IT
        </AddButton>
      </ProductAction>
    </ProductCard>
  )
}
PhoneCard.propTypes = {
  phone: PropTypes.object.isRequired
}

export default PhoneCard
