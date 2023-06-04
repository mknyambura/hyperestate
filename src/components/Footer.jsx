import React from 'react'

function Footer() {
  return (
    <div className='text-white flex flex-col bg-black px-24 py-24 gap-8'>
        <div className='bg-slate-400 h-[1px] mt-16 mb-16'></div>
        <div className='flex flex-row justify-between'>
            <h1 className='font-bold text-2xl uppercase'>Hyperestate</h1>
            <div className='flex flex-row'>
                <h1 className='hover:underline text-[15px] font-extralight hover:cursor-pointer text-white/70 hover:text-white'>Home</h1>
                <h1 className='hover:underline text-[15px] font-extralight hover:cursor-pointer text-white/70 hover:text-white'>About</h1>
                <h1 className='hover:underline text-[15px] font-extralight hover:cursor-pointer text-white/70 hover:text-white'>Service</h1>
                <h1 className='hover:underline text-[15px] font-extralight hover:cursor-pointer text-white/70 hover:text-white'>Portfolio</h1>
                <h1 className='hover:underline text-[15px] font-extralight hover:cursor-pointer text-white/70 hover:text-white'>Blog</h1>
                <h1 className='hover:underline text-[15px] font-extralight hover:cursor-pointer text-white/70 hover:text-white'>Contact</h1>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <h1 className='text-sm opacity-70'>Copyright © 2023 Mercy Faith Nyambura Kariuki . All Rights Reseved.</h1>
        </div>
    </div>
  )
}

export default Footer