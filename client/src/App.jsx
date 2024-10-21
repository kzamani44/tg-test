'use client'
import { useState } from 'react'
import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements} from 'react-router-dom'
import render from './helpers/render'
import './App.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={render.rootLayout}>
        <Route index element={render.homePage}/>
      </Route>
    </>
  )
)

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
