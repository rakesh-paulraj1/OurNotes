import React from 'react'
import { getSession } from '@auth0/nextjs-auth0'
const  Dashboard = async()=>{
    const session =await getSession();
    

  return (
    <div>Dashboard 
        <a href="/api/auth/login">Login</a>
    </div>
  )
}

export default Dashboard