export const REGISTERED_FAILED = 'REGISTERED_FAILED'
export const REGISTERED_SUCCESSFULLY = 'REGISTERED_SUCCESSFULLY'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'

export function registerError(error) {
  return { error, type: REGISTERED_FAILED }
}

export function registerSuccess(response) {
  return dispatch => {
    dispatch({ response, type: REGISTERED_SUCCESSFULLY })
    // router.transitionTo('/dashboard')
  }
}

export function registerRequest(username, password) {
  const user = { username, password }
  return { user, type: REGISTER_REQUEST }
}

export function register(userData) {
  console.log('inside register dispatch for fetch call')
  console.log('userdata')
  console.log(userData)
  return dispatch =>
    fetch('http://api.algohub.org/register', {
      method: 'post', headers: {
        'Accept': 'application/json', 'Content-Type': 'application/json'
      }, body: JSON.stringify({
        username: userData.username,
        password: userData.password,
        email: userData.email,
        gender: userData.gender,
        occupation: userData.occupation,
        captcha: userData.captcha
      })
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response)
        dispatch(registerSuccess(response))
      } else {
        const error = new Error(response.statusText)
        error.response = response
        dispatch(registerError(error))
        throw error
      }
    }).catch(error => {
      console.log('register failed', error)
    })
}
