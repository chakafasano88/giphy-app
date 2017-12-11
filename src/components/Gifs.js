import React from 'react';
import Gif from './Gif';

class Gifs extends React.Component {


  render(){
    // Accesses the newly rendered gifs state in App.js
    const gifs = this.props.gifList

    let show = gifs.map(gif => {
      return <Gif key={gif.id} gifList={gifs} gif={gif.images.fixed_height.url} />
    });

    return(
      <div className="container">
        <div>
          { show }
        </div>
      </div>
    );
  }
};

export default Gifs;
