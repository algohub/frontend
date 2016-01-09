import React, { PropTypes, Component }from 'react'


class Login extends Component {
  handleSubmit(e) {
    console.log('inside handleSubmit')
    e.preventDefault()
    const email = this.refs.email.value
    const password = this.refs.password.value
    console.log(email + password)
    if (email && password) {
      this.props.login({ username: email, password: password })
    }
  }

  render() {
    return (
      <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2" style={{ marginTop: 50 }} id="loginbox">
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="panel-title">Log In</div>
            <div style={{ float: 'right', fontSize: '80%', position: 'relative', top: '-15px' }}>
              <a href="#" style={{ marginToRight: '2px' }}>Forgot password</a>
              /
              <a href="/register"> Register </a>
            </div>
          </div>
          <div className="panel-body" style={{ paddingTop: 30 }}>
            <div className="alert alert-danger col-sm-12" id="login-alert" style={{ display: 'none' }} />
            <form role="form" className="form-horizontal" id="loginform">
              <div className="input-group" style={{ marginBottom: 25 }}>
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user" />
                </span>
                <input
                  type="text"
                  placeholder="email"
                  className="form-control"
                  ref="email"
                />
              </div>
              <div className="input-group" style={{ marginBottom: 25 }}>
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-lock" />
                </span>
                <input
                  type="password"
                  placeholder="password"
                  className="form-control"
                  ref="password"
                />
              </div>
              <div className="input-group">
                <div className="checkbox">
                  <label>
                    <input type="checkbox"/>
                    Remember me
                  </label>
                </div>
              </div>
              <div className="form-group" style={{ marginTop: 10 }}>
                {/* Button */}
                <div className="col-sm-12 controls">
                  <a className="btn btn-info" onClick={(e) => this.handleSubmit(e)}>Login</a>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

export default Login
