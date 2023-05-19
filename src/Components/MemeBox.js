import React, { Component } from 'react'
import MemeItem from "./MemeItem";
import Spinner from './Spinner';

export default class memeBox extends Component {
  constructor(){
    super();
    this.state = {meme:[],
      loading:false,
      loadingBottom:false,
      loadMoreMemes:false
    }
  }
  async UpdateMeme(){
    this.setState({loading:true})
    let url = `https://meme-api.com/gimme/${this.props.subreddit}/${this.props.noOfMemes}`
    let  data = await fetch(url);
    let  parsedData = await data.json();
    this.setState({meme:parsedData.memes,
    loading:false})
    
  this.setState({loadMoreMemes:true})

  }
  
 loadMore= async ()=>{
  this.setState({loadingBottom:true})
    let url = `https://meme-api.com/gimme/${this.props.subreddit}/${this.props.noOfMemes}`
    let  data = await fetch(url);
    let  parsedData = await data.json();
    this.setState({meme:this.state.meme.concat(parsedData.memes),
    loading:false,loadingBottom:false})
  }
componentDidMount() { 
  document.body.style.backgroundColor = "black";
  this.UpdateMeme();
  
  
 }
  render() {
    return (
      <div className="container">
        {this.state.loading &&  <Spinner/>}
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
        {this.state.loadingBottom && <Spinner/>}
        {this.state.loadMoreMemes && <button onClick={this.loadMore} className="btn btn-danger " style={{margin:'20px auto',width:'200px',display:'block'}}> Load More Memes...</button>}
      </div>
    )
  }
}


