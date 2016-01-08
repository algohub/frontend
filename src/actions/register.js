export const REGISTER_USER = 'REGISTER_USER'

export function register() {
  console.log('register() get called')
  return (dispatch) => {
    console.log('inside dispatch return function ')
    dispatch({
      type: REGISTER_USER
    })
  }
}
