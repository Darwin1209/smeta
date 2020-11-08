import { combineReducers } from 'redux'
import { userReducer } from './user'
import { workReducer } from './work'
import { estimateReducer } from './estimate'
import { clientReducer } from './client'

export const rootReducer = combineReducers({
  user: userReducer,
  work: workReducer,
  estimate: estimateReducer,
  client: clientReducer,
})
