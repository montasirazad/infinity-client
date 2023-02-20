import React from 'react';
import infinityLogo from '../../../image/infinity-logo.png';
import './Navbar.css';
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
    return (
        <div className='header'>

            <div className='logo-div'>
                <a href=" ">
                    <img src={infinityLogo} alt="" />
                </a>
            </div>

            <nav >

                <a href=" ">Home</a>
                <a href=" ">Products</a>
                <a href=" ">Retail</a>
                <a href=" ">Manufacturer</a>
                <a href=" " ><LoginIcon style={{fontSize:'16px'}}/>Log in</a>
            </nav>

        </div>
    );
};

export default Navbar;