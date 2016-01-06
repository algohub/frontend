import { LOGIN_USER } from '../actions/login'

export default function login(state = '', action) {
  console.log('reducers login get called')
  switch (action.type) {
    case LOGIN_USER:
      console.log('inside case LOGIN_USER in reducers')
      return 'login'
    default:
      return state
  }
}
