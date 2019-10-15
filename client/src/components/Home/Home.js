import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BackgroundDiv, Links, LinkNav } from "./style"

const Home = () => {
  return (
    <BackgroundDiv className="container demo">
      <div className="content">
        <div id="large-header" className="large-header">
          <canvas id="demo-canvas"></canvas>
          <h1 className="main-title">
            {/* <span className="thin">Phone</span>
            <span className="sub"> Smiths</span> */}
            <div>
              <Links>
                <LinkNav to="/phones" color={"#D8D8D8"}>
                  <FontAwesomeIcon
                    className="icon"
                    icon="chevron-circle-down"
                    size="xs"
                  />
                  CATALOG
                </LinkNav>
                <LinkNav to="/" color={"#FFFFFF"}>
                  <FontAwesomeIcon
                    className="icon"
                    icon="chevron-circle-down"
                    size="xs"
                  />
                  MOBILE
                </LinkNav>
                <LinkNav to="/" color={"#FFFFFF"}>
                  <FontAwesomeIcon
                    className="icon"
                    icon="chevron-circle-down"
                    size="xs"
                  />
                  TV / AV
                </LinkNav>
              </Links>
            </div>
          </h1>
        </div>
      </div>
    </BackgroundDiv>
  )
}

export default Home
