import React from 'react';
import Gif from './Gif';

class Gifs extends React.Component {
  constructor () {
    super();
    this.state = {
      gifIndex: 0,
      gifImage: ''
    }
    this.prevGif = this.prevGif.bind(this)
    this.nextGif = this.nextGif.bind(this)
  }

  componentDidUpdate() {
    const { gifList } = this.props
    const {gifIndex, gifImage} = this.state;
    
    if (gifList[0] && gifList[0].images.fixed_height.url !== gifImage && gifIndex === 0) {
      this.setState({
        gifImage: gifList[0].images.fixed_height.url
      });
    };
  }

   prevGif(event) {
     const { gifList } = this.props;
     let { gifIndex } = this.state;

     if(gifIndex > 0) {
      this.setState({
        gifIndex: gifIndex - 1
      });
     }
    return false;
  }

   nextGif(event) {
    const { gifList } = this.props;
    let { gifIndex } = this.state;

    if(gifIndex < gifList.length) {
     this.setState({gifIndex:
        gifIndex + 1
      });
     this.state.gifImage = gifList[gifIndex + 1].images.fixed_height.url;
    }
   return false;
  }


  render(){
    // Accesses the newly rendered gifs state in App.js
    const { gifList } = this.props


    //let show = gifs.map(gif => {
    //});

    return(
      <div className="container">
        <div>
          {
            gifList[0] ?
              <Gif key={gifList[0].id}
                  imgId={'gifContainer'}
                  gifIndex={this.state.gifIndex}
                  prevGif={this.prevGif}
                  nextGif={this.nextGif}
                  gifListLength={gifList.length}
                  gifList={gifList}
                  gif={this.state.gifImage} />
              : ''
            }


        </div>
      </div>
    );
  }
};

export default Gifs;
