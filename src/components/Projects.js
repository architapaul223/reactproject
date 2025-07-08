
  
 import React from 'react'
import  "./Projects.css";

export default function Projects() {
  return (
    <>
    <section id="projects">
    <div className="project-container">
    <h1 className="projecttitle">Featured Projects</h1>
    <div className="projectcards">
        <div class="card w-50">
  <div className="card-body">
    <h5 class="card-title">E-Commerce Platform</h5>
    <p class="card-text">Full-stack web application built with React,Node.js and MongoDB.</p>
    <div className="buttoncase">
    <button className="buttongrey">React</button>
    <button className="buttongrey">Node.js</button>
    <button className="buttongrey">MongoDB</button>
    <button className="buttongrey">Express</button>
    </div>
    <button type="button" class="btn btn-outline-primary mx-2">Code</button>
    <a href="#" class="btn btn-primary">Demo</a>
  </div>
</div>
<div className="card w-50">
  <div class="card-body">
    <h5 class="card-title">Task Management App</h5>
    <p class="card-text"> Responsive mobile-first application with real-time updates.</p>
    <div className="buttoncase">
    <button className="buttongrey">React Native</button>
    <button className="buttongrey">Firebase</button>
    <button className="buttongrey">Redux</button>
    </div>
    <button type="button" class="btn btn-outline-primary mx-2">Code</button>
    <a href="#" class="btn btn-primary">Demo</a>
  </div>
</div>
<div className="card w-50">
  <div class="card-body">
    <h5 class="card-title">Data Visualization Dashboard</h5>
    <p class="card-text">Interactive dashboard for business analytics and reporting.</p>
    <div className="buttoncase">
    <button className="buttongrey">D3.js</button>
    <button className="buttongrey">python</button>
    <button className="buttongrey">redux</button>
    <button className="buttongrey">PostgreSQL</button>
    </div>
    <button type="button" class="btn btn-outline-primary mx-2">Code</button>
    <a href="#" class="btn btn-primary">Demo</a>
  </div>
</div>
    </div>
    </div>
    </section>
    </>
  )
}
