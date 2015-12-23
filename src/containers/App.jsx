import React from 'react'
import { AppCanvas,
  EnhancedButton,
  Mixins,
  Styles,
  Tab,
  Tabs,
  Paper } from 'material-ui'
import BlueTheme from '../blue-theme'
import DevTools from './DevTools'

const { StylePropable } = Mixins
const { Colors, Spacing, Typography } = Styles
const ThemeManager = Styles.ThemeManager

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    history: React.PropTypes.object,
    location: React.PropTypes.object,
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  mixins: [StylePropable],

  getInitialState() {
    const muiTheme = ThemeManager.getMuiTheme(BlueTheme)
    // To switch to RTL...
    // muiTheme.isRtl = true;
    return {
      muiTheme,
    }
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    }
  },

  componentWillMount() {
    const newMuiTheme = this.state.muiTheme
    newMuiTheme.inkBar.backgroundColor = Colors.darkWhite
    this.setState({
      muiTheme: newMuiTheme,
      tabIndex: this._getSelectedIndex()
    })
  },

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme
    this.setState({
      tabIndex: this._getSelectedIndex(),
      muiTheme: newMuiTheme,
    })
  },

  _getTabs() {
    const styles = {
      root: {
        backgroundColor: Colors.blue900,
        position: 'fixed',
        height: 48,
        top: 0,
        right: 0,
        zIndex: 1101,
        width: '100%',
      },
      container: {
        position: 'absolute',
        right: (Spacing.desktopGutter / 2) + 48,
        bottom: 0,
      },
      span: {
        color: Colors.darkWhite,
        fontWeight: Typography.fontWeightLight,
        left: 35,
        top: 10,
        position: 'absolute',
        fontSize: 26,
      },
      svgLogoContainer: {
        position: 'fixed',
        width: 300,
        left: Spacing.desktopGutter,
      },
      svgLogo: {
        backgroundColor: Colors.blue900,
        position: 'absolute',
        top: 10,
      },
      tabs: {
        width: 425,
        bottom: 0,
      },
      tab: {
        backgroundColor: Colors.blue900,
        height: 48,
      }
    }

    const materialIcon = (
      <EnhancedButton
        style={styles.svgLogoContainer}
        linkButton
        href="/"
      >
        <img style={this.prepareStyles(styles.svgLogo)} src="favicon-32x32.png"/>
        <span style={this.prepareStyles(styles.span)}>lgohub</span>
      </EnhancedButton>
    )

    return (
      <Paper
        zDepth={0}
        rounded={false}
        style={styles.root}
      >
        {materialIcon}
        <div style={this.prepareStyles(styles.container)}>
          <Tabs
            style={styles.tabs}
            value={this.state.tabIndex}
            onChange={this._handleTabChange}
          >
            <Tab
              value="1"
              label="Counter"
              style={styles.tab}
              route="/counter"
            />
            <Tab
              value="2"
              label="Question"
              style={styles.tab}
              route="/question"
            />
          </Tabs>
        </div>
      </Paper>
    )
  },

  _getSelectedIndex() {
    let index = '0'
    if (this.props.history.isActive('/counter')) {
      index = '1'
    } else if (this.props.history.isActive('/question')) {
      index = '2'
    } else {
      index = '0'
    }
    return index
  },

  _handleTabChange(value, e, tab) {
    this.props.history.pushState(null, tab.props.route)
    this.setState({ tabIndex: this._getSelectedIndex() })
  },

  render() {
    const childrenStyle = {
      paddingTop: '48px',
    }
    return (
      <AppCanvas>
        { this._getTabs() }
        <div style={ childrenStyle }>
          { this.props.children }
          <DevTools/>
        </div>
      </AppCanvas>
    )
  }
})

export default App
