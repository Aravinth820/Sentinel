
import React from 'react'
import './GlobalAppShell.css'

import SentinelAppShell from '../../../../uicomponents/components/SentinelAppShell/SentinelAppShell';

const CgateAppShell = ({ element, props }) => {
  if (props.location.pathname.match(/^\/app/)) {
 
  let items = props.location.pathname.includes("import")?'Import':props.location.pathname.includes("export")?"Export":'MyJobs'

  let storage = localStorage.setItem('items', JSON.stringify(items));
    return <SentinelAppShell   {...props} >{element}</SentinelAppShell>
  }
}


export default CgateAppShell
