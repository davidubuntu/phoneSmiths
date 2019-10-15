import styled from "styled-components"
import { Link } from "react-router-dom"
export const HeaderDiv = styled.div`
  overflow: hidden;
  position: fixed;
  display: flex;
  top: 0vh;
  margin: 0;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    45deg,
    rgb(179, 115, 166) 40%,
    rgb(23, 209, 239) 61%
  );
  z-index: 10;
  opacity: 1;
  color: #fff;
  background: linear-gradient(
    -45deg,
    #db3066,
    #030128,
    #0f0731,
    #223c64,
    #15c0c0
  );
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`
export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`
export const TitleSpan1 = styled.span`
  padding-left: 50px;
  padding-right: 5px;
  font-weight: 100;
  font-size: 20px;
  font-family: "GillSansMTProBook";
`
export const TitleSpan2 = styled.span`
  font-weight: 800;
  font-size: 20px;
`
export const List = styled.ul`
  padding: 0 50px;
  display: flex;
  list-style: none;
  @media screen and (max-width: 767px) {
    margin-right: 10px;
    transform: scale(0);
  }
`

export const LinkNav = styled(Link)`
  font-family: "GillSansMTProBook";
  font-size: 14 px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  color: white;
  margin-left: 20px;
  &:hover {
    color: #ffff;
    transform: scale(1.05);
  }
`
export const Icon = styled.div`
display: none;
position: fixed;
right: 20px;
@media screen and (max-width: 767px) {
  display: block;
`
