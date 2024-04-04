import React from 'react'
import './Aboutme.css';

const Aboutme = () => {
  return (
    
    <div className="about-me-page">
      <h1>About Me</h1>
      <div className="profile-summary">
        <img src="profile-picture.jpg" alt="Profile" className="profile-picture" />
        <div className="summary-text">
          <p>Hello! I'm [Your Name], a passionate web developer based in [Your Location]. I specialize in creating dynamic and user-friendly web applications using modern technologies.</p>
          <p>With [Number] years of experience in web development, I have expertise in front-end technologies like HTML, CSS, JavaScript (including frameworks like React.js), as well as back-end technologies like Node.js and Express.</p>
          <p>I enjoy working on projects that challenge me to learn and grow, and I'm always exploring new tools and techniques to enhance my skills and stay updated with industry trends.</p>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3 / SASS</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>RESTful APIs</li>
          <li>Responsive Web Design</li>
          <li>Version Control (Git)</li>
          <li>...and more</li>
        </ul>
      </div>
      <div className="contact-me">
        <h2>Contact Me</h2>
        <p>If you'd like to collaborate on a project or have any inquiries, feel free to reach out to me:</p>
        <ul>
          <li>Email: [Your Email]</li>
          <li>Phone: [Your Phone Number]</li>
          <li>LinkedIn: [Your LinkedIn Profile]</li>
          <li>GitHub: [Your GitHub Profile]</li>
        </ul>
      </div>
    </div>

  )
}

export default Aboutme