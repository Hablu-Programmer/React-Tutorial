import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    let Navigate = useNavigate()
   const handleClick = () => {
    Navigate("/")
    }
  return (
    <div>
        <h1 className='mt-[150px] text-center'>This Page Is Not exist, Please Return Home</h1>

       <div className='w-full'>
       <button className='btn bg-indigo-500 p-2 rounded-md text-white mx-auto block' onClick={handleClick}>Back Home</button>
       </div>
    </div>
  )
}

export default Error