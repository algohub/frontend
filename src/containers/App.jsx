import React from 'react'
// import { Navbar, NavItem, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router'
import DevTools from './DevTools'

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    history: React.PropTypes.object,
    location: React.PropTypes.object
  },
  render() {
    const childrenStyle = {
      paddingTop: '48px'
    }
    return (
      <div>
        <nav className="nav navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="nav-header">
              <button className="navbar-toggle collapsed"
                type="button" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href='/'> Algohub </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/question">Tasks</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="/register"> Register </a>
                </li>
                <li>
                  <a href="/login"> Login </a>
                </li>
                <li>
                  <a href="/testfield">Test</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br/>
        <br/>
        <div style={ childrenStyle }>
                    { this.props.children }
          <DevTools/>
        </div>
      </div>
    )
  }
})

export default App


