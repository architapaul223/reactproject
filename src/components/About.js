import React from 'react'
 import  "./About.css";

export default function About() {
  return (
    // <>
    <section id="aboutus">
    <div className="aboutme">
    
      <h1 className="abouttitle">ABOUT ME</h1>
      <p className="aboutpara">Hi, I’m Archita — a curious learner, creative thinker, and a passionate individual with a drive to grow and build meaningful things.
         I love exploring new ideas, learning new skills, and using technology as a tool to solve real-world problems.
         Whether it's diving into the world of web development, experimenting with design, or picking up new challenges,
          I bring dedication and a fresh perspective to everything I do.
          Currently, I’m working on sharpening my skills in React, JavaScript, and full-stack development. Along the way, 
          I’ve also developed a love for UI/UX design and content creation.
     </p>
  <div className="cardflex">
     <div class="card" style={{width: '18rem'}}>
     <div className="card-body">
     <h5 className="card-title"> 1. UI/UX Design Exploration</h5>
     <p className="card-text">I'm passionate about creating intuitive and visually appealing user experiences, constantly 
      experimenting with layout, color, and interactivity.</p>
     {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
     {/* <button type="button" class="btn btn-primary">Primary</button> */}
     </div>
     </div>
      <div class="card" style={{width: '18rem'}}>
     <div className="card-body">
     <h5 className="card-title"> 2.Public Speaking & Communication</h5>
     <p className="card-text">I have a passion for expressing ideas clearly and confidently. Whether it's presenting a project, leading a discussion, or participating in a group event, I enjoy connecting with people
       through impactful communication. Public speaking has helped me grow as a leader, a listener, and a collaborator.</p>
     {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
     {/* <button type="button" class="btn btn-primary">Primary</button> */}
     </div>
     </div>
     <div class="card" style={{width: '18rem'}}>
     <div className="card-body">
     <h5 className="card-title"> 3.Constant Learning & Tech Exploration</h5>
     <p className="card-text">Technology is always evolving, and I love being part of that growth. I regularly explore new tools, frameworks, and trends—whether it’s a new CSS technique,
       a JavaScript library, or a design tool. Learning keeps me motivated and helps me bring fresh ideas into my projects.</p>
     {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
     {/* <button type="button" class="btn btn-primary">Primary</button> */}
     </div>
     </div>


 
   
  </div>

 

      </div>
// </section>
  )
}
   
    
 

     
