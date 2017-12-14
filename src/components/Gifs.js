import React from 'react';
import Gif from './Gif';

class Gifs extends React.Component {
   renderList = () => {
     const { gifList } = this.props
      if(gifList <= 0){
        return <div className="no-gif-msg"> <h2> No Gifs, Search To Find More Gifs!</h2> </div>
      }
      return(gifList.map(gif => <Gif key={gif.id} gifList={gifList} gif={gif.images.fixed_height.url} />))
  }

  render(){
      return(
        <div className="container">
          <div>
            { this.renderList() }
          </div>
        </div>
      );
    }
  };

export default Gifs;
