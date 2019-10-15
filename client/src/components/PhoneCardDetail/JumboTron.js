import React from "react"
import { MDBJumbotron, MDBContainer } from "mdbreact"
import {
  JumboContainer,
  DescriptionText,
  DataTitle,
  SpecificationsDiv,
  SectionSpec,
  DataLabel
} from "./style"

const JumbotronPage = ({
  title,
  description,
  manufacturer,
  processor,
  ram,
  color,
  screen
}) => {
  return (
    <JumboContainer>
      <MDBJumbotron className="jumbotron">
        <MDBContainer className="container">
          <h2 className="display-4">{manufacturer}</h2>
          <DescriptionText>{description}</DescriptionText>
          <SpecificationsDiv>
            <SectionSpec>
              <DataLabel>Color</DataLabel>
              <DataTitle> {color}</DataTitle>
              <DataLabel>Ram</DataLabel>
              <DataTitle> {ram} </DataTitle>
              <DataLabel>Screen</DataLabel>
              <DataTitle> {screen}</DataTitle>
              <DataLabel>Processor</DataLabel>
              <DataTitle> {processor} </DataTitle>
            </SectionSpec>
          </SpecificationsDiv>
        </MDBContainer>
      </MDBJumbotron>
    </JumboContainer>
  )
}

export default JumbotronPage
