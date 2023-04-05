import React from 'react'
import {useState} from 'react'
import {Link } from "react-router-dom";
import "../Login/registration.css"

export default function registration(){
    //const [email,setEmail] = useState('');
    //const [password,setPassword] = useState('');
    
    return (
        <>
        <div className="log-box">
           <h1>Welcome to Auction10</h1>
            <div className='log-container'>
                <h2>Sign In</h2>
                <form>
                    <h4>Email:</h4>
                    {/* type='text' value={email} onChange={e=>setEmail(e.target.value)}*/}
                    <input ></input>

                    <h4>Password:</h4>
                    {/* value={password} onChange={e=>setPassword(e.target.value)}*/}
                    <input type='password' ></input>

                    <button type='submit' className='button sign-in-button'>Sign In</button>
                </form>
                <p>By signing-in you agree to Auction10's Condition of use & Sale.</p>
                <p>_OR_</p>
                <Link to="/signup"><button className='button create-acc-button'>Create your Auction10 account</button></Link>
            </div>
        </div>
        </>
    )

}
