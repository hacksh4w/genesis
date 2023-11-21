import { createContext, useContext, useState } from 'react';
import { supabase } from '../config/config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //const [user, setUser] = useState(null);
  const [userID, setUserID] = useState(null);
  const [userTag,setUserTag]=useState(null)

  const signIn = async (email, password, navigate, toast) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      const { data, error: userError } = await supabase
        .from('users')
       // .select('name')
        .select()
        .eq('email', email)
        .single();

      if (userError) {
        throw userError;
      }

      if (data) {
        toast({
          title: `Welcome ${data.name}`,
          status: 'success',
          isClosable: true,
          position: 'top',
        });
        setUserID(data.id);
        setUserTag(data.tag)
        navigate(`/donors`);
      }
    } catch (error) {
      console.error('Signin error:', error.message);
      toast({
        title: 'Signin Error',
        description: error.message,
        status: 'error',
        isClosable: true,
        position: 'top',
      });
    }
  };

  const value = {
    user,
    userID,
    userTag,
    signIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);