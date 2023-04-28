// import React, {useState, useEffect} from 'react'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/dashboard/Profile'
import Client from './components/Client'
import ClientSearch from './components/ClientSearch'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/client' element={<Client />}/>
        <Route path='/clientsearch' element={<ClientSearch />}/>
        <Route path='*' element={<h1>404 Page Not Found</h1>}/>
      </Routes>
    </>
  );
}

export default App;
