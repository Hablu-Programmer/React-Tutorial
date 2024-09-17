import { useState } from "react";

function DynamicStyle(){
    const [isActive, setIsActive] = useState(true);

    const Style = {
        backgroundColor: isActive ? "green" : "red", // dynamic style 
        color:"white",
        padding:"10px",
        borderRadius:"5px",
        cursor:"pointer"
    }

    const Activity = ()=> {
        setIsActive(!isActive)
    }
    
    return(
        <>
            <button style={Style} onClick={Activity}>
                {isActive ? "Active" : "InActive"}
            </button>
        </>
    )
}

export default DynamicStyle; 