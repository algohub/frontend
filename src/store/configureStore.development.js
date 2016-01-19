import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

// test with redux-router
import { reduxReactRouter } from 'redux-router'
import routes from '../routes'
import { createHistory } from 'history'

const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk),
  // test with redux-router
  reduxReactRouter({
    routes,
    createHistory
  }),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore)


export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
