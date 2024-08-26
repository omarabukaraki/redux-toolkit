
import React from 'react'
import { login, logout } from './authSlice'
import { useDispatch, useSelector } from 'react-redux';

const AuthComponentT = () => {
    const selectorAuth = useSelector(state => state.auth.isLog);
    const dispatch = useDispatch();

  return (
    <>
    <h1>{selectorAuth !== false ? 'user login' : 'user logout'}</h1>
    <button onClick={() => {
        dispatch(login())
    }}>login</button>
    <button onClick={() => {
        dispatch(logout())
    }}>logout</button>
</>
  )
}

export default AuthComponentT
