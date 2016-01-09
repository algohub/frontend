//import { LOGIN_USER } from '../actions/login'
//
//export default function login(state = '', action) {
//  console.log('reducers login get called')
//  switch (action.type) {
//    case LOGIN_USER:
//      console.log('inside case LOGIN_USER in reducers')
//      return 'login'
//    default:
//      return state
//  }
//}

import { LOGIN_ATTEMPT, LOGGED_FAILED, LOGGED_SUCCESSFULLY } from '../actions/login'
import Immutable from 'Immutable'

const initialState = new Immutable.Map({
  email: '',
  password: '',
  isLoggingIn: false,
  isLoggedIn: false,
  error: null
})

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return state.merge({
        isLoggingIn: true, isLoggedIn: false, email: action.email, password: action.password // Note you shouldn't
                                                                                             // store user's password
                                                                                             // in real apps
      })
    case LOGGED_FAILED:
      return state.merge({
        error: action.error, isLoggingIn: false, isLoggedIn: false
      })
    case LOGGED_SUCCESSFULLY:
      return state.merge({
        error: null, isLoggingIn: false, isLoggedIn: true
      })
    default:
      return state
  }
}