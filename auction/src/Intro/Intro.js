import React, {Component} from "react";
import "./Intro.css";
import banner1 from "../img/banner1.jpg";

export default class Intro extends Component{
    render(){
      return(
        <>
        <div className="Intro" id="Intro" >
      <div className="i-left">
        <div className="i-name">
          <span >Welcome to</span>
          <span>Auction10</span>
          <span>We help you to start your biding.</span>
        </div>
          <a href="/#">
            <button className="button i-button">Live Auction</button>
          </a>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={banner1} alt="" />
      </div>
    </div>
        </>
        )
    };
};