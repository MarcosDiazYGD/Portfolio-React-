import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar--ul'>
        <a href="#home" className='navbar--a'><li className='navbar--link'>Home</li></a>
        <a href="#about" className='navbar--a'><li className='navbar--link'>About</li></a>
        <a href="#skills" className='navbar--a'><li className='navbar--link'>Skills</li></a>
        <a href="#portfolio" className='navbar--a'><li className='navbar--link'>Portfolio</li></a>
        <a href="#contat" className='navbar--a'><li className='navbar--link'>Contact</li></a>
      </ul>
    </nav>
  );
};

export default Navbar;