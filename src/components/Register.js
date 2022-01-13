import React, { useState, useEffect } from 'react';


/////////// INITIAL STATES ////////////
const initialFormValues = {
    //// TEXT INPUTS ////
    email:'', 
    fullName:'',
    username: '',
    password:''
  }
  const initialFormErrors = {
    email:'', 
    fullName:'',
    username: '',
    password:''
  }
function Register() {
    ////////// STATES //////////
    const [formValues, setFormValues] = useState(initialFormValues) //object
    const [formErrors, setFormErrors] = useState(initialFormErrors) //object

    const handleChanges = (event) => {
        setFormValues({...formValues,
        [event.target.name]: event.target.value })
    }
    return (
        <div className='register-container register-login-container'>
            <form className='login-form-container login-containers'>
                <h3>Instagram</h3>
                <p>Sign up to see instaclone</p>
                <label>
                   <input 
                    value={formValues.email}
                    onChange={handleChanges}
                    name='email'
                    type='email'
                    placeholder='Email'
                    className='login-input intro-font'
                /> 
                </label>
                <label>
                   <input 
                    value={formValues.fullName}
                    onChange={handleChanges}
                    name='fullName'
                    type='text'
                    placeholder='Full Name'
                    className='login-input intro-font'
                /> 
                </label>
                <label>
                   <input 
                    value={formValues.username}
                    onChange={handleChanges}
                    name='username'
                    type='text'
                    placeholder='Username'
                    className='login-input intro-font'
                /> 
                </label>
                <label>
                   <input 
                    value={formValues.password}
                    onChange={handleChanges}
                    name='password'
                    type='text'
                    placeholder='Password'
                    className='login-input intro-font'
                /> 
                </label>
                <button className='login-btn'>Sign up</button>
                <p className='terms-container'>By signing up, you agree to our <span className='register-span'>Terms</span>, <span className='register-span'>Data Policy</span> and <span className='register-span'>Cookies Policy.</span></p>
            </form>
            <div className='login-signup-container login-containers'>
                <p>Have an account? <span className='login-signup-text'>Log in</span></p>
            </div>
        </div>
    )
}

export default Register;
