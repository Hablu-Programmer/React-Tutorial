import React, { useReducer } from 'react'; 


function reducer(state, action){
    switch(action.type){
        case "Increment" :
            return {count: state.count + 1 }
        
        case "Decrement": 
            return {count: state.count - 1 }

        default: 
            throw new Error("The Unknown Action Type"); 
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, {count : 0});

    const Increment = ()  => {
        dispatch({type: "Increment"})
    }

    const Decrement = () => {
        dispatch({type: "Decrement"})
    }

  return (
    <>
        <p>Count: {state.count} </p>

        <button onClick={Increment} className='btn bg-indigo-600 p-2 m-2'>Increment</button>
        <button onClick={Decrement} className='btn bg-indigo-600 p-2 m-2'>Decrement</button>
    </>
  )
}

export default Counter; 