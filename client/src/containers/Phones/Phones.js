import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import phonesServiceFetchActions from "../../api/phonesService"

import PhoneList from "../../components/PhoneList/PhoneList"
import Loading from "../../components/Loading/Loading"

const Phones = () => {
  const dispatch = useDispatch()
  //Receive the api state variables from the redux store
  const phones = useSelector(state => state.phones)
  const pending = useSelector(state => state.pending)
  const error = useSelector(state => state.error)

  useEffect(() => {
    //  Api fetch is called once every time component is mounted,
    // so in case origin data changes it can be updated in the store and rendered
    phonesServiceFetchActions(dispatch)
  }, [dispatch])

  const shouldComponentRender = () => {
    if (pending === false) return false
    //  tests
    return true
  }

  if (shouldComponentRender()) return <Loading />
  return (
    <>
      {error ? (
        <span className="product-list-error">{error}</span>
      ) : (
        <PhoneList phones={phones} />
      )}
    </>
  )
}

export default Phones
