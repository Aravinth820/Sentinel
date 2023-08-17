import { Logger } from '@aws-amplify/core'
import Auth from '@aws-amplify/auth'
import { initialAppAuthState } from './AuthContext'

export const allAuthEventsListener = data => {
    const logger = new Logger('Auth Listner Logger')

    switch (data.payload.event) {
        case 'signIn':
            logger.info('User sign-in event: ', data)
            break
        case 'signOut':
            break
        case 'signIn_failure':
            break
        case 'configured':
            Auth.currentAuthenticatedUser()
                .then(user => {
                    const { username, attributes } = user
                    initialAppAuthState.set({
                        isUserSignedIn: true,
                        username,
                        attributes,
                    })
                })
                .catch(err => {
                    logger.error('No user authenticated currently')
                    initialAppAuthState.set({
                        isUserSignedIn: false,
                    })
                })
            break
        default:
            break
    }
}

export const authConfiguredEventListener = data => {
    const logger = new Logger('Auth Listner Logger')

    switch (data.payload.event) {
        case 'configured':
            Auth.currentAuthenticatedUser()
                .then(user => {
                    const { username, attributes } = user
                    initialAppAuthState.set({
                        isUserSignedIn: true,
                        username,
                        attributes,
                    })
                })
                .catch(err => {
                    logger.error('No user authenticated currently')
                    initialAppAuthState.set({
                        isUserSignedIn: false,
                    })
                })
            break
        default:
            break
    }
}

export const signInUserActivityListener = (
    data,
    onPostSignIn,
    onPostSignOut,
    onPostSignOutFailure
) => {
    const logger = new Logger('Auth Listner Logger')

    switch (data.payload.event) {
        case 'signIn':
            logger.info('User sign-in event: ', data)
            onPostSignIn(data)
            break
        case 'signOut':
            onPostSignOut(data)
            break
        case 'signIn_failure':
            onPostSignOutFailure(data)
            break
        default:
            break
    }
}

export function SignInUserActivityListener(
    onPostSignIn,
    onPostSignOut,
    onPostSignOutFailure
) {
    this.onPostSignIn = onPostSignIn
    this.onPostSignOut = onPostSignOut
    this.onPostSignOutFailure = onPostSignOutFailure

    this.listener = function (data) {
        const logger = new Logger('Auth Listner Logger')

        switch (data.payload.event) {
            case 'signIn':
                logger.info('User sign-in event: ', data)
                //navigate('/app/home')
                //onPostSignIn()
                onPostSignIn(data)
                break
            case 'signOut':
                onPostSignOut(data)
                break
            case 'signIn_failure':
                onPostSignOutFailure(data)
                break
            default:
                break
        }
    }
}
