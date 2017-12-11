import React from 'react';

class Pagination extends React.Component {
  render(){
    return (
      <div>
        <p>{this.props.gifList}</p>
      </div>
    );
  }
}

export default Pagination;
