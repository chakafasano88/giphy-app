import React from 'react';
import Gif from './Gif';

class Gifs extends React.Component {

  render(){
    // This accesses state in App.js
  const { gifList } = this.props

  let show = gifList.map(gif => {
     return <Gif
       key={gif.id}
       gifList={gifList}
       gif={gif.images.fixed_height.url}
     />
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
