
import React, { Component } from 'react'

export default class MemeItem extends Component {
  render() {
    return (
      <div
        
        className="card mx-5 my-5 mx-auto" style={{backgroundColor: "black", color: "white", border: "1px solid #c3c3c382",padding: "17px",borderRadius: "0px ",width:"23rem"
        }}
      >
        <h5
          className="card-title"
          style={{ fontSize: "17px", fontFamily: "FreeMono, monospace" }}
        >
          {this.props.title}
        </h5>
        <img src={this.props.url} className="card-img-top" alt="meme" />
        <div className="card-body " style={{ padding: "7px 0px 1px 1px " }}>
          <a
            target="blank"
            href={this.props.sourceUrl}
            className="btn btn-light my-4 "
          >
            Go to Subreddit
          </a>

          <div>
            <span
              className="card-subtitle mb-2  my-2"
              style={{ color: "white" }}
            >
              source&rarr; "{this.props.source}"
            </span>
          </div>
        </div>
      </div>
    )
  }
}
