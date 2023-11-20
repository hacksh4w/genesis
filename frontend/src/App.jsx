//import { useState, useContext } from 'react'
import './App.css'
import { AuthContext } from './contexts/AuthContext'
//import { supabase } from './utils/supabaseConfig'
import { ChakraProvider } from '@chakra-ui/react'
import Signup from './pages/SignUpPage/Signup'
import SignIn from './pages/SignIn/SignIn'
import LandingPage from './pages/LandingPage/LandingPage'
import { Routes, Route } from "react-router-dom"
import DonorApplication from './pages/DonorPages/DonorApplication'
import DonorCatalog from './pages//DonorPages/DonorCatalog'
import DonorProfile from './pages/DonorPages/DonorProfile'
//import Footer from './components/Footer/Footer'
import AdopterApplication from './pages/AdopterApplication'
import AdopterProfile from './pages/AdopterProfile'
import AdopterProf from './pages/AdopterProf'
import AdopterApplication2 from './pages/AdopterPages/AdopterApplication2'
import ClinicCatalog from './pages/ClinicPages/ClinicCatalog'

const App = () => {

  return (
    <div className='App'>
      <AuthContext.Provider value={AuthContext}>
        <ChakraProvider>
          <Routes>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/clinics" element={<ClinicCatalog />}></Route>
            <Route path="/donors" element={<DonorCatalog />}></Route>
            <Route path="/donors/:id" element={<DonorProfile />}></Route>
            <Route path="/donorapplication" element={<DonorApplication />}></Route>
            <Route path='/newadopterapplication' element={<AdopterApplication2 />}></Route>
            <Route path="/adopters" element={<AdopterProfile />}></Route>
            <Route path="/test" element={<AdopterProf />}></Route>
          </Routes>
        </ChakraProvider>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
