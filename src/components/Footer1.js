import React from 'react'
 import  "./Footer1.css";

export default function Footer1() {
  return (
    <div className="footerbox">
        <div className="body">
        <h1 className="footertitle">Get In Touch</h1>
        <p>Have a project in mind?Let's work together to bring your ideas to life!</p>
        </div>
        <div className="contact">
            <div className="email">
             <h4>Email</h4>   
            <a href="mailto:architapaul3124@gmail.com">architapaul3124@gmail.com</a>
            </div>
            <div className="phone">
                <h4>Phone</h4>
                <p>91+ 9508172989</p>

            </div>
            <div className="location">
                <h4>Location</h4>
                <p>Bhubaneshwar,India</p>
            </div>
            <div className="buttons">
            <a href="https://www.linkedin.com/in/rchita-paul-2564a634a/" target="_blank"><button type="button" class="btn btn-outline-light">linkedin</button></a>
            <a href="https://github.com/" target="blank"><button type="button" class="btn btn-outline-light">Github</button></a>
            <a href="https://x.com/?lang=en" target="blank"><button type="button" class="btn btn-outline-light">Twitter</button></a>

            </div>

        </div>


    </div>
  )
}
