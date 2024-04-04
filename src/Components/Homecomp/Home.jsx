import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Home.css";
// import ReactDOM from 'react-dom';


// import { Container, Row, Col } from "react-bootstrap";
// import { Container } from 'react-bootstrap';

 
const Home = () => {

      // const navigate = useNavigate ();

  
    // const navigate = useNavigate ();
    // const gotoabout = () => {
    //   navigate ('/Aboutme');
    // };

  //  const navigate = useNavigate()
  //   function gotoabout () {
  //     navigate("/Aboutme")
  //   }

  return (  

   
<div className="container custom-bg"  id="HomeID" >
      
      <div className="hero-content mt-3">
        <h1 className="display-1 ">Miraj Shaikh</h1> <br />
        <h3>FRONT-END DEVELOPER</h3> 
        <h6>I am a front-End Developer Skilled in React.js </h6>  <br />

        <div className="hero-btn">
          
         <div className="hom-btn">
            <button  className="button-hom" >  <a className="btn-ancor"  target="_blank" rel="noopener noreferrer"> About Me  </a> </button>
          </div>

          {/* onClick={ gotoabout}     onClick={()=>{navigate('/Aboutme')}} */}

            <div className="hom-btn">
            <button className="button-hom">     <a className="btn-ancor" href="https://github.com/" target="_blank" rel="noopener noreferrer"> Projects  </a>   </button>
          </div>
          
        </div>
      </div>



      <div className="hero-image">
        <img className="img-fluid"
         
          src={require("../images/homepg1.gif")}
          alt="homeimg" />

          </div>    

    </div>


  )
}

export default Home