import { useState } from "react"

function OnChange(){
       const [Messsage, setMessage] = useState("please write something in the input field"); 

       const handleChange = (e)=> {
         setMessage(e.target.value)
       }
    return(
        <>
            <h3>{Messsage}</h3>
            <input type="text" onChange={handleChange} />
        </>
    )
}


export default OnChange