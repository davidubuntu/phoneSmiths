import React from "react"
import PhoneCard from "../PhoneCard/PhoneCard"
import { PhoneListDiv } from "./style"
const PhoneList = ({ phones }) => {
  return (
    <PhoneListDiv>
      {phones === undefined ? (
        <h1>Upss.. No List Phones Available!!</h1>
      ) : (
        <div className="flex-container wrap">
          {phones.map(p => {
            return <PhoneCard key={p.id} phone={p} />
          })}
        </div>
      )}
    </PhoneListDiv>
  )
}

export default PhoneList
