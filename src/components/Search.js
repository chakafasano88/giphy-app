import React from 'react';

class Search extends React.Component {

  render() {
    return (
      <div className="wrap">
         <div className="search">
            <input type="search" className="searchTerm" placeholder="What are you looking for?" />
            <button type="submit" onClick={this.props.userAction} className="searchButton">Search
              <i className="fa fa-search"></i>
           </button>
         </div>
      </div>
    );
  }
}

export default Search;
