import React from 'react';
import Pagination from './Pagination';
import axios from 'axios';

class Search extends React.Component {
  state = {
    query: '',
    pagination: {},
    limit: 48
  }

  _onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  _handleResponse = (response) => {
    const { onSearch } = this.props;
    const pagination = response.data.pagination;
    this.setState({
      pagination
    });
    const gifs = response.data.data
    onSearch(gifs);
  }

  _giphyQuery = () => {
    const { query, pagination, limit } = this.state;
    const { onError } = this.props;

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&offset=${pagination.offset}&limit=${limit}&api_key=q7kTB0TwzgVggIoYvFUcT97sfeuEIL53`)
      .then(response => {
        this._handleResponse(response);
      })
      .catch(error => {
        onError(error.response)
      });
  }

  _fetchNextPage = () => {
    const { pagination, limit } = this.state;
    this.setState({
      pagination: {...pagination, offset: pagination.offset + limit}
    }, () => {
      this._giphyQuery();
    })
  }

// Prints gifs based on query
  _onSubmit = (e) => {
    e.preventDefault();

    const pagination = {
      offset: 0,
      total_count: 0,
      count: 0
    }

    this.setState({
      pagination
    }, () => {
      this._giphyQuery();
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
