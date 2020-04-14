import ConfirmedCasesReducer from './../features/confirmed-cases/reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  confirmedCases: ConfirmedCasesReducer,
})

export default rootReducer
