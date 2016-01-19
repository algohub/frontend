import React, { PropTypes } from 'react'
import { ReactScriptLoaderMixin } from 'react-script-loader'

let recaptchaResponse
window.recaptchaCallback = function callback() {
  /*eslint-disable */
  grecaptcha.render('recaptcha', {
    sitekey: '6Le0jxETAAAAANoyIxTIsgiG90S0Sz45NOVLm77P', callback(response) {
      console.log(response)
      recaptchaResponse = response
    }
  })
  /*eslint-disable */
}

const Register = React.createClass({
  mixins: [ReactScriptLoaderMixin], onScriptLoaded() {
  }, onScriptError() {
  }, // this function tells ReactScriptLoaderMixin where to load the script from
  getScriptURL() {
    return 'https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit'
  }, deferOnScriptLoaded() {
    return true
  },

  handleSubmit(e) {
    console.log('inside register handleSubmit')
    const email = this.refs.email.value
    const username = this.refs.username.value
    const password = this.refs.password.value
    const firstname = this.refs.firstname.value
    const lastname = this.refs.lastname.value
    const occupation = this.refs.occupation.value
    const gender = this.refs.gender.value
    const captcha = {vendor:'recaptcha', response:recaptchaResponse, remoteip:userip}
    e.preventDefault()
    //this.props.register(email, password, occupation, gender, recaptchaResponse)
    this.props.register({
        username,
        password,
        email,
        gender,
        occupation,
        captcha})
  },

  render() {
    return (
      <div className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2" style={{ marginTop: 50 }} id="signupbox">
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="panel-title">Sign Up</div>
            <div style={{ float: 'right', fontSize: '85%', position: 'relative', top: '-10px' }}>
              <a href="/login" id="signinlink">Log In</a>
            </div>
          </div>
          <div className="panel-body">
            <form role="form" className="form-horizontal" id="signupform" onSubmit={this.handleSubmit}>
              <div className="alert alert-danger" style={{ display: 'none' }} id="signupalert">
                <p>Error:</p>
                <span />
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="email">Email</label>
                <div className="col-md-9">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="form-control"
                    ref="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="username">User Name</label>
                <div className="col-md-9">
                  <input
                    type="text"
                    placeholder="User Name"
                    ref="username"
                    className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="firstname">First Name</label>
                <div className="col-md-9">
                  <input
                    type="text"
                    placeholder="First Name"
                    ref="firstname"
                    className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="lastname">Last Name</label>
                <div className="col-md-9">
                  <input
                    type="text"
                    placeholder="Last Name"
                    ref="lastname"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="password">Password</label>
                <div className="col-md-9">
                  <input
                    type="password"
                    placeholder="Password"
                    ref="password"
                    className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="password" style={{ paddingTop: '0px' }}>Confirm Password</label>
                <div className="col-md-9">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    ref="password_crf"
                    className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="gender">Gender</label>
                <div className="col-md-9">
                  <select id="gender" ref="gender" className="form-control" >
                    <option value="">Select</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="occupation">Occupation</label>
                <div className="col-md-9">
                  <select id="occupation" ref="occupation" className="form-control" >
                    <option value="">Select</option>
                    <option value="Student">Student</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-offset-3">
                  <div id="recaptcha" style={{ marginLeft: '15px' }}></div>
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-offset-3 col-md-9">
                  <button className="btn btn-info" type="button" id="btn-signup" type="submit">
                    <i className="icon-hand-right" />
                  &nbsp; Sign Up
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>

      </div>
    )
  }
})

Register.propTypes = {
  register: PropTypes.func.isRequired
}

export default Register
