import React from 'react'
import notFound from '../assets/notfound.jpg'

const NotFound = () => {
  return (
    <div>
      <div className='notFound-container'>
        <div className='image-background'>
          <img className='notFound-image' src={notFound} alt='not found page' />
        </div>
      </div>
      <div className='notFound-content'>
        <h2>This is not the apartment you are looking for</h2>
      </div>
    </div>
  )
}

export default NotFound