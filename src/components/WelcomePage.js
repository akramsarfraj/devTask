import React from 'react'
import './css/Welcome.css'
import { Link } from 'react-router-dom'

function WelcomePage() {

 
  return (
    <div className='welcomePage'>
        <div className='welcome-container' >
                <h2 className='content-head'>Welcome to PopX</h2>
                <p className='content-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <Link to={"/register"} className='link-r' ><div className='register'>Create Account</div> </Link> 
                <Link to={"/signIn"} className='link-s'> <div className='login'>Already Registered? Login</div> </Link> 
        </div>

    </div>
  )
}

export default WelcomePage