import { combineReducers } from 'redux'
import counter from './counter'
import login from './login'
import register from './register'

// test with redux-router
import { routerStateReducer } from 'redux-router'


const rootReducer = combineReducers({
  counter, login, register, router: routerStateReducer
})

export default rootReducer
