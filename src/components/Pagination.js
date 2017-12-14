import React from 'react';
import axios from 'axios';


class Pagination extends React.Component {
  constructor(){
    super()
    this.state = {
      offset: 25
    }
  }

  componentDidMount( ){
    return console.log(this.state);
  }

  _onSubmit = (e) => {
    e.preventDefault();
    const { offset } = this.state;

    axios.get(`http://api.giphy.com/v1/gifs/search?offset=${offset}&api_key=q7kTB0TwzgVggIoYvFUcT97sfeuEIL53`)
     .then(response => {
       console.log(response.data.data);
     })
     .catch(error => {
         console.log(error.response)
     });
   }

  render(){
    return(
      <div>
        <button text="" onClick={this._onSubmit}></button>
        <h2>adsfdbgsda</h2>
      </div>
    )
  }
}

export default Pagination;
