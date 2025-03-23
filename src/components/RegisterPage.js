import React, { useState } from 'react'
import './css/Register.css'
import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { Password } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {

  let navigate = useNavigate();

  const [formData,setFormData] = useState({
    name:"",
    phone:"",
    email:"",
    password:"",
    companyName:"",
    agent:""
  })

  let handleForm=()=>{
    localStorage.setItem("data",JSON.stringify(formData))

    navigate("/home")
  }
  

  return (
    <div className='registerPage'>

      <div className='form-container'>
        <h2 className='form-header'>Create your PopX account</h2>

        <TextField
          required
          id="outlined-basic"
          label="Full Name"
          type="text"
          placeholder="Enter full name"
          onChange={(e)=>{setFormData({...formData,name:e.target.value}) }}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          size='small'
          sx={{
            marginTop: "20px",
            marginLeft: "20px",
            width: "300px",
          }}

        />
        <TextField
          required
          id="outlined-basic"
          label="Phone number"
          type="number"
          placeholder="Enter phone number"
          onChange={(e)=>{setFormData({...formData,phone:e.target.value}) }}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          size='small'
          sx={{
            marginTop: "20px",
            marginLeft: "20px",
            width: "300px",
          }}

        />
        <TextField
          required
          id="outlined-basic"
          label="Email Address"
          type="text"
          placeholder="Enter email address"
          onChange={(e)=>{setFormData({...formData,email:e.target.value}) }}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          size='small'
          sx={{
            marginTop: "20px",
            marginLeft: "20px",
            width: "300px",
          }}

        />

        <TextField
          required
          id="outlined-basic"
          label="Password"
          type="text"
          placeholder="Enter password"
          onChange={(e)=>{setFormData({...formData,password:e.target.value}) }}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          size='small'
          sx={{
            marginTop: "20px",
            marginLeft: "20px",
            width: "300px",
          }}

        />

        <TextField
          id="outlined-basic"
          label="Company name"
          type="text"
          placeholder="Enter company name"
          onChange={(e)=>{setFormData({...formData,companyName:e.target.value}) }}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          size='small'
          sx={{
            marginTop: "20px",
            marginLeft: "20px",
            width: "300px",
          }}

        />

        <div className='radio-form'>
          <p className='radio-label'>Are you an Agency?<span style={{color:"red"}}>*</span></p>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={(e)=>{
                setFormData({...formData,agent:e.target.value})
            }}
          >
            <FormControlLabel value="Yes" control={<Radio size='small' />} label="Yes" />
            <FormControlLabel value="No" control={<Radio  size='small'/>} label="No" />
          </RadioGroup>
        </div>

        
        <button className='btn-create' onClick={handleForm}>Create Account</button>

      </div>

    </div>
  )
}

export default RegisterPage