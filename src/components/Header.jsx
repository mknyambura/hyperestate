import React from 'react'

function Header() {
  return (
    <div className='flex flex-row justify-between text-white px-12 py-12'>
        <h1 className='font-bold text-2xl uppercase'>Hyperestate</h1>
        <div className='flex flex-row gap-8 font-extralight text-sm'>
            <h1 className='hover:underline hover:cursor-pointer'>Property</h1>
            <h1 className='hover:underline hover:cursor-pointer'>Services</h1>
            <h1 className='hover:underline hover:cursor-pointer'>Product</h1>
            <h1 className='hover:underline hover:cursor-pointer'>About Us</h1>
        </div>
        <button className='bg-white rounded-md px-5 py-2 font-bold text-black hover:bg-black hover:text-[#FF3F3F]'>Contact</button>
    </div>
  )
}

export default Header