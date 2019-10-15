import styled from "styled-components"

export const Text = styled.span`
  font-family: "GillSansMTProBook";
  color: ${({ color }) => color || "black"}!important;
  font-size: 24px;
  margin: 0px 30px;
`
