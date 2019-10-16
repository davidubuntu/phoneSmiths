import React from "react"
import styled from "styled-components"

const LoadingImg = styled.img`
  object-fit: cover;
  height: 300px;
`
const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh);
`

const Loading = () => {
  return (
    <LoadingDiv>
      <LoadingImg src="./logos/loading.gif" />
    </LoadingDiv>
  )
}
export default Loading
