import { LOGIN_REQUEST, LOGGED_FAILED, LOGGED_SUCCESSFULLY } from '../actions/login'
import Immutable from 'Immutable'

const initialState = new Immutable.Map({
  email: null,
  isLoggingIn: false,
  isLoggedIn: false,
  error: null,
  errorStatus: null
})

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.merge({
        isLoggingIn: true,
        isLoggedIn: false,
        email: action.email
      })
    case LOGGED_FAILED:
      return state.merge({
        error: action.error,
        isLoggingIn: false,
        errorStatus: action.errorStatus,
        isLoggedIn: false
      })
    case LOGGED_SUCCESSFULLY:
      return state.merge({
        email: action.email,
        isLoggingIn: false,
        isLoggedIn: true
      })
    default:
      return state
  }
}
