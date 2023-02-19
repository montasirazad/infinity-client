import React from 'react';
import infinityLogo from '../../../image/infinity-logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>

            <div className='logo-div'>
                <img src={infinityLogo} alt="" />
            </div>

            <div className='nav-link'>
                <nav >
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">Retail</a></li>
                        <li><a href="">Manufacturer</a></li>

                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;