import {
  GET_PHONES_PENDING,
  GET_PHONES_SUCCESS,
  GET_PHONES_ERROR
} from "../constants/ActionTypes"

// Create an initial state for the store variables
export const initialState = {
  pending: false,
  phones: [],
  error: null
}

export function phonesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHONES_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_PHONES_SUCCESS:
      // debugger
      return {
        ...state,
        pending: false,
        phones: action.phones
      }
    case GET_PHONES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}
