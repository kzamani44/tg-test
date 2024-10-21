'use client'
import React, { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'

function HomePage() {

  const [userData,setUserData] = useState('')
  const {themeParams} = WebApp

  useEffect(()=>{
    if(WebApp.initDataUnsafe){
      setUserData(WebApp.initData)
    }
  },[])

  console.log(userData)
  return (
    <div className={`bg-${themeParams.bg_color}`}>
     {userData}
    </div>
  )
}

export default HomePage
