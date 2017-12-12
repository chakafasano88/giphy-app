import React from 'react';

class Gif extends React.Component {
  render(){
    return (
      // Returns gif images via props
      <div className="container ">
        <div className='col'>
            <img id={this.props.imgId} src={this.props.gif} alt={this.props.alt} />
        </div>
        <div className="pagination">
          <a href="#" className="next round" onClick={this.props.prevGif}>&laquo;</a>
          <a href="#" className="previous round" onClick={this.props.nextGif}>&raquo;</a>
        </div>
      </div>
    );
  }
}

export default Gif;
