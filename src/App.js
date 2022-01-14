import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';

function App() {
  return (
    
      <div className="App">
        <header className="App-header">
          <Navbar />
          
        </header>
        <Routes>
          <Route path='/login' component={Login} />
          <Route path='/emailsignup' component={Register} />
        </Routes>
      </div>
    
  );
}

export default App;
