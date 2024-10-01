import React from 'react'
import MyIcon from "/src/assets/hero-img.svg"; 

export default function Hero() {
  return (
   <>
    <div className='container mx-auto'>
    <div className='flex flex-row'>
      <div className='basis-1/2'>
        <h2 className='text-5xl font-semibold mt-[150px]'>Welcome To Hablu Programmer</h2>
        <p className='w-[80%] text-xl mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquid quo accusantium illum recusandae quaerat exercitationem pariatur corrupti dolor sed quia voluptate, consectetur itaque similique iste. Tenetur dolorem nisi ea.</p>

        <button className='btn bg-indigo-500 p-2.5 rounded-md mt-2 text-white'>View Courses </button>
      </div>

      <div className='basis-1/2'>
        <img src={MyIcon} alt="" />
      </div>
    </div>
    </div>
   </>
  )
}
