'use client'
import React, { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'

function HomePage() {

  const [userData,setUserData] = useState('')

  useEffect(()=>{
    if(WebApp.initData){
      setUserData(WebApp.initData)
    }
  },[])

  console.log(userData)
  return (
    <div>
     {userData}
    </div>
  )
}

export default HomePage
