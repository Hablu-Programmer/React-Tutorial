import { useState } from "react"
import Greetings from "./Greeting"

function Login(){
    const [IsLoggedIn, SetLoggedIn] = useState(true)

    return (
        <>
        
            <Greetings IsLogin ={IsLoggedIn}  /> 
        </>
    )
}

export default Login; 