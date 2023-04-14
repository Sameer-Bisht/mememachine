import React, { Component } from 'react'
import MemeItem from "./MemeItem";

export default class memeBox extends Component {
  constructor(){
    super();
    this.state = {meme:[],
    }
  }
  async UpdateMeme(){
    let url = `https://meme-api.com/gimme/${this.props.subreddit}/${this.props.noOfMemes}`
    let  data = await fetch(url);
    let  parsedData = await data.json();
    this.setState({meme:parsedData.memes})

  }
  
 loadMore= ()=>{
    this.UpdateMeme()
    window.scrollTo(0,0);
  }
componentDidMount() { 
  document.body.style.backgroundColor = "black";
  this.UpdateMeme();
  
  
 }
  render() {
    return (
      <div className="container">
        {/* <h1 className="heading" style={{color:"white"}}>{props.bodyHeading}</h1> */}
        {this.state.meme.map((element) => {
          return (
            <div key={element.url}>

            <MemeItem
              title={element.title}
              url={element.url}
              sourceUrl={element.postLink}
              source={element.subreddit}
              />
              </div>
          );
        })}
        <button onClick={this.loadMore} className="btn btn-danger " style={{margin:'32px'}}> Load More Memes...</button>
      </div>
    )
  }
}


