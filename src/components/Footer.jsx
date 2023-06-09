import React from 'react'

function Footer() {
  return (
    <div className='text-white flex flex-col bg-black px-24 py-12 gap-8'>
        <div className='bg-slate-400 h-[1px] mt-16 mb-16'></div>
        <div className='flex flex-row justify-between'>
            <h1 className='font-bold text-2xl uppercase'>Hyperestate</h1>
            <div className='flex flex-row gap-8'>
                <h1 className='hover:underline text-[15px] font-extralight hover:cursor-pointer text-white/70 hover:text-white transition-all duration-500'>Home</h1>
                <h1 className='hover:underline text-[15px] font-extralight hover:cursor-pointer text-white/70 hover:text-white transition-all duration-500'>About</h1>
                <h1 className='hover:underline text-[15px] font-extralight hover:cursor-pointer text-white/70 hover:text-white transition-all duration-500'>Service</h1>
                <h1 className='hover:underline text-[15px] font-extralight hover:cursor-pointer text-white/70 hover:text-white transition-all duration-500'>Portfolio</h1>
                <h1 className='hover:underline text-[15px] font-extralight hover:cursor-pointer text-white/70 hover:text-white transition-all duration-500'>Blog</h1>
                <h1 className='hover:underline text-[15px] font-extralight hover:cursor-pointer text-white/70 hover:text-white transition-all duration-500'>Contact</h1>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <h1 className='text-sm opacity-70'>Copyright © 2023 Mercy Faith Nyambura Kariuki . All Rights Reseved.</h1>
        </div>
    </div>
  )
}

export default Footer