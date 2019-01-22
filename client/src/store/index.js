import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import { allReducers } from '../reducers'



const store = createStore(
  allReducers,
  applyMiddleware(logger, ReduxThunk)
)


export default store