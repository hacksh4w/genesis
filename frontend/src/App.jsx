import { useState, useContext } from 'react'
import './App.css'
import Signup from './pages/Signup'
import HeadingPage from './pages/header'
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/Genesis/signup" element={<Signup/>}></Route>
        <Route path="/Genesis/signin" element={<Signup/>}></Route>
        <Route path="/Genesis/home" element={<HeadingPage/>}></Route>
      {/*} <Route path="/Genesis/signup" element={<Signup/>}></Route>
        <Route path="/Genesis/signup" element={<Signup/>}></Route>
        <Route path="/Genesis/signup" element={<Signup/>}></Route> */}
      </Routes>
    </div>
  )
}

export default App
