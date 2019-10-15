import styled from "styled-components"
import { Link } from "react-router-dom"

export const BackgroundDiv = styled.div`
  height: 100vh;
  #demo-canvas {
    height: 100vh;
  }
  #large-header {
    height: 100vh;
  }
  .large-header {
    height: 100vh;
    position: relative;
    width: 100%;
    background: #111;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    z-index: 1;
    background-image: url("https://images.unsplash.com/photo-1565932887479-b18108f07ffd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
  }

  .main-title {
    position: absolute;
    margin: 0;
    padding: 0;
    color: #f9f1e9;
    text-align: center;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
  }

  .demo .main-title {
    text-transform: uppercase;
    font-size: 4.2em;
    letter-spacing: 0.1em;
  }

  .main-title .thin {
    font-weight: 100;
  }
  .main-title .sub {
    font-weight: 800;
  }

  @media only screen and (max-width: 768px) {
    .demo .main-title {
      font-size: 3em;
    }
  }
  .icon {
    color: #3a8d9b;
  }
`
/* const mobileLinkStyles = css`
  @media screen and (max-width: 767px) {
    margin-right: 10px;
    transform: scale(0);
  }
` */
export const Links = styled.div`
  margin-right: 37px;
  display: flex;
  flex-direction: column;
  font-family: ;
`

export const Logo = styled.h3`
  color: #ffffff;
  margin-left: 47px;
  @media screen and (max-width: 767px) {
    margin-left: 20px;
  }
`
export const ImageLogo = styled.img`
  height: 30px;
`

export const LinkNav = styled(Link)`
  font-size: 12px;
  color: ${({ color }) => color || "white"};
  width: 100%;
  transition: all 300ms ease-in;
  padding: 12px;
  border-radius: 5px;
  letter-spacing: 2px;
  border-radius: 58px;
  background-color: rgba(32, 113, 136, 0.5);
  margin: 10px;
  &:hover {
    color: #87eff0;
    transform: scale(1.2);
  }
  text-decoration: none;
  .icon {
    font-size: 14px;
    margin-right: 5px;
  }
`
