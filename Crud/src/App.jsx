import React from 'react'
import { useState } from 'react'
import{ BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import LoginSignup from './LoginSignup'
import Navbar from './Components/Navbar'


function App() {
 

  return (
    <div>
      <Navbar/>
  
    </div>
  )
}

export default App
