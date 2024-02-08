import React from 'react';
import './Headerstyle.css';
function Header({ setActiveSection }) {
  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => setActiveSection('about')}>About</li>
          <li onClick={() => setActiveSection('projects')}>Projects</li>
          <li onClick={() => setActiveSection('education')}>Skills</li>
          <li onClick={() => setActiveSection('certification')}>certification</li>
          <li onClick={() => setActiveSection('contact')}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
