import React, {useRef} from "react";

const MyRef =() => {
    const InputRef = useRef(null);
    
    const ShowValue = () => {
        alert(InputRef.current.value)
    }
    return(
        <>
            <input type="text" ref={InputRef} placeholder="enter somthing..." className="border border-indigo-500" />
            <button className="btn bg-indigo-500 p-1 rounded-md" onClick={ShowValue}>Show Me</button>
        </>
    )
}

export default MyRef; 