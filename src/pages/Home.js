import React from 'react'
import '../pages/Home.css'
import homeBkgd from '../assets/home-background.png'
const Home = () => {
  return (
    <div className='home-container'>
      <div className='image-background'>
        <img className='home-image'src={homeBkgd} alt='home-background-image'/>
      </div>

      <div className='home-title'>
        <h1>Welcome to the Cribz</h1>
      </div>
    </div>
  )
}

export default Home