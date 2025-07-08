import React from 'react'
import img2 from '../images/skills.jpeg'
import  "./Skills.css";

export default function Skills() {
  return (
    <>
    <section id="skills">
    <div>
    <div className="skillbox">
        {/* <h1 className="skillheading">Skills</h1> */}
        <img src={img2} alt="skill" className="skillimage"/>
    </div>
    </div>
    </section>
    </>
  )
}
