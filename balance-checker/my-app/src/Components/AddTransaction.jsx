import React, { useState } from 'react'

function AddTransaction({addTransaction}) {
const [text, setText] = useState("");
const [amount, setAmount] = useState(0);

const handleSubmit = (e) => {
    e.preventDefault(); 

    if(text === "" || amount === 0 ) return; 

    addTransaction({ text, amount: +amount  }); 

    setText("");
    setAmount(0)
}

  return (
    <>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
            <input type="text" value={text} placeholder='please add details'
            className='p-2 m-2 border border-indigo-500' onChange={(e) => setText(e.target.value) } />

            <input type="number" value={amount} placeholder='enter your amount' 
            className='p-2 m-2 border border-indigo-500'
            onChange={(e)=> setAmount(e.target.value) }
            />

            <button  type='submit' className='bg-blue-500 text-white p-2 rounded'>Add Amount</button>
        </form>
    </>
  )
}

export default AddTransaction