import React from "react"
import PropTypes from "prop-types"
import PhoneCard from "../PhoneCard/PhoneCard"
import { PhoneListDiv } from "./style"
const PhoneList = ({ phones }) => {
  if (phones === undefined || !phones.length) {
    // No Phone on the list to render
    return <span>Upss.. No List Phones Available!!</span>
  }
  return (
    <PhoneListDiv>
      <div className="flex-container wrap items">
        {phones.map(p => {
          return <PhoneCard className="item" key={p.id} phone={p} />
        })}
      </div>
    </PhoneListDiv>
  )
}
PhoneList.propTypes = {
  phones: PropTypes.array
}
export default PhoneList
