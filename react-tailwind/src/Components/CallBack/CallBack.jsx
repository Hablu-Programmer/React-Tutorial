import { useState, useCallback } from "react"; 

function MyCounter () {
    const [count,  setCount] = useState(0); 

    const Increment = useCallback(()=>{ 
        setCount((preData) => preData + 1 )
    }, [])

    const decrement = useCallback(() => {
        setCount((PreData)=> PreData - 1 )
    }, [])

    return (
        <>
            <p>Count:{count} </p>
            <button onClick={Increment} className='btn bg-indigo-600 p-2 m-2'>Increment</button>
            <button onClick={decrement} className='btn bg-indigo-600 p-2 m-2'>decrement</button>
        </>
    )
}

export default MyCounter; 