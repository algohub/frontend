import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HelloWorld from './components/HelloWorld'
import Counter from './containers/Counter'
import Question from './components/Question'
import Register from './components/Register'
import Login from './containers/Login'


const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HelloWorld} />
        <Route path="counter" component={Counter} />
        <Route path="question" component={Question} />
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
    </Route>
)

export default routes
