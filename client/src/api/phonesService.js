import { getPhonesPending, getPhonesSuccess, getPhonesError } from "../actions"
import Axios from "axios"

const phonesService = dispatch => {
  dispatch(getPhonesPending())
  //Move variable to .env file in production environment
  Axios.get("http:localhost:5000/phones")
    .then(delay(2000))
    .then(res => {
      if (res.error) {
        throw res.error
      }
      dispatch(getPhonesSuccess(res.data))
      return res.data
    })
    .catch(error => {
      dispatch(getPhonesError(error))
    })
}
// Simulate Api Delay for some seconds so that It can be apreciated the Loader Spinner
const delay = ms => {
  return function(x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms))
  }
}

export default phonesService
