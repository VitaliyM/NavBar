import React, { useState } from 'react';
import './navbarBlock.css';
import Logo from './../images/burger.png';
import MobileButtonLine from './mobileMenuButton/MobileButtonLine';
import MobileButtonCross from './mobileMenuButton/MobileButtonCross';

const NavbarBlock = () => {

    const [showMenu, setShowMenu] = useState(true);

    const toggleButtonState = () => setShowMenu(!showMenu);

    return (
        <header className='navbarBlock'>
            <div className='logoBlock'>
                <img src={Logo} alt="Burger" className='navbarLogo' />
                <div className='logoText'>Burger menu</div>
            </div>
            <nav className={showMenu ? 'navBarListBlock' : 'navBarListBlock navBarListBlockActive'}>
                <a href="##" className='navBarList'>Home</a>
                <a href="##" className='navBarList'>News</a>
                <a href="##" className='navBarList'>Product</a>
                <a href="##" className='navBarList'>About Us</a>
                <a href="##" className='navBarList'>Contacts</a>
            </nav>
            <div className='navBarMobileBtn' onClick={toggleButtonState}>
                {showMenu ? <MobileButtonLine /> : <MobileButtonCross />}
            </div>
        </header>
    )
}

export default NavbarBlock