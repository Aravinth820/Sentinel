// React imports
import React from 'react'


// gatsby imports

//Amplify imports

// Core function imports

// API components imports
import AppRoot from './AppRoot'

const RootWrapper = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  return (
      <AppRoot>{element}</AppRoot>

  )
}

export default RootWrapper
