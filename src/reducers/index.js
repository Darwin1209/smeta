import { combineReducers } from 'redux'
import { userReducer } from './user'
import { workReducer } from './work'

export const rootReducer = combineReducers({
  user: userReducer,
  work: workReducer,
})
