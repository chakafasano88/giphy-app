import React, { Component } from 'react';
import Gifs from './components/Gifs';
import Search from './components/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
    this.userAction = this.userAction.bind(this)
  }

  // Calls a giph URL according to input value
  userAction() {
    const input = document.querySelector('.searchTerm')
    const query = `&q=${input.value}`

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=q7kTB0TwzgVggIoYvFUcT97sfeuEIL53`)
     .then(response => {
       this.setState({
         gifs: response.data.data,
       });
     })
     .catch(error => {
       throw Error('ERROR: Fetching and Parsing Data', error);
     });
   }

  render() {
    return (
      <div className="App">
        <div className="header-container">
          <header className="App-header">Search Your Favorite Gif!</header>
          <Search userAction={this.userAction}/>
        </div>
          <Gifs gifList={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
