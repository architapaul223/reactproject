import React,{useState} from 'react'
// import logo from './assets/logo.jpg';
// import logo from '../../Assets/logo.jpg';
import  "./NavBar.css";

export default function NavBar(props) {
  const [color,setColor]=useState(false)
  const colorChange=()=>{
    if(window.scrollY>=90){
      setColor(true)
    }
    else{
      setColor(false)
  }
  }
  window.addEventListener('scroll',colorChange)
  return (
    <>
   <nav className={color?'navbar-bg':'navbar'} >
  <div className={color?'container-bg':'container-fluid'}>
    <div>
    <a className="title" href="/">PortFolio</a></div>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> */}
      {/* <span className="navbar-toggler-icon"></span> */}
    {/* </button> */}
    <div className="menu" id="navbarNav">
      <ul className="menuitems">
        <li className="nav-item">
          <a className="nav-link active"  href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutus">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contactus">Contact</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
