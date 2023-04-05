import React, { useState, useRef } from 'react'
import {Link } from "react-router-dom";
import "../Login/OTP.css"


export default function OTP() {
  const [otp, setOTP] = useState(['', '', '', '']);
  const refs = useRef([]);
  
  const handleOTPChange = (event, index) => {
    const { value } = event.target;
    setOTP(prevOTP => {
      const newOTP = [...prevOTP];
      newOTP[index] = value;
      return newOTP;
    });
    
    if (value !== '' && index < 3) {
      refs.current[index + 1].focus();
    }
  };
  const verifyOTP = () => {
    if (otp.join('') === expectedOTP) {
      onSuccess();
    } else {
      onFailure();
    }
  };
  return (
    <>
    <div className="log-box">
           <h1>Welcome to Auction10</h1>
            <div className='log-container'>
                <h2>Enter OTP: </h2>
                <span>Check your Email for a code</span>
                <form>
                <div className="otp-boxs">
                    {otp.map((value, index) => (
                            <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(event) => handleOTPChange(event, index)}
                            ref={(el) => (refs.current[index] = el)}
                            />
                        ))}
               </div> 
               <br/>
                <Link to="/passCreate"><button onClick={verifyOTP} className='button otp-confirm'>Confirm</button></Link>
                </form>
            </div>
        </div>
    </>
  )
}
