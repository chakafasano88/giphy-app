import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  state = {
    query: ''
  }

  _onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  _onSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    const { onError, onSearch } = this.props;

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=q7kTB0TwzgVggIoYvFUcT97sfeuEIL53`)
     .then(response => {
       onSearch(response.data.data);
     })
     .catch(error => {
       onError(error.response);
       console.log(error);
     });
   }

  render() {
    return (
      // Search bar which communicates with giphy API
      <div className="search-container">
        <div className="wrap">
          <div className="search">
            <form onSubmit={this._onSubmit}>
              <input type="text" name='query' onChange={this._onChange} className="searchTerm" placeholder="What are you looking for?" />
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
