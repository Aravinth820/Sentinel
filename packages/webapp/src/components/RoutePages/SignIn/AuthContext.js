import React from 'react'
import Auth from '@aws-amplify/auth'

const authState = {
    isUserSignedIn: false,
    signOut: async () => { await Auth.signOut() },
    username: "",
    attributes: {}
}


export const initialAppAuthState = {
    state: { ...authState },
    get: function () {
        return this.state
    },
    set: function (userInfo) {
        this.state = { ...this.state, ...userInfo }
    },
}

export const AuthContext = React.createContext(authState)