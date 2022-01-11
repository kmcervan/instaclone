import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <h3>Instaclone</h3>
            <div>
                <Link to='/login'>Login</Link>
            </div>
            <div>
                <Link to='/emailsignup'>Sign Up</Link>
            </div>
        </div>
    )
}

export default Navbar;
