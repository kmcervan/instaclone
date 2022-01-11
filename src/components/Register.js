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
        <div>
            <form>
                <h2>Instaclone</h2>
                <p>Sign up to see instaclone</p>
                <label>
                    Email&nbsp;
                   <input 
                    value={formValues.email}
                    onChange={handleChanges}
                    name='email'
                    type='email'
                /> 
                </label>
                <label>
                    Full Name&nbsp;
                   <input 
                    value={formValues.fullName}
                    onChange={handleChanges}
                    name='fullName'
                    type='text'
                /> 
                </label>
                <label>
                    Username&nbsp;
                   <input 
                    value={formValues.username}
                    onChange={handleChanges}
                    name='username'
                    type='text'
                /> 
                </label>
                <label>
                    Password&nbsp;
                   <input 
                    value={formValues.password}
                    onChange={handleChanges}
                    name='password'
                    type='text'
                /> 
                </label>
                <button>Sign up</button>
            </form>
            <div>
                <p>Have an account? <span>Log in</span></p>
            </div>
        </div>
    )
}

export default Register;
