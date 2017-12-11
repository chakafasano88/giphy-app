import React from 'react';

class Gif extends React.Component {
  constructor(){
    super()
  }

  render(){

    return (
      <div className="container ">
        <div className="row">
          <div className='col'>
            <a href="#" onClick={this.props.prevGif}>&laquo;</a>
              <img id={this.props.imgId} src={this.props.gif} alt={this.props.alt} />
            <a href="#" onClick={this.props.nextGif}>&raquo;</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Gif;
