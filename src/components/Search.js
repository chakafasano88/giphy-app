import React from 'react';

class Search extends React.Component {

  render() {
    return (
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="What are you looking for?" />
            <button onClick={this.props.userAction}  type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
    );
  }
}

export default Search;
