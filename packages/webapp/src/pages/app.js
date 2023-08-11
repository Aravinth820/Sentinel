import * as React from "react"
import MyJobs from "../components/RoutePages/JobPage/jobpage"
import { Router } from "@reach/router"
import PrivateRoute from "../components/PrivateRoutes/PrivateRoute"
import ImportJobDetails from "../components/RoutePages/ImportJobDetails/index"


const App = () => {
  return(
    <Router basepath="/app">
    <PrivateRoute path='/myJobs' component={MyJobs}/>
    <PrivateRoute path='/jobs/import' component={ImportJobDetails} pageTitle="ImportJobDetails" />
  
    </Router>
  )
}
export default App

