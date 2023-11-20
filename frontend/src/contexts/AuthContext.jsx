import React, { useState } from 'react';
//import { useNavigate } from 'react-router';
import { createContext, useContext } from 'react';
import { supabase } from '../utils/supabaseConfig'; // Import Supabase instance

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    //const navigate = useNavigate();
    const [user, setUser] = useState();

  const handleLogin = async (email, password) => {
    //e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw error;
      }
      setUser(user);
      //navigate('/')
      //console.log(userData.password);
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

 /* change business logic 
 const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  }; */

  const authContextValue = {
    user,
    //handleLogin
    login: handleLogin,
    //logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
