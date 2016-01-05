import React from 'react'
// import ReactScriptLoader from 'react-script-loader';
import { ReactScriptLoaderMixin } from 'react-script-loader'

// var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;

window.recaptchaCallback = function () {
  grecaptcha.render('recaptcha', {
    sitekey: '6Le0jxETAAAAANoyIxTIsgiG90S0Sz45NOVLm77P', callback: function (response) {
      console.log(response)
    }
  })
}

const Register = React.createClass({
  mixins: [ReactScriptLoaderMixin], deferOnScriptLoaded: function () {
    return true
  }, onScriptLoaded: function () {
  }, onScriptError: function () {
  }, // this function tells ReactScriptLoaderMixin where to load the script from
  getScriptURL: function () {
    return 'https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit';
  },

  render() {
    return (
      <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2" style={{marginTop: 50}} id="signupbox">
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="panel-title">Sign Up</div>
            <div style={{float: 'right', fontSize: '85%', position: 'relative', top: '-10px'}}>
              <a href="/login" id="signinlink">Log In</a>
            </div>
          </div>
          <div className="panel-body">
            <form role="form" className="form-horizontal" id="signupform" onSubmit={this.handleSubmit} action="/signup" method="POST" >
              <div className="alert alert-danger" style={{display: 'none'}} id="signupalert">
                <p>Error:</p>
                <span />
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="email">Email</label>
                <div className="col-md-9">
                  <input type="text" placeholder="Email Address" name="email" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="firstname">First Name</label>
                <div className="col-md-9">
                  <input type="text" placeholder="First Name" name="firstname" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="lastname">Last Name</label>
                <div className="col-md-9">
                  <input type="text" placeholder="Last Name" name="lastname" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="password">Password</label>
                <div className="col-md-9">
                  <input type="password" placeholder="Password" name="passwd" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="password" style={{paddingTop: '0px'}}>Confirm Password</label>
                <div className="col-md-9">
                  <input type="password" placeholder="Confirm Password" name="passwd_crf" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="gender">Gender</label>
                <div className="col-md-9" style={{marginTop: "7px"}}>
                  <fieldset>
                    <input id="female" name="gender" type="radio" value="female" style={{marginRight: "5px"}}/>
                    <label htmlFor="female" style={{
                      marginRight: "10px", fontWeight: "400"
                    }}>Female</label>
                    <input id="male" name="gender" type="radio" value="male" style={{marginRight: "5px"}}/>
                    <label style={{fontWeight: "400"}} htmlFor="male">Male</label>
                  </fieldset>
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="gender">Occupation</label>
                <div className="col-md-9" style={{marginTop: "7px"}}>
                  <fieldset>
                    <input id="student" name="occupation" type="radio" value="student" style={{marginRight: "5px"}} />
                    <label htmlFor="stduent" style={{
                      marginRight: "10px", fontWeight: "400"
                    }}>Student</label>
                    <input id="engineer" name="occupation" type="radio" value="engineer" style={{marginRight: "5px"}}/>
                    <label htmlFor="engineer" style={{
                      marginRight: "10px", fontWeight: "400"
                    }}>Engineer</label>
                    <input id="other" name="occupation" type="radio" value="other" style={{marginRight: "5px"}}/>
                    <label htmlFor="other" style={{fontWeight: "400"}}>Other</label>
                  </fieldset>
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-offset-3">
                  <div id="recaptcha" style={{marginLeft: "15px"}}></div>
                </div>
              </div>

              <div className="form-group">
                                {/* Button */}
                <div className="col-md-offset-3 col-md-9">
                  <button className="btn btn-info" type="button" id="btn-signup" type="submit">
                    <i className="icon-hand-right" />
                  &nbsp; Sign Up</button>
                </div>
              </div>

            </form>
          </div>
        </div>

      </div>
    )
  }
})

export default Register
