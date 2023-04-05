import React from 'react'
import "../Live1/Live1.css"

export default function card(props){
  return (
    <>
    <div className='cards'>
      <div className="liveimg">
      <img src={props.itemimg} alt="..?"/>
      
      </div>
      <div className="itemname">{props.itemname}</div>
      <a href="/#"><div className="price">{props.itemprice}</div></a>
    </div>
    </>
  );
};

