import React from 'react'

function Balance({balance}) {
  return (
    <>
        <div className='text-center'>
            <h2 className='text-lg'>Your Balance</h2>
            <h3 className='font-bold text-2xl'>{balance}</h3>
            
        </div>
    </>
  )
}

export default Balance