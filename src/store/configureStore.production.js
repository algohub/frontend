import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'


// test with redux-router
import { reduxReactRouter } from 'redux-router'
import routes from '../routes'
import { createHistory } from 'history'


// const finalCreateStore = applyMiddleware(thunk)(createStore)
const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk),
  // test with redux-router
  reduxReactRouter({
    routes,
    createHistory
  })
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)
  return store
}
