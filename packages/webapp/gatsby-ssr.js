/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */


import CgateAppShell from "./src/components/AppShell/GlobalAppShell";
import RootWrapper from "./src/components/AppShell/RootWrapper";
export const wrapRootElement=RootWrapper
export const wrapPageElement=CgateAppShell