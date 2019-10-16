import React, { useState, useEffect } from "react"
import { useLocation } from "react-router"
import { useHistory } from "react-router-dom"
import {
  Image,
  CardContainer,
  PriceSpan,
  DescriptionPanel,
  Title,
  AddButton,
  PhonePanel,
  TitlePanel,
  BackButton
} from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Jumbo from "./JumboTron"
const PhoneCardDetail = props => {
  const [isAdded, setIsAdded] = useState(false)
  let location = useLocation()
  let history = useHistory()
  debugger
  const phone = location.state.phone

  useEffect(() => {
    // Just when IsAdded is true change its state 1 sec later
    setTimeout(() => {
      setIsAdded(false)
    }, 1000)
  }, [isAdded])

  const buyPhone = () => {
    setIsAdded(true)
  }
  const goBack = () => {
    history.push("/phones")
  }
  return (
    <CardContainer>
      <PhonePanel>
        <Image src={`./images/${phone.imageFileName}`} />
        <PriceSpan>
          {phone.price} <FontAwesomeIcon icon="euro-sign" size="xs" />
        </PriceSpan>
        <AddButton
          className={!isAdded ? "" : "added"}
          type="button"
          onClick={() => buyPhone()}
        >
          {!isAdded ? "BUY" : "✔ ADDED"}
        </AddButton>
      </PhonePanel>
      <DescriptionPanel>
        <TitlePanel>
          <Title>{phone.name}</Title>
          <BackButton href="#" onClick={() => goBack()}>
            <FontAwesomeIcon icon="arrow-left" size="2x" />
          </BackButton>
        </TitlePanel>
        <Jumbo
          title={phone.name}
          description={phone.description}
          manufacturer={phone.manufacturer}
          ram={phone.ram}
          screen={phone.screen}
          color={phone.color}
          processor={phone.processor}
        />
      </DescriptionPanel>
    </CardContainer>
  )
}

export default PhoneCardDetail
