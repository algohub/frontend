import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../components/Login'
import * as LoginActions from '../actions/login'

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  console.log('map dispatchtoprops')
  return bindActionCreators(LoginActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
