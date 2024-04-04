import React from "react";
import "./Skills.css";
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee  } from '@fortawesome/free-solid-svg-icons'

import { FaHtml5, FaCss3, FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";

// import { faReact } from '@fortawesome/free-brands-svg-icons'
// import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  return (
    <div className="skillsdiv mb-5 mt-1" id="SkillsID">
      <h1 className="sktg text-center mb-4 display-1"> My Skills </h1> <br />{" "}
      <br />
      <div className="container-fluid  ">
        <div className="row justify-content-center ">
          <div className="col-md-4   ">
            <h1>My Creative Skills & Experience</h1> <br />


            {/* 
<FontAwesomeIcon className='fa-4x text-danger' icon={faCoffee}  /> 
<FontAwesomeIcon className='fa-4x text-danger' icon={faCoffee}  /> 
<FontAwesomeIcon className='fa-4x text-danger' icon={faCoffee}  /> 
<FontAwesomeIcon className='fa-4x text-danger' icon={faCoffee}  /> 
<FontAwesomeIcon className='fa-4x text-danger' icon={faCoffee}  />  */}




            {/* 
            
            <div>
              
              &nbsp; &nbsp; &nbsp;
              <FaHtml5 className=" text-succes" /> &nbsp;
              <FaCss3 className="text-info" /> &nbsp;
              <IoLogoJavascript className="text-warning" /> &nbsp;
              <RiReactjsFill className=" text-primary" /> &nbsp;
              <FaDatabase className="  text-danger" /> &nbsp;
            </div>
            
             <br />
            */}
           

            <h5>
              I am Experienced in Html, Css, JavaScript, React JS and SQL. I
              have made few Static & Dynamic Projects using this Languages.{" "}
            </h5>{" "}
            <br />
            <button className="skills-btn mb-4">Download CV</button> <br />  <br />
          </div> 
          <div className="col-md-4 ">
            <h3>Html</h3>
            <div className="progress">
              <div
                className="progress-bar bg-success progress-bar-striped"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                70%
              </div>
            </div>

            <br />

            <h3>Css</h3>
            <div className="progress">
              <div
                className="progress-bar bg-info progress-bar-striped"
                role="progressbar"
                style={{ width: "65%" }}
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                65%
              </div>
            </div>

            <br />

            <h3>JavaScript</h3>
            <div className="progress">
              <div
                className="progress-bar bg-warning progress-bar-striped"
                role="progressbar"
                style={{ width: "55%" }}
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                55%
              </div>
            </div>

            <br />

            <h3>React JS</h3>
            <div className="progress">
              <div
                className="progress-bar bg-danger progress-bar-striped"
                role="progressbar"
                style={{ width: "40%" }}
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                40%
              </div>
            </div>

            <br />

            <h3>SQL</h3>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: "30%" }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                30%
              </div>
            </div>

            <br />
          </div>

          {/* <div className="col-md-4"> ..........code here  </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
