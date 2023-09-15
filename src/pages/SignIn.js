import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ signIn }) => {

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    signIn()
    navigate("/myapartments")

  }

  return (
    <>
      <div className='signup-container'>
        <h2>Sign in to your account</h2>

        <form className='form-container' onSubmit={handleSubmit}>

          <div className='input-container'>
            <label>Email:</label> 
            <input type='email' name='email' placeholder='Enter Email' />
            
          </div>

          <div className='input-container'>
            <label>Password:</label> 
            <input type='password' name='password' placeholder='Enter Password' />
          </div>

          <input id="submit" type="submit" value="submit" />
        </form>

      </div>
    </>
  )
}

export default SignIn