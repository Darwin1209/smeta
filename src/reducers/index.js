import { combineReducers } from 'redux'
import { userReducer } from './user'
import { workReducer } from './work'
import { estimateReducer } from './estimate'

export const rootReducer = combineReducers({
  user: userReducer,
  work: workReducer,
  estimate: estimateReducer,
})
