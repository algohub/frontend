import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Register from '../components/Register'
import * as RegisterActions from '../actions/register'

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  console.log('map dispatchtoprops')
  return bindActionCreators(RegisterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
