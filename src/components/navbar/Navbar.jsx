import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/pickle2.png';

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#whatPickle'>What is a Pickle?</a></p>
    <p><a href='#possibility'>Pickle Possibilities</a></p>
    <p><a href='#features'>Pickle Facts</a></p>
    <p><a href='#recipes'>Pickle Recipes</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='pickle__navbar'>
      <div className='pickle__navbar-links'>
        <div className='pickle__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='pickle__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='pickle__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='pickle__navbar-menu_container scale-up-center'>
            <div className='pickle__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar
