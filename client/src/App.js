// import React, {useState, useEffect} from 'react'
import Home from './components/Home'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import Clients from './components/dashboard/Clients'
import Client from './components/Client'
import Orders from './components/dashboard/Orders'
import Chemicals from './components/dashboard/Chemicals'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/client' element={<Client />}/>
        <Route path='dashboard/clients' element={<Clients />}/>
        <Route path='dashboard/orders' element={<Orders />}/>
        <Route path='dashboard/chemicals' element={<Chemicals />}/>
        <Route path='*' element={<h1>404 Page Not Found</h1>}/>
      </Routes>
    </>
  );
}

export default App;
