import React from 'react';
import Pagination from './Pagination';
import axios from 'axios';

class Search extends React.Component {
  state = {
    query: '',
    paginate: 25,
    limit: 25
  }

  _onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

// Displays a new set of giffys based on initial search
  _fetchNextPage = () => {
    const { paginate, limit, query } = this.state
    this.setState({
      paginate: paginate + limit
    }, () => this._queryOffset());
  }

  _queryOffset = () => {
    const { query, paginate, limit } = this.state;
    const { onError, onSearch } = this.props;

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&offset=${paginate}&limit=${limit}&api_key=q7kTB0TwzgVggIoYvFUcT97sfeuEIL53`)
     .then(response => {
       onSearch(response.data.data);
    }).catch(error => {
        onError(error.response)
      });
   }

// Prints gifs based on query
  _onSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    const { onError, onSearch } = this.props;

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=q7kTB0TwzgVggIoYvFUcT97sfeuEIL53`)
     .then(response => {
       onSearch(response.data.data);
     })
     .catch(error => {
        onError(error.response)
     });
   }

  render() {
    return (
      // Search bar which communicates with giphy API
      <div>
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
        <div className="next-butt-container">
          <button className="nextButt" onClick={this._fetchNextPage}>Next Page</button>
        </div>
      </div>
    );
  }
}

export default Search;
