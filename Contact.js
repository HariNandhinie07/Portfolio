import React from 'react';
import './contactstyle.css';

function Contact() {
  return (
    <section>
        <div className='contact'>
      <h2>Contact Me</h2>
      <img src={require("./linkedin.png")} alt='ME'></img>
      <p>Linked In:Hari Nandhinie</p>
      <p>Here is My Linked in Link:<a href="">click here</a></p><br></br>
      <img src={require("./github.png")} alt='ME'></img>
      <p>Github:Hari Nandhinie</p>
      <p>Here is My github in Link:<a href="">click here</a></p><br></br>
      <img src={require("./email.png")} alt='ME'></img>
      <p>Email:harinandhinie07@gmail.com</p>
      </div>
    </section>
  );
}

export default Contact;
