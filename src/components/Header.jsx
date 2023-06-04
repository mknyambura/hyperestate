import React from 'react'

function Header() {
  return (
    <div className='flex flex-rowtext-white'>
        <h1 className='font-bold text-2xl uppercase'>Hypeesrate</h1>
        <div className='flex flex-row gap-8 font-extralight text-sm'>
            <h1>Property</h1>
            <h1>Services</h1>
            <h1>Product</h1>
            <h1>Aboyt Us</h1>
        </div>
        <button className='bg-white rounded-none px-5 py-2 font-bold'>Contact</button>
    </div>
  )
}

export default Header