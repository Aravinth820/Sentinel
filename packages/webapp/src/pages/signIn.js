import React from 'react'
import SignInRoute from '../../../uicomponents/components/SignIn/signIn';
import AmplifySignIn from '../components/RoutePages/SignIn/AmplifySignIn';

const SignInPage = ({ location }) => {
//  console.log("location.state",location.state)
  const { from } = location.state ? location.state : {};

  return <div ><AmplifySignIn from={from} /></div>
}

export default SignInPage
