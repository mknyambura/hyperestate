import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <div>
            <Header/>
            <div>
                <div className='bg-black flex flex-col gap-8 items-center text-white py-24'>
                    <h1 className='font-bold text-5xl'>Ready to get started?</h1>
                    <h1 className='font-semibold opacity-70'>To Join the worldwide community</h1>
                    <div className='relative flex items-center'>
                        <input type="email" className='text-black px-5 py-3 w-[500px] border-none outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-transparent rounded-md bg-white' placeholder='Enter Your Email'/>
                        <div className='absolute right-1'>
                            <button className='px-5 py-2 bg-[#FF3F3F] hover:bg-black transition-all duration-500 font-bold rounded-md'>Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home