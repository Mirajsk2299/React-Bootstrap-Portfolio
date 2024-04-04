import React from 'react'
import "./Services.css";

const Services = () => {
  return (

 < div className="mb-5 mt-3" id="ServicesID"> 
 
 <h1 className="text-center mb-4 ">Our Services</h1>

<div className="container-fluid  ">
   <div className="row justify-content-center ">
    
    <div className="col-md-4 "> 
    
    <div class="card mb-2 mt-2 ">

  <img  src={require("../images/web development.png")} class="card-img-top " alt="Image Loading..."/>

  <div class="card-body">
    <h5 class="card-title"> Web Development</h5>
    <p class="card-text">I Use Various Web Technologies to Develop Attractive Websites. I Develop Creative and Responsive Website.</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
    
    </div>

    
    <div className="col-md-4"> 
    
    <div class="card mb-2 mt-2">
  <img src={require("../images/app development.png")}   class="card-img-top " alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> App Development </h5>
    <p class="card-text">I Use Various Technologies to Develop Attractive Applications.  I Develop Creative Android Applications.</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
    
    </div>

    
    <div className="col-md-4"> 
    
    <div class="card  mb-2 mt-2">
  <img    src={require("../images/UI UX.jpg")} class="card-img-top " alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> UI/UXDesign </h5>
    <p class="card-text"> I am also Skilled in UI/UX. To make the Sites more Attractive and User Friendly using Various Tools. </p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
    
    </div>

    {/* <div className="col-md-3"> 
    
    <div class="card mb-2 mt-2">
  <img    src={require("../images/app development.png")} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    </div> */}



  </div> 
  </div>


 </div>
    
  )
}  

export default Services