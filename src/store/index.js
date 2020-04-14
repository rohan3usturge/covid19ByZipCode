import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'
import rootServices from './root.service'
import rootReducer from './root.reducer'
import rootEpic from './root.epic'

//Middlwares
const epicMiddleware = createEpicMiddleware({
  dependencies: rootServices,
})

const logger = createLogger({})

const middlewares = [epicMiddleware]

const enhancer = compose(applyMiddleware(...middlewares))

const initialState = {}
const store = createStore(
  rootReducer,
  initialState,
  enhancer
)

epicMiddleware.run(rootEpic)

export default store
