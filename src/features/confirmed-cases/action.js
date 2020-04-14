import {
  FETCH_CONFIRMED_CASES_FAILURE,
  FETCH_CONFIRMED_CASES_SUCCESS,
  FETCH_CONFIRMED_CASES_START,
} from './constants'

export const fetchConfirmedCasesStart = (filter) => ({
  type: FETCH_CONFIRMED_CASES_START,
  payload: filter,
})

export const fetchConfirmedCasesSuccess = (
  confirmedCases
) => ({
  type: FETCH_CONFIRMED_CASES_SUCCESS,
  payload: confirmedCases,
})

export const fetchConfirmedCasesFailure = (
  errorMessage
) => ({
  type: FETCH_CONFIRMED_CASES_FAILURE,
  payload: errorMessage,
})
