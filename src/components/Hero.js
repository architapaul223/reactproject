import React from 'react'
import photo1 from '../images/image.jpg'
 import  "./Hero.css";

export default function Hero() {
  return (
  <div className="flexcontainer">
      <div className="contents">
    <h1>Hello, i am Archita!</h1>
  
    <p>I am a btech undergrad at Silicon University Bhubaneshwar.</p>
    {/* <button type="button" class="btn btn-warning">View My Work</button> */}
    <button type="button" class="btn btn-light">view my work</button>
    <button type="button" class="btn btn-outline-light mx-2">Get In Touch</button>
    </div>
    <img src={photo1} alt="sorry" className="image" />
    </div>
  )
}
