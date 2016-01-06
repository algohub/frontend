import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../components/Login.jsx'
import * as LoginActions from '../actions/login'


function mapDispatchToProps(dispatch) {
  console.log('map dispatchtoprops')
  return bindActionCreators(LoginActions, dispatch)
}

export default connect(mapDispatchToProps)(Login)
