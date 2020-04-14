import {
  switchMap,
  map,
  catchError,
  filter,
  tap,
} from 'rxjs/operators'
import { of } from 'rxjs'
import { FETCH_CONFIRMED_CASES_START } from './constants'
import {
  fetchConfirmedCasesSuccess,
  fetchConfirmedCasesFailure,
} from './action'

const fetchConfirmedCasesEpic = (
  $action,
  $state,
  { caseService }
) =>
  $action.pipe(
    filter(
      (action) => action.type == FETCH_CONFIRMED_CASES_START
    ),
    switchMap((action) =>
      caseService.fetchCases(action.filter)
    ),
    map((cases) => fetchConfirmedCasesSuccess(cases)),
    catchError((error) =>
      of(fetchConfirmedCasesFailure(error))
    )
  )

export { fetchConfirmedCasesEpic }
