import React from 'react'

const Login = React.createClass({
  render: function () {
    return (
      <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2" style={{marginTop: 50}} id="loginbox">
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="panel-title">Log In</div>
            <div style={{float: 'right', fontSize: '80%', position: 'relative', top: '-15px'}}>
              <a href="#" style={{marginToRight: '2px'}}>Forgot password</a>
              /
              <a href="/register"> Register </a>
            </div>
          </div>
          <div className="panel-body" style={{paddingTop: 30}}>
            <div className="alert alert-danger col-sm-12" id="login-alert" style={{display: 'none'}} />
            <form role="form" className="form-horizontal" id="loginform">
              <div className="input-group" style={{marginBottom: 25}}>
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user" />
                </span>
                <input type="text" placeholder="username or email" defaultValue name="username" className="form-control" id="login-username" />
              </div>
              <div className="input-group" style={{marginBottom: 25}}>
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-lock" />
                </span>
                <input type="password" placeholder="password" name="password" className="form-control" id="login-password" />
              </div>
              <div className="input-group">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" defaultValue={1} name="remember" id="login-remember" />
                    Remember me
                  </label>
                </div>
              </div>
              <div className="form-group" style={{marginTop: 10}}>
                {/* Button */}
                <div className="col-sm-12 controls">
                  <a className="btn btn-info" href="#" id="btn-login">Login</a>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
});

export default Login;