import { useState } from "react"

function MyState(){
    const [Mydata, setDate]  = useState(0); // returns [currentState, setState]
    

    const DateChange = ()=> {
        setDate(Mydata + 1)
    }

    return(
        <>
            <p>{Mydata}</p>
            <button onClick={DateChange}>Count</button>
        </>
    )
}

export default MyState; 