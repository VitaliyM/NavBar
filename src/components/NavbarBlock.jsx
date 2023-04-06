import React from 'react';
import './navbarBlock.css';

const NavbarBlock = () => {
  return (
    <div className='navbarBlock'>
        <div className='navbarLogo'>Logo</div>
        <div className='navBarList'>
            <div>Home</div>
            <div>News</div>
            <div>Product</div>
            <div>About Us</div>
            <div>Contacts</div>
        </div>
    </div>
  )
}

export default NavbarBlock