//import { useState, useContext } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Signup from './pages/SignUpPage/Signup'
import SignIn from './pages/SignIn/SignIn'
import LandingPage from './pages/LandingPage/landingPage'
import { Routes, Route } from "react-router-dom"
import DonorApplication from './pages/DonorPages/DonorApplication'
import DonorCatalog from './pages//DonorPages/DonorCatalog'
import DonorProfile from './pages/DonorPages/DonorProfile'
import Footer from './components/Footer/Footer'
//import AdopterApplication from './pages/AdopterApplication'
import AdopterProfile from './pages/AdopterProfile'
import AdopterProf from './pages/AdopterProf'
import DonorProfilePage from './pages/DonorProfilePage'
import AdopterApplication2 from './pages/AdopterPages/AdopterApplication'
import ClinicCatalog from './pages/ClinicPages/ClinicCatalog'
import { useEffect, useState } from 'react'
import { supabase } from './config/config'
import { useAuth } from './contexts/AuthContext'

const App = () => {
  const [session, setSession] = useState(null)
  const [userInfo, setUserInfo] = useState([]);
  
  const AuthContext=useAuth()
  const userId = AuthContext.userID

  const [user, setUser] = useState(null);

  {/*useEffect(() => {
    const fetchUser = async () => {
      try {
        
    const { data: { user } } = await supabase.auth.getUser()
        setUser(user);
        if (user) {
          const { data, error } = await supabase
            .from('users')
            .select('tag')
            .eq('id', user.id);

          if (error) {
            throw error;
          }
          setUserInfo(data);
        }
        console.log(userInfo)
      } catch (error) {
        console.error('Error fetching user:', error.message);
      }
    };

    fetchUser();
  }, []); */}

  console.log(userId)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    
    <div className='App'>
      <ChakraProvider>
        <Routes>
          <Route path='/landing' element={<LandingPage/>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/clinics" element={<ClinicCatalog/>}></Route>
          <Route path="/donors" element={<DonorCatalog/>}></Route>
          <Route path="/donors/:id" element={<DonorProfile/>}></Route>
          <Route path="/donorapplication" element={<DonorApplication/>}></Route>
          <Route path='/newadopterapplication' element={<AdopterApplication2/>}></Route>
          <Route path="/adopters" element={<AdopterProfile/>}></Route>
          <Route path="/test" element={<AdopterProf/>}></Route>
          <Route path="donorprofilepage" element={<DonorProfilePage/>}></Route>
          {/*} <Route path="/Genesis/adminlogin" element={<Signup/>}></Route>
        <Route path="/Genesis/transactions" element={<Signup/>}></Route>
        <Route path="/Genesis/signup" element={<Signup/>}></Route> */}
        </Routes>
        
      </ChakraProvider>
    </div>
  )
}

export default App
