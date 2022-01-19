import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import compass from '../pictures/compass.png';
import heart from '../pictures/heart.png';
import home from '../pictures/home.png';
import messenger from '../pictures/messenger.png';
import more from '../pictures/plus.png';
import user from '../pictures/user.png';
import search from '../pictures/search.png';


function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav-div-h3'>
                <h3 className='nav-h3'>Instagram</h3>  
            </div>
            <div className='nav-search-bar'>
                {/* <img className='search-icon' src={search} /> */}
                <input
                    placeholder='Search'
                    name='searchBar'
                    type='text'
                    className='search-bar'
                />
            </div>
            <div className='icon-container'>
                <img id='icons' src={home} />
                <img id='icons' src={messenger} />
                <img id='icons' src={more} />
                <img id='icons' src={compass} />
                <img id='icons' src={heart} />
                <img id='icons' src={user} />
            </div>    
        </div>
    )
}

export default Navbar;
