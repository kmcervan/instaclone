import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import compass from '../pictures/compass.png';
import heart from '../pictures/heart.png';
import home from '../pictures/home.png';
import messenger from '../pictures/messenger.png';
import more from '../pictures/plus.png';
import user from '../pictures/user.png';


function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav-h3'>
                <h3>Instagram</h3>  
            </div>
            <div className='nav-search-bar'>
                <input
                    placeholder='Search'
                    name='searchBar'
                    type='text'
                    className='search-bar'
                />
            </div>
            <div className='icon-container'>
                <img classname='navbar-icons' src={home} />
                <img classname='navbar-icons' src={messenger} />
                <img classname='navbar-icons' src={more} />
                <img classname='navbar-icons' src={compass} />
                <img classname='navbar-icons' src={heart} />
                <img classname='navbar-icons' src={user} />
            </div>    
        </div>
    )
}

export default Navbar;
