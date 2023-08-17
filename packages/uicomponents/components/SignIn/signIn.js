import React from 'react'
function SignInRoute(props) {
  const [username,setUsername]=React.useState("")
  const [password,setPassword]=React.useState("")
  return (
    <div>
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
        <br/>
        <input type="text"onChange={(e)=>{setPassword(e.target.value)}} />
        <button type="submit" onClick={()=>{props.signIn(username, password)}}>Sumbit</button> 
 </div>
  )
}

export default SignInRoute
