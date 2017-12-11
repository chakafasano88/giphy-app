import React from 'react';
import Pagination from './Pagination';

class Gif extends React.Component {

  componentWillMount(){

  }

  render(){

    return (
      <div className="flex-grid">
        <div className="col">
          <a href="#" onClick={this.props.prevGif}>&laquo;</a>
            <img src={this.props.gif} alt={this.props.alt} />
          <a href="#" onClick={this.props.nextGif}>&raquo;</a>
        </div>
      </div>
    );
  }
}

export default Gif;
