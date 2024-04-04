import React from 'react'
import './Navbar.css';


// import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 

export const Navbar = () => {

  
  return (    

    <div>

  <nav className=" navbar navbar-expand-lg navbar-light bg-secondary fixed-top ">
  <div className="container-fluid  ">
    {/* <a className="navbar-brand " href="#">Navbar</a> */}
    <a className="navbar-brand" href="#HomeID">
      <img src="./red logo.jpg" width="30" height="30" className="logo-red d-inline-block align-top " alt="Logo"/>  Portfolio </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav  ">

        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#HomeID">Home</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#ServicesID">Services</a>
        </li>

        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#SkillsID">Skills</a>
        </li>  

        <button className='nav-btn px-2 '>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#ContactID">Contact Us</a>
        </li>
        </button>

      </ul>
    </div>
  </div>
</nav>
 
     </div> 
   
  )
}


export default Navbar;