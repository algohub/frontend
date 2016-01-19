export const LOGGED_FAILED = 'LOGGED_FAILED'
export const LOGGED_SUCCESSFULLY = 'LOGGED_SUCCESSFULLY'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'

import { pushState } from 'redux-router'


export function loginFailed() {
  // export function loginFailed(error, errorStatus) {
  console.log('inside failed login')
  return dispatch => {
    console.log('login success here here here here')
    dispatch(pushState(null, '/', null))
  }
  // return {
  //  error,
  //  errorStatus,
  //  type: LOGGED_FAILED
  // }
}

export function loginSuccess(response) {
  return dispatch => {
    dispatch({
      response,
      type: LOGGED_SUCCESSFULLY
    })
    console.log('login success here here here here')
    dispatch(pushState(null, '/', null))
  }
}

export function loginRequest(username, password) {
  const user = { username, password }
  return { user, type: LOGIN_REQUEST }
}

export function login(userData) {
  console.log('inside login dispatch for fetch call')
  return dispatch =>
    fetch('http://api.algohub.org/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userData.email,
        password: userData.password
      })
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response)
        dispatch(loginSuccess(response))
      } else {
        // const error = new Error(response.statusText)
        const error = response.statusText
        const errorStatus = response.status
        dispatch(loginFailed(error, errorStatus))
        // throw error
      }
    }).catch(error => {
      console.log('request failed', error)
    })
}
