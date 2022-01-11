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
                <h3>login</h3>
                <label>
                    Username&nbsp;
                   <input 
                    value={formValues.username}
                    onChange={handleChange}
                    name='username'
                    type='text'
                /> 
                </label>
                <label>
                    Password&nbsp;
                   <input 
                    value={formValues.password}
                    onChange={handleChange}
                    name='password'
                    type='text'
                /> 
                </label>
                <button>Log In</button>
            </form>
            <div className='login-signup-container'>
                <p>Don't have an account? <span className='login-signup-text'>Sign up</span></p>
            </div>
        </div>
    )
}

export default Login;
