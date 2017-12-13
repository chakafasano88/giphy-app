import React, { Component } from 'react';
import Gifs from './components/Gifs';
import Search from './components/Search';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      hasError: false,
      errorMessage: '',
    };
  }


  _onSearch = (gifs) => this.setState({ gifs });
  _onError = (message) => this.setState({
    hasError: true,
    errorMessage: message
  });

  render() {
    const { hasError, errorMessage } = this.state;
    const errorDisplay = hasError ? 'block' : 'none';
    return (
      <div className="App">
        <div className="header-container">
          <header className="App-header">Search Your Favorite Gif!</header>
        </div>
        <div style={{ display: errorDisplay }} className='error'>
          <div className="close"><a onClick={this.closeModal = () => {this.setState({hasError: false})}}>&times;</a></div>
          <h2 id="error-message">No Gif Found!</h2>
          {errorMessage}
        </div>

        <div className="search-gif-container">
          <Search
            onSearch={this._onSearch}
            onError={this._onError}
          />
          <Gifs className="gifs" gifList={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
