/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */
// You can delete this file if you're not using it

import { AmplifyConfig } from "../apiIntegration/ConfigApi/AmplifyConfig";
import {ConfigKeys} from '../apiIntegration/ConfigApi/ConfigKeys'
import CgateAppShell from "./src/components/AppShell/GlobalAppShell";

let WebSocketConnection = {
    domain: "ws://0.0.0.0:8080"
}

AmplifyConfig.addConfig(
    ConfigKeys.WEBSOCKET_CONNECTION_API,WebSocketConnection
)




export const wrapPageElement=CgateAppShell