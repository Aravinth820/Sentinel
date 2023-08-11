import * as React from "react"

import CgateAppShell from "../components/AppShell/GlobalAppShell"


const NotFoundPage = () => (
  <CgateAppShell>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </CgateAppShell>
)

//export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage