import React, { useState, useEffect } from 'react';
import '../App.css';

/////////// INITIAL STATES ////////////
const initialFormValues = {
    //// TEXT INPUTS ////
    username: '',
    password:''
  }
//   const initialFormErrors = {
//     email:'', 
//     fullName:'',
//     username: '',
//     password:''
//   }

function Login() {
    ////////// STATES //////////
    const [formValues, setFormValues] = useState(initialFormValues) //object
    // const [formErrors, setFormErrors] = useState(initialFormErrors) //object

    const handleChange = (event) => {
        setFormValues({...formValues,
        [event.target.name]: event.target.value})
    }

    return (
        <div className='login-container'>
            <form className='login-form-container'>
                <h3>Instaclone</h3>
                <label>
                   <input 
                    value={formValues.username}
                    onChange={handleChange}
                    name='username'
                    type='text'
                    placeholder='Username'
                    className='login-input'
                /> 
                </label>
                <label>
                   <input 
                    value={formValues.password}
                    onChange={handleChange}
                    name='password'
                    type='text'
                    placeholder='Password'
                    className='login-input'
                /> 
                </label>
                <span className='span-password'>Forgot password?</span>
                <button className='login-btn'>Log In</button>
            </form>
            <div className='login-signup-container'>
                <p>Don't have an account? <span className='login-signup-text'>Sign up</span></p>
            </div>
        </div>
    )
}

export default Login;
