import React from "react"
import { HeaderDiv, TitleSpan1, List, LinkNav, LogoImg, LogoDiv } from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Header = () => {
  return (
    <HeaderDiv>
      <LogoDiv>
        <TitleSpan1>Phone Smiths</TitleSpan1>
        <LogoImg src={"./logos/mobile.png"} />
      </LogoDiv>

      <List>
        <LinkNav to={"/"}>
          {" "}
          <FontAwesomeIcon icon="home" size="xs" />
        </LinkNav>
        <LinkNav to={"/phones"}>CATALOG</LinkNav>
        <LinkNav to={"/"}>EXPLORE</LinkNav>
        <LinkNav to={"/"}>SUPPORT</LinkNav>
        <LinkNav to={"/"}> COMPANIES</LinkNav>
      </List>
    </HeaderDiv>
  )
}
export default Header
