//import { useState, useContext } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Signup from './pages/SignUpPage/Signup'
import LandingPage from './pages/LandingPage/LandingPage'
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer/Footer'
import DonorApplication from './pages/donorApplication'
import DonorCatalog from './pages/DonorCatalog'
import DonorProfile from './pages/DonorProfile'

const App = () => {
  return (
    <div className='App'>
      <ChakraProvider>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signup />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/donors" element={<DonorCatalog/>}></Route>
          <Route path="/donors/:id" element={<DonorProfile/>}></Route>
          <Route path="/donorapplication" element={<DonorApplication/>}></Route>
          {/*} <Route path="/Genesis/adminlogin" element={<Signup/>}></Route>
        <Route path="/Genesis/transactions" element={<Signup/>}></Route>
        <Route path="/Genesis/signup" element={<Signup/>}></Route> */}
        </Routes>
        
      </ChakraProvider>
    </div>
  )
}

export default App
