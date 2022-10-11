import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate=useNavigate();

  const onLogin=()=>{
    navigate("/",{
      replace:true,
    })
  }

  return (
    <div className="container mt-3">
      <h2 className="fw-bold">Login</h2>
      <hr />

      <button className='btn btn-success' onClick={onLogin}>Login</button>
    </div>
  )
}
