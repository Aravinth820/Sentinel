import React, { useContext } from 'react'
import { navigate } from 'gatsby'
import { AuthContext } from '../RoutePages/SignIn/AuthContext'


const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const auth = useContext(AuthContext)
  if (!auth.isUserSignedIn) {
    navigate(`/signIn`, { state: { from: location.pathname } })
    return null
  }


  return <Component {...rest} />
}

export default PrivateRoute


