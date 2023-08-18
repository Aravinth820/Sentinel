// React imports
import React, { useEffect, useState } from 'react'
//import PropTypes from 'prop-types'

// gatsby imports

//Amplify imports
import { Hub, Logger } from '@aws-amplify/core'
import Auth from '@aws-amplify/auth'
// My utilities
import {
    SignInUserActivityListener,
} from '../RoutePages/SignIn/AmplifyAuthListeners'
import { AuthContext, initialAppAuthState } from '../RoutePages/SignIn/AuthContext'
// My API components

const AppRoot = ({ children }) => {
    const initAuthState = initialAppAuthState.get()
    const [authState, setAuthState] = useState(initAuthState ? initAuthState : {})
    const logger = new Logger('AppRoot Logger')

    const handleSignIn = data => {
        console.log('Sign in: ', data)
        Auth.currentAuthenticatedUser()
            .then(user => {
                console.log("user logged in " + user);
                const { username, attributes } = user
                setAuthState({ ...authState, isUserSignedIn: true, username, attributes })
            })
            .catch(err => {
                logger.error('Error setting authenticated user info', err)
            })
    }

    const handleSignOut = data => {
        console.log('Sign out: ', data)
        setAuthState({ ...authState, isUserSignedIn: false, username: "", attributes: {} })
    }

    const handleSignInFailure = data => {
        console.log('Sign in failure : ', data)
    }

    const listenerObj = new SignInUserActivityListener(
        handleSignIn,
        handleSignOut,
        handleSignInFailure
    )

    const signInUserActivityListener = listenerObj.listener

    useEffect(() => {


        try {
            Hub.remove('auth', signInUserActivityListener)
        } catch (err) {
            console.log(err)
        }
        Hub.listen('auth', signInUserActivityListener)

        return function cleanup() {
            // component is destroying, remove auth event subscriptions
            Hub.remove('auth', signInUserActivityListener)
        }
    })

    return (
        <AuthContext.Provider value={{ ...authState }}>{children}</AuthContext.Provider>
    )
}

export default AppRoot