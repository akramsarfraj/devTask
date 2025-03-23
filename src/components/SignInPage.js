import React, { useState } from 'react'
import './css/SignIn.css'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
function SignInPage() {
    let navigate = useNavigate();
     const [formData,setFormData] = useState({

        email:"",
        password:""
      })
    
      let handleForm=()=>{
        localStorage.setItem("login",JSON.stringify(formData))
    
        navigate("/home")
      }

    return (
        <div className='siginIn'>
            <div className='signIn-container'>
                <h2 className='container-header'>Signin to your PopX account</h2>
                <p className='container-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <TextField
                    id="outlined-basic"
                    label="Email Address"
                    type="text"
                    placeholder="Enter email address"
                    onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                    size='small'
                    sx={{
                        marginTop:"30px",
                        marginLeft:"20px",
                        width:"295px",
                    }}
                    
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    type="text"
                    placeholder="Enter password"
                    onChange={(e)=>{setFormData({...formData,password:e.target.value})}}
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                    size='small'
                    sx={{
                        marginTop:"20px",
                        marginLeft:"20px",
                        width:"295px",
                    }}
                    
                />

                <button className='btn-lgn' onClick={handleForm}>Login</button>
            </div>
        </div>
    )
}

export default SignInPage