import { combineReducers } from 'redux'
import {
  FETCH_CONFIRMED_CASES_FAILURE,
  FETCH_CONFIRMED_CASES_START,
  FETCH_CONFIRMED_CASES_SUCCESS,
} from './constants'

const reducer = combineReducers({
  isFetching: (state = false, action) => {
    switch (action.type) {
      case FETCH_CONFIRMED_CASES_START:
        return true
      case FETCH_CONFIRMED_CASES_FAILURE:
      case FETCH_CONFIRMED_CASES_SUCCESS:
        return false
      default:
        return state
    }
  },

  cases: (state = [], action) => {
    switch (action.type) {
      case FETCH_CONFIRMED_CASES_SUCCESS:
        return [...action.payload]
      default:
        return state
    }
  },
  errorMessage: (state = '', action) => {
    switch (action.type) {
      case FETCH_CONFIRMED_CASES_FAILURE:
        return action.payload
      default:
        return state
    }
  },
})

export default reducer
