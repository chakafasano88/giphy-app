import React from 'react';

class Search extends React.Component {

  render() {
    return (
      <div class="wrap">
        <div class="search">
          <input type="text" class="searchTerm" placeholder="What are you looking for?" />
            <button onClick={this.props.userAction}  type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
    );
  }
}

export default Search;
