import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthProviders } from '../../Providers/AuthContext'

const PrivateRoutes = ({children}) => {
  const {user,loading} = useContext(AuthProviders)
  const location = useLocation()
  if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
  }
  if(user?.email){
    return children
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default PrivateRoutes
