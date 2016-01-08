import { REGISTER_USER } from '../actions/register'

export default function register(state = '', action) {
  console.log('reducers register get called')
  switch (action.type) {
    case REGISTER_USER:
      console.log('inside case REGISTER_USER in reducers')
      return 'register'
    default:
      return state
  }
}
