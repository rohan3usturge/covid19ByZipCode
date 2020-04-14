import * as ConfirmedCasesEpic from './../features/confirmed-cases/epic'
import { combineEpics } from 'redux-observable'

const rootEpic = combineEpics(
  ...Object.values(ConfirmedCasesEpic)
)

export default rootEpic
