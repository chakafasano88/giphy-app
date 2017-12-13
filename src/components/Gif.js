import React from 'react';

class Gif extends React.Component {

  render(){
    return (
      // Returns gif images via props
      <div className="grid">
        <div className="grid-container">
          <img className="images" id={this.props.imgId} src={this.props.gif} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Gif;
