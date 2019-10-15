import React from "react"
import styled from "styled-components"
const LoadingImg = styled.img`
  object-fit: cover;
`
const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
`

const Loading = () => {
  return (
    <LoadingDiv>
      <LoadingImg src="./logos/loading2.gif" />
    </LoadingDiv>
  )
}
export default Loading
