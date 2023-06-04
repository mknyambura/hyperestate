import React from 'react'

function Header() {
  return (
    <div className='flex flex-row justify-between text-white px-24 py-24'>
        <h1 className='font-bold text-2xl uppercase'>Hyperesrate</h1>
        <div className='flex flex-row gap-8 font-extralight text-sm'>
            <h1 className='hover:underline hover:cursor-pointer'>Property</h1>
            <h1 className='hover:underline hover:cursor-pointer'>Services</h1>
            <h1 className='hover:underline hover:cursor-pointer'>Product</h1>
            <h1 className='hover:underline hover:cursor-pointer'>About Us</h1>
        </div>
        <button className='bg-white rounded-none px-5 py-2 font-bold'>Contact</button>
    </div>
  )
}

export default Header