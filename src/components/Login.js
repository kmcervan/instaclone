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
        <div className='login-container register-login-container'>
            <form className='login-form-container login-containers'>
                <h3>Instagram</h3>
                <label>
                   <input 
                    value={formValues.username}
                    onChange={handleChange}
                    name='username'
                    type='text'
                    placeholder='Username'
                    className='login-input intro-font'
                /> 
                </label>
                <label>
                   <input 
                    value={formValues.password}
                    onChange={handleChange}
                    name='password'
                    type='text'
                    placeholder='Password'
                    className='login-input intro-font'
                /> 
                </label>
                <button className='login-btn'>Log In</button>
                <a className='span-password'><span className='intro-font'>Forgot password?</span></a>
                
            </form>
            <div className='login-signup-container login-containers'>
                <p className='intro-font'>Don't have an account? <span className='login-signup-text intro-font'>Sign up</span></p>
            </div>
        </div>
    )
}

export default Login;
