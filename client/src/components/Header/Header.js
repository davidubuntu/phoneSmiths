import React from "react"
import {
  HeaderDiv,
  TitleSpan1,
  List,
  LinkNav,
  LogoImg,
  LogoDiv,
  TitleSpan2
} from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Header = () => {
  return (
    <HeaderDiv>
      <LogoDiv>
        <TitleSpan1>Phone</TitleSpan1>
        <TitleSpan2>Smiths</TitleSpan2>
      </LogoDiv>

      <List>
        <LinkNav to={"/"}>
          <FontAwesomeIcon icon="home" size="xs" />
        </LinkNav>
        <LinkNav to={"/phones"}>CATALOG</LinkNav>
        <LinkNav to={"/"}>EXPLORE</LinkNav>
        <LinkNav to={"/"}>SUPPORT</LinkNav>
      </List>
    </HeaderDiv>
  )
}
export default Header
