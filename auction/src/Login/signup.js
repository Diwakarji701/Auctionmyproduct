import React, { Component } from 'react'
import {Link } from "react-router-dom";
import "../Login/signup.css"

export default class signup extends Component {
  render() {
    return (
        <>
        <div className="log-box">
           <h1>Welcome to Auction10</h1>
            <div className='log-container'>
                <h2>Sign Up</h2>
                <form>
                    <h4>Enter your Name:</h4>
                    <input type='text'></input>
                    <h4>Enter your Email:</h4>
                    <input type='mail'></input>
                    <h4>Create Password:</h4>
                    <input type='password'></input>

                   <Link to='/OTP'><button className='button sign-in-button'>Next</button></Link>
                </form>
            </div>
        </div>
        </>
    )
  }
}
