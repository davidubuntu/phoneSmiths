import styled, { css } from "styled-components"
import colors from "../../styles/colors"
import { Link } from "react-router-dom"

const prodStyles = css`
  .product-name {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
  .product-price {
    font-size: 22px;
    font-weight: 700;
    line-height: 22px;
    margin-bottom: 16px;
  }
  .product-name,
  .product-price {
    color: ${colors["gray-medium"]};
    padding: 0 16px;
    text-align: center;
  }

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`
export const ProductCard = styled.div`
  height: 500px;
  width: 300px;
  margin: 0px 10px 40px 10px;
  border-radius: 3px;
  @media screen and (max-width: 1200px) {
    margin: 0px 50px;
    width: 255px;
  }
  @media screen and (max-width: 767px) {
    margin: 40px;
    width: 300px;
    border-radius: 2px;
  }
  ${prodStyles}
`
export const ProductImageBox = styled.div`
  overflow: hidden;
  border-radius: 2px 2px 0 0;
  max-height: 300px;
  img {
    cursor: zoom-in;
    width: 100%;
    height: auto;
    transition: transform 300ms ease-in;
    transform: scale(1);
    @media (min-width: 991px) {
      min-height: 200px;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`
export const AddButton = styled(Link)`
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6px;
  width: 40%;
  transition: all 300ms ease-in;
  padding: 14px 0px 10px 0px;
  border: 1px solid #030128;
  font-family: GillSansMTProBook;
  color: #030128;
  letter-spacing: 1px;
  border-radius: 58px;
  /* background-color:#223c64; */
  &:hover {
    width: 50%;
    transform: scale(1.1);
    color: #ffff;
    background-color: #000027;
  }
`
export const ProductName = styled.h4`
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`
export const ProductPrice = styled.h3`
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  margin-bottom: 16px;
`
export const ProductBlock = styled.div`
  color: ${colors["gray-medium"]};
  padding: 0 16px;
  text-align: center;
`
export const ProductAction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    button {
        &.added {
            background: transparent;
            color:${colors["white-color"]}
            cursor: not-allowed;
            opacity: 0.65; 
        }
    }
`
