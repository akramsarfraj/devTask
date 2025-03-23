import React, { useEffect, useState } from 'react'
import './css/Homepage.css'


function HomePage() {
  let [data,setData]=useState();
  useEffect(()=>{

    let da = localStorage.getItem("data")
    setData(JSON.parse(da))
    

  },[])

 
  

  return (
    <div className='homepage'>
      <div className='home-container'>

        <div className='home-header'>
          <h2>Account Settings</h2>
        </div>

        <div className='home-content'>

          <div className='profile-detail'>
            <img id='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19VP2OHkyeWyfsxBllZSPjs951uLcYfB5YA&s' alt='img-profile' ></img>

            <div className='icon-crm'>
                <img src='/img/Group 1585.png'></img>             
            </div>

            <div>
              <h4 className='name'>Marry doe</h4>
              <p className='email'>Marry@Gmail.Com</p>
            </div>
          </div>

          <div className='content'>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </div>

        </div>

   

      </div>
    </div>
  )
}

export default HomePage