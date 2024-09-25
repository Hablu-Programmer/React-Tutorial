import React, {memo, useState} from "react";


// child component 
const Child = memo(({count}) => {
    console.log("child component is rendering");

  return  <p>Count: {count}</p>
})


// parent component 

const Parent = ()=> {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("")
console.log("parent is rendering")
   const CountHandle = ()=> {
    setCount(count)
   }
    return (
        <>
            <div>
                <Child count={count} />
                <button className="btn bg-indigo-500" onClick={CountHandle}>Increment</button>
                <p> Name: {name}</p>
                <input className="border border-green-500" type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            </div>
        </>
    )
}

export default Parent