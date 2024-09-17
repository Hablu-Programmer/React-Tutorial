import { useState } from "react"

function StyleExample(){
    const [IsActive, setIsActive] =  useState(true)

    const Activity = ()=> {
        setIsActive(!IsActive)
    }
    return(
        <>
            <button className={IsActive ? "Btn-Active" : "Btn-InActive"} onClick={Activity}>
                {IsActive ? "Active Button" : "Button Deactive"}
            </button>
        </>
    )
}

export default StyleExample ; 