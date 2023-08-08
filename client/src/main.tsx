import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './templates/Home'
import NotFound from './templates/NotFound'
import Signup from './templates/Signup'
import Login from './templates/Login'

const root = document.getElementById('root')!

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/home' Component={Home} />
        <Route path='/signup' Component={Signup} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)