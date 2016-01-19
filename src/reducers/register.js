import { REGISTERED_FAILED, REGISTERED_SUCCESSFULLY, REGISTER_REQUEST } from '../actions/register'
import Immutable from 'Immutable'

const initialState = new Immutable.Map({
  email: '',
  username: '',
  password: '',
  gender: '',
  occupation: '',
  captcha: {
    vendor: 'recaptcha', response: '', remoteip: ''
  }, isRegistering: false, isRegistered: false, error: null
})

export default function register(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return state.merge({
        isRegistering: true, isRegistered: false
      })
    case REGISTERED_FAILED:
      return state.merge({
        error: action.error, isRegistering: false, isRegistered: false
      })
    case REGISTERED_SUCCESSFULLY:
      return state.merge({
        error: null, isRegistering: false, isRegistered: true
      })
    default:
      return state
  }
}
