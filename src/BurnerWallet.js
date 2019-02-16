import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Sidebar from 'react-sidebar'
import Wallet from './burner-wallet/src/App'
import { ReactComponent as Logo } from './burner-wallet.svg'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
    toggleWallet: PropTypes.func
  }

  render() {
    const { children, open, toggleWallet } = this.props

    return (
      <Sidebar
        sidebar={<b>~ Burner Wallet ~<br/><Wallet /></b>}
        open={open}
        onSetOpen={toggleWallet}
        styles={{ sidebar: { background: 'white' } }}
        pullRight>
        <React.Fragment>
          <Logo
            onClick={toggleWallet}
            style={{
              position: 'fixed',
              bottom: '16px',
              right: '16px',
              filter: 'drop-shadow(-2px 2px 2px rgba(0, 0, 0, .3))',
              cursor: 'pointer'
            }}
          />
          {children}
        </React.Fragment>
      </Sidebar>
    )
  }
}

