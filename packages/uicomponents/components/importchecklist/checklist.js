import React,{useRef} from 'react'
import initiateWebSockets from '../../../apiIntegration/WebSocket/initiateWebSocket'
import TextFields from '../../inputs/TextField'

function checklist(props) {
    const { jobId } = props
    const [isWebSocketAlive, setIsWebSocketAlive] = React.useState(false)
    const [serverId, setServerId] = React.useState("")

    const USER_ID = "User-1"


    let ws = useRef(null);
    React.useEffect(() => {
        if (!ws.current) {
            initiateWebSockets(ws, jobId, setIsWebSocketAlive, setServerId, USER_ID)
        }
        //!NOTE return a callback function that closes the websocket and also the event bus listeners
    }, [])
   const propData = { ws, jobId, isWebSocketAlive, fieldKey: "jobNo", userId: USER_ID }
  return (
    <div>
        <TextFields placeholder={"jobno"} propData={propData}  variant="standard"                              
                                />
    </div>
  )
}

export default checklist
