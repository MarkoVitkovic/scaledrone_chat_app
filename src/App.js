import React, { useEffect } from 'react'

import Room from './components/Room'
import './App.css'
import Login from './pages/Login'
import { useStateContext } from './contexts/context'

const App = () => {

  const { login, setLogin, user, setUser, color, setColor, avatar, setAvatar } = useStateContext()

  useEffect(() => {
      setUser(localStorage.getItem('user'))
      setColor(localStorage.getItem('color'))
      setAvatar(localStorage.getItem('avatar'))
      setLogin(localStorage.getItem('login'))
      console.log("opalilp");
  },[user, avatar, color, login])

  return (
    <>
      {login ? <Room /> : <Login />}
    </>
  )
}

export default App