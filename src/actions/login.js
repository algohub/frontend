//export const LOGIN_USER = 'LOGIN_USER'
//
//export function login() {
//  console.log('login() get called')
//  return {
//    type: LOGIN_USER
//  }
//}
//
//export function loginUser() {
//  console.log('inside dispatch')
//  return (dispatch) => {
//    console.log('inside dispatch return function ')
//    dispatch(login())
//  }
//}


export const LOGGED_FAILED = 'LOGGED_FAILED'
export const LOGGED_SUCCESSFULLY = 'LOGGED_SUCCESSFULLY'
export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT'

export function loginError(error) {
  return { error, type: LOGGED_FAILED }
}

export function loginSuccess(response) {
  return dispatch => {
    dispatch({ response, type: LOGGED_SUCCESSFULLY })
    // router.transitionTo('/dashboard')
  }
}

export function loginRequest(username, password) {
  const user = { username: username, password: password }
  return { user, type: LOGIN_ATTEMPT }
}

export function login(userData) {
  console.log('inside login dispatch for fetch call')
  return dispatch =>
    fetch('http://api.algohub.org/login', {
      method: 'post', headers: {
        'Accept': 'application/json', 'Content-Type': 'application/json'
      }, body: JSON.stringify({
        // username: userData.username, password: userData.password
        username: 'hahahah', password: 'wgwegweewgew'
      })
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response)
        dispatch(loginSuccess(response))
      } else {
        const error = new Error(response.statusText)
        error.response = response
        dispatch(loginError(error))
        throw error
      }
    }).catch(error => {
      console.log('request failed', error)
    })
}