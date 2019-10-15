import styled from "styled-components"

export const Spacing = styled.div`
  margin: ${({ size }) => size || "16px"};
`
export const CardContainer = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin: 0px 50px;
    }
  }
`
export const JumboContainer = styled.div`
  .jumbotron {
    margin-right: 50px;
  }
  .container {
    padding: 50px;
  }
  @media screen and (max-width: 767px) {
    padding: 20px;
    .jumbotron {
      padding: 10px;
    }
    .container {
      padding: 0px;
    }
  }
`
export const PhonePanel = styled.div`
  display: flex;
  flex-direction:column
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    width: 100%;
  }
`
export const DescriptionPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export const Image = styled.img`
  height: 500px;
  hobject-fit: cover;
  -webkit-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
  @media screen and (max-width: 767px) {
    height: 300px;
    border-radius: 3px 3px 0 0;
    margin: 20px;
  }
`

export const PriceSpan = styled.span`
  background-color: white;
  color: #1e607d;
  font-weight: bold;
  border-radius: 6px;
  font-size: 25px;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    margin: 0px;
  }
`
export const AddButton = styled.button`
  width: 30%;
  transition: all 300ms ease-in;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-family: GillSansMTProBook;
  color: #ffff;
  letter-spacing: 2px;
  border-radius: 58px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
  background: linear-gradient(40deg,#ff6ec4,#7873f5)!important;
  }
  &:hover {
    width: 40%;
    transform: scale(1.1);
    color: #ffff;
    background-color: #961e67;
  }
  &.added {
      background-color: transparent;
      opacity: 0.65; 
  }
`
export const SpecificationsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`
export const SectionSpec = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const DescriptionText = styled.span`
  color: #000027;
  font-size: 22px;
  letter-spacing: 2px;
  font-weight: lighter;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const BackButton = styled.a`
  color: #1c758c;
  margin-right: 80px;
`
export const TitlePanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const Title = styled.span`
  font-size: 42px;
  font-family: "GillSansMTProBook";
  letter-spacing: 5px;
  margin-left: 50px;
  @media screen and (max-width: 767px) {
    font-size: 20px;
    font-weight: bold;
    margin: 0px;
  }
`
export const DataTitle = styled.span`
  font-size: 20px;
  color: #1e607d;
  font-weight: 800;
  margin: 0px 10px;
  letter-spacing: 1px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`
export const DataLabel = styled.span`
  font-size: 18px;
  color: #636161;
  font-weight: 100;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`