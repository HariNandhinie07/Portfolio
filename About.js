import React,{useRef}from 'react';
import './Aboutstyle.css';
import ReactPlayer from 'react-player';
const VIDEO_PATH = './projectvdo.mp4';

function About() {
    const playerRef = useRef(null);
  return (
    <body>
    <section>
    <h2>Hello Everyone Welcome To My Portfolio</h2>
      <img src={require("./hari.jpg")} alt='ME'></img>
      <pre>
        I Am Hari Nandhinie.K.R<br></br>
        And I Am A Web Developer<br></br>
        I Have Great Intrest Towards Towards Web Development.<br></br>
        I Have Worked On Many Projects Related to full Stack & <br></br>
        Developing Web Applications.<br></br>
        If you want to know more visit the above links
      </pre>
      <div className='vdo'>
      <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
      </div>
    </section>
    </body>
  );
}

export default About;
