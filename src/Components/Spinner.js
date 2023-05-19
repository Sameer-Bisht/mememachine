import React, { Component } from 'react'
import SpinnerGif from '../spinner.gif'
export default class Spinner extends Component {
  render() {
    return (
      <img style={{width:'100px',margin:'auto',display:'block'}} src={SpinnerGif} alt="" />
    )
  }
}
