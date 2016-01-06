export const LOGIN_USER = 'LOGIN_USER'

export function login() {
  console.log('login() get called')
  return {
    type: LOGIN_USER
  }
}

export function loginUser() {
  console.log('inside dispatch')
  return (dispatch) => {
    console.log('inside dispatch return function ')
    dispatch(login())
  }
}
