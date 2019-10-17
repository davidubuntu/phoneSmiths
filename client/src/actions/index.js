import {
  GET_PHONES_PENDING,
  GET_PHONES_SUCCESS,
  GET_PHONES_ERROR
} from "../constants/ActionTypes"
//Actions are called from the phonesService file controlling the api calls
export const getPhonesPending = () => {
  return {
    type: GET_PHONES_PENDING
  }
}

export const getPhonesSuccess = phones => {
  return {
    type: GET_PHONES_SUCCESS,
    phones: phones
  }
}

export const getPhonesError = error => {
  return {
    type: GET_PHONES_ERROR,
    error: error
  }
}
