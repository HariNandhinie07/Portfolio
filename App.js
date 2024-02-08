import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Certification from './components/Certification';


function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div>
      <Header setActiveSection={setActiveSection} />
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'education' && <Education />}
      {activeSection === 'certification' && <Certification />}
      {activeSection === 'contact' && <Contact />}

    </div>
  );
}

export default App;
