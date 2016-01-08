import { combineReducers } from 'redux'
import counter from './counter'
import login from './login'
import register from './register'
const rootReducer = combineReducers({
  counter, login, register
})

export default rootReducer
