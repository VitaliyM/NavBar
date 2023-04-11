// import React, { useState } from 'react';
import React from 'react'
import './navbarBlock.css';
import Logo from './../images/burger.png';
import MobileButtonLine from './mobileMenuButton/MobileButtonLine';
import MobileButtonCross from './mobileMenuButton/MobileButtonCross';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenMenu } from '../features/navbar/navbarSlice';

const NavbarBlock = () => {
    const showMobileMenu = useSelector(state => state.navbar.openMenu);
    const dispatch = useDispatch();

    // const [showMenu, setShowMenu] = useState(true);

    // const toggleButtonState = () => setShowMenu(!showMenu);

    return (
        <header className='navbarBlock'>
            <div className='logoBlock'>
                <img src={Logo} alt="Burger" className='navbarLogo' />
                <div className='logoText'>Burger menu</div>
            </div>
            <nav className={showMobileMenu ? 'navBarListBlock' : 'navBarListBlock navBarListBlockActive'}>
                <a href="##" className='navBarList'>Home</a>
                <a href="##" className='navBarList'>News</a>
                <a href="##" className='navBarList'>Product</a>
                <a href="##" className='navBarList'>About Us</a>
                <a href="##" className='navBarList'>Contacts</a>
            </nav>
            <div className='navBarMobileBtn' onClick={ () => dispatch(setOpenMenu()) }>
                {showMobileMenu ? <MobileButtonLine /> : <MobileButtonCross />}
            </div>
        </header>
    )
}

export default NavbarBlock