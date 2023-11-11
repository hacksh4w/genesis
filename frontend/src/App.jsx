//import { useState, useContext } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom"
import Signup from './pages/SignUpPage/Signup'
import DonorCatalog from './pages/DonorCatalog'
import LandingPage from './pages/LandingPage/LandingPage'



const App = () => {
  return (
    <ChakraProvider>
      <div className='App'>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signup />}></Route>
          <Route path="/donors" element={<DonorCatalog/>}></Route>
          <Route path="/home" element={<LandingPage />}></Route>
          {/*} <Route path="/Genesis/adminlogin" element={<Signup/>}></Route>
        <Route path="/Genesis/transactions" element={<Signup/>}></Route>
        <Route path="/Genesis/signup" element={<Signup/>}></Route> */}
        </Routes>
      </div>
    </ChakraProvider>
  )
}

export default App
