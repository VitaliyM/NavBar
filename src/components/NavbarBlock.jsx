import React from 'react';
import './navbarBlock.css';
import Logo from './../images/burger.png';

const NavbarBlock = () => {
    return (
        <div className='navbarBlock'>
            <div className='logoBlock'>
                <img src={Logo} alt="Burger" className='navbarLogo' />
                <div className='logoText'>Burger menu</div>
            </div>
            <div className='navBarListBlock'>
                <a href="http://" className='navBarList'>Home</a>
                <a href="http://" className='navBarList'>News</a>
                <a href="http://" className='navBarList'>Product</a>
                <a href="http://" className='navBarList'>About Us</a>
                <a href="http://" className='navBarList'>Contacts</a>
            </div>
        </div>
    )
}

export default NavbarBlock