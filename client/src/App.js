import React from 'react'
import {useState, useEffect} from 'react'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import Clients from './components/clients/Clients'
import Cform from './components/clients/Cform'
import Client from './components/Client'
import Orders from './components/orders/Orders'
import Oform from './components/orders/Oform'
import Chemicals from './components/apis/Chemicals'
import Aform from './components/apis/AForm'
import {Routes, Route} from 'react-router-dom'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/checksession').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }
    })
  }, [])

  function handleLogin(user) {
    setUser(user);
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Login handleLogin={handleLogin}/>}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/dashboard' element={<Dashboard user ={user} setUser={setUser} />}/>
        <Route path='/client' element={<Client />}/>
        <Route path='dashboard/clients' element={<Clients />}/>
        <Route path='dashboard/orders' element={<Orders />}/>
        <Route path='dashboard/chemicals' element={<Chemicals />}/>
        <Route path='dashboard/clientform' element={<Cform />}/>
        <Route path='dashboard/orderform' element={<Oform />}/>
        <Route path='dashboard/apiform' element={<Aform />}/>
        <Route path='*' element={<h1>404 Page Not Found</h1>}/>
      </Routes>
    </>
  );
}

export default App;
