import React from 'react'
import { createContext,useState, useContext } from 'react'

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);
    const [password, setpassword] = useState(null)

    const login =(user,password) =>{
        setuser(user);
        setpassword(password);
    }

    const logOut = ()=>{
        setuser(null);
        setpassword(null);
    }
  return (
    <AuthContext.Provider value={{user,password, login, logOut}}>{children}</AuthContext.Provider>
  )
}

export const useAuth = ()=>{
   return useContext(AuthContext);
}

export default AuthProvider