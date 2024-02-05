import React, { createContext, useEffect ,} from 'react'
import { useState } from 'react'
import app from '../firebase.config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signOut } from "firebase/auth";
const auth =getAuth(app)
export  const AuthProviders = createContext()
const AuthContext = ({children}) => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const verifyEmail =()=>{
      return sendEmailVerification(auth.currentUser)

    }
    const passwordReset = (email)=>{
      return sendPasswordResetEmail(auth,email)
    }
    const logOut = ()=>{
      return signOut(auth)
  }
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)

      })
      return (()=>{
        unSubscribe()
      })
    },[])
    const authInfo ={loading, user,createUser,login,verifyEmail,passwordReset,logOut}
  return (
    <AuthProviders.Provider value={authInfo}>
      {children}
    </AuthProviders.Provider>
  )
}

export default AuthContext
