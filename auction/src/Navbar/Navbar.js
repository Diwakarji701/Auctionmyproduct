// import React from "react";
import "../index.css";
import {Link } from "react-router-dom";
import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (<>
    <div className="n-wrapper" id="Navbar">
       {/* left */}
       <div className="n-left">
         <div className="n-name">Auction10</div>
       </div>

       <div className="n-right">
       <div className="n-list">
           <ul style={{ listStyleType: "none" }}>
             <li className="dropdown">
                <a href="/#">Home</a>
             <div className="dropdown-content">
                 <a href="/#">Live Auctions</a>
                 <a href="/#">Popular Category</a>
                 <a href="/#">Best sellers</a></div>
                 </li>
             <li className="dropdown">
              <a href="/#">Explore</a>
             <div className="dropdown-content">
                 <a href="/#">Artifacts</a>
                 <a href="/#">Electronics</a>
                 <a href="/#">Art</a>
                 <a href="/#">Jewellery</a>
                 <a href="/#">furniture</a>
                 <a href="/#">Fashion</a>
                 <a href="/#">Automobiles</a>
               </div></li>
             <li className="dropdown">
                <a href="/#">Contact Us</a>
            </li>
           </ul>
         </div>
        <Link to="/login">
         <div className="nav-button"> 
         <button className="button n-button">LogIn/SignUp</button>
         </div>
         </Link>
        </div>
     </div>
     </>
        
    )
  }
}
