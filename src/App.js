import React, { Component } from 'react';
import BurnerWallet from './BurnerWallet';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      walletOpen: false
    }
  }

  toggleWallet = () => {
    this.setState({ walletOpen: !this.state.walletOpen })
  }

  render() {
    const { walletOpen } = this.state

    return (
      <BurnerWallet open={walletOpen} toggleWallet={this.toggleWallet}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </BurnerWallet>
    );
  }
}

export default App;
