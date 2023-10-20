//import { useState, useContext } from 'react'
import './App.css'
import Signup from './pages/SignUpPage/Signup'
import LandingPage from './pages/LandingPage/LandingPage'
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signup/>}></Route>
        <Route path="/home" element={<LandingPage/>}></Route>
      {/*} <Route path="/Genesis/adminlogin" element={<Signup/>}></Route>
        <Route path="/Genesis/transactions" element={<Signup/>}></Route>
        <Route path="/Genesis/signup" element={<Signup/>}></Route> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
