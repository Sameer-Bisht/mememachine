import React from "react";
import Logo from "../logo.png";
import {Link } from "react-router-dom";



function Navbar() {

  return (
    <div>
      <nav className= "navbar navbar-expand-lg navbar-dark bg-body-dark bg-dark">
  <div className= "container">
  <Link className="navbar-brand" to="/"> <img src="https://raw.githubusercontent.com/Sameer-Bisht/mememachine/master/src/logo.png" alt="{}" height="50" className="d-inline-block align-text-top" /> </Link>
      
    <button className= "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className= "navbar-toggler-icon"></span>
    </button>
    <div className= "collapse navbar-collapse" id="navbarSupportedContent">
      <ul className= "navbar-nav me-auto mb-2 mb-lg-0">
        <li className= "nav-item">
          <Link className= "nav-link  " aria-current="page" to="/"><strong>Wholesome Memes</strong></Link>
        </li>
        <li className= "nav-item">
          <Link className= "nav-link " aria-current="page" to="/idm"><strong>IndianDankMemes</strong></Link>
        </li>
        <li className= "nav-item">
          <Link className= "nav-link" to="/bbs"> <strong> beastboyshub</strong></Link>
        </li>
        <li className= "nav-item">
          <Link className= "nav-link" to="/dii"><strong> Dank In India</strong></Link>
        </li>
        <li className= "nav-item">
          <Link className= "nav-link" to="/is"><strong> India Speaks</strong></Link>
        </li>
        <li className= "nav-item">
          <Link className= "nav-link" to="/bakchodi"><strong> bakchodi </strong></Link>
        </li>
        
        
        
      </ul>
      {/* <form className= "d-flex" role="search">
        <input className= "form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className= "btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
