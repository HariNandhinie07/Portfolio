import React,{useRef}from 'react';
import './Projectstyle.css';

function Projects() {

  return (
    <body>
    <section>
    <h3>Projects...!</h3>
      <div className='project'>
      <img src={require("./djangoimg.jpg")} alt='ME'></img>
      <h2>Stock Project</h2>
        <p>This Project Returns the total available products and the number of products that is being purchased.<br>
        </br>This Project Is Created Using Django  <br></br><a href=''>View My Project</a></p>
      </div>
    </section>
    </body>
  );
}

export default Projects;
