import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Sidebar from 'react-sidebar'
import Wallet from './WalletSrc/WalletSrc'
import logo from './burner-wallet.svg'

export default class BurnerWallet extends Component {
  static propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
    toggleWallet: PropTypes.func,
  }

  render() {
    const { children, open, toggleWallet } = this.props

    const mainColor = "#FFD55F"
    const altColor = "#FF49DB"

    return (
      <Sidebar
        sidebar={<Wallet color={mainColor} altColor={altColor} />}
        open={open}
        className="Sidebar"
        onSetOpen={toggleWallet}
        styles={{ sidebar: { background: 'white' } }}
        pullRight>
        <React.Fragment>
          <img
            src={logo}
            alt="burner-wallet-logo"
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
