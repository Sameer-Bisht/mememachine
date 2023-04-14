import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import MemeBox from "./Components/MemeBox";
import {BrowserRouter as Router, Routes, Route,  } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element= {<MemeBox key= "whsmeme" noOfMemes={10} subreddit="wholesomememes" />}></Route>
          <Route path="/idm" element= {<MemeBox key= "idm" noOfMemes={10} subreddit="indiandankmemes" />}></Route>
          <Route path="/bbs" element= {<MemeBox key= "bbs" noOfMemes={10} subreddit="beastboyshub" />}></Route>
          <Route path="/dii" element= {<MemeBox key= "dii" noOfMemes={10} subreddit="DankinIndia" />}></Route>
          <Route path="/is" element= {<MemeBox key= "is" noOfMemes={10} subreddit="indiaspeaks" />}></Route>
          <Route path="/bakchodi" element= {<MemeBox key= "bakchodi" noOfMemes={10} subreddit="bakchodi" />}></Route>
          
        </Routes>
      </Router>
    );
  }
}
