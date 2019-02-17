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
    mainColor: PropTypes.string,
    altColor: PropTypes.string
  }

  render() {
    const { children, mainColor = "#FFD55F", altColor = "#FF49DB", open, toggleWallet } = this.props

    return (
      <Sidebar
        sidebar={<Wallet color={mainColor} altColor={altColor} />}
        open={open}
        className="Sidebar"
        onSetOpen={toggleWallet}
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
