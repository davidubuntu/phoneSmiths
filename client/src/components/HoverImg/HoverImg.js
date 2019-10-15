import React from 'react'
import { MDBMask, MDBView } from 'mdbreact'
import { Text } from './style'
const HoverImg = (props) => {
  const { imgUrl, text, alt, textColor } = props
  return (
    <MDBView hover zoom>
      <img
        src={imgUrl}
        alt={alt}
      />
      <MDBMask className='flex-center' overlay='black-light'>
        <Text color={textColor}>{text}</Text>
      </MDBMask>
    </MDBView>

  )
}

export default HoverImg
