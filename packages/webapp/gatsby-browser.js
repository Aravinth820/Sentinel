/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */
// You can delete this file if you're not using it

import { AmplifyConfig } from "../apiIntegration/ConfigApi/AmplifyConfig";
import Amplify, { Hub } from '@aws-amplify/core'
import {ConfigKeys} from '../apiIntegration/ConfigApi/ConfigKeys'
import CgateAppShell from "./src/components/AppShell/GlobalAppShell";
import { authConfiguredEventListener } from './src/components/RoutePages/SignIn/AmplifyAuthListeners'
import RootWrapper from "./src/components/AppShell/RootWrapper";

let WebSocketConnection = {
    domain: process.env.REACT_APP_WEBSOCKET_API_URL
}

const jobApiConfig = {
    aws_http_Endpoint: process.env.JOB_API,
    aws_user_files_s3_bucket: process.env.REACT_APP_JOB_API_S3_BUCKET,
    ecc_party_ids_s3_bucket: process.env.REACT_APP_JOB_API_ECC_PARTYID_S3_BUCKET,
  }

let awsAuthConfig = {
    aws_project_region: process.env.REACT_APP_PROJECT_REGION,
    aws_cognito_identity_pool_id: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
    aws_cognito_region: process.env.REACT_APP_COGNITO_REGION,
    aws_user_pools_id: process.env.REACT_APP_USER_POOLS_ID,
    aws_user_pools_web_client_id: process.env.REACT_APP_USER_POOLS_WEB_CLIENT_ID,
  }

  const masterApiConfig = {
    aws_http_Endpoint: process.env.MASTER_API,
  }

AmplifyConfig.addConfig(
    ConfigKeys.WEBSOCKET_CONNECTION_API,WebSocketConnection
)

AmplifyConfig.addConfig(ConfigKeys.AUTH, awsAuthConfig)

AmplifyConfig.addConfig(ConfigKeys.JOB_API, jobApiConfig)

AmplifyConfig.addConfig(ConfigKeys.MASTER_API, masterApiConfig)

export const onClientEntry = () => {
    Hub.listen('auth', authConfiguredEventListener)
    let cfg = Amplify.configure(awsAuthConfig)
    console.log('Amplify: ', cfg)
  }
  

export const wrapRootElement=RootWrapper
export const wrapPageElement=CgateAppShell