import React from 'react'

import Header from './Header'
import Footer from './Footer'

import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import building from '../assets/building.png'
import house1 from '../assets/house1.png'
import house2 from '../assets/house2.png'
import house3 from '../assets/house3.png'
import paypal from '../assets/paypal.png'
import webflow from '../assets/webflow.png'
import google from '../assets/google.png'
import amazon from '../assets/amazon.png'
import adobe from '../assets/adobe.png'
import SquareFeet from '../assets/SquareFeet.png'
import Bed from '../assets/bed.png'

import { AiOutlinePlus } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import { GiBathtub } from 'react-icons/gi'



function Home() {
  return (
    <div>
        <div>
            <Header/>
            <div>
                <div className='relative'>
                    <div className='relative flex flex-col'>
                        <div className='flex flex-row justify-between h-[500px]'>
                            <h1 className='font-bold text-6xl'>Popular Residents</h1>
                            <button className='text-sm'>
                                Explore All
                                <BsArrowRight className='text-xl'/>
                            </button>
                        </div>

                        <div className='bg-black px-16 py-[250px] gap-8 text-white '>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col gap-4'>
                                    <h1 className='font-bold text-3xl'>John Doe</h1>
                                    <h1 className='font-extralight opacity-70'>Founder of HyperEstate</h1>
                                </div>
                                <p className='w-1/2 items-center'>
                                    <span className='text-8xl font-bold'>"</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Magnam atque laudantium eaque debitis placeat quos rerum a beatae tempore amet fugit consequatur porro, veritatis, quam eligendi tenetur, quod quasi accusantium?
                                    <span className='text-8xl font-bold'>"</span>
                                </p>
                            </div>
                            <div className='bg-slate-400 h-[1px] mb-16 mt-16'></div>
                            <div className='flex flex-row justify-evenly '>
                                <img src={paypal} alt="" />
                                <img src={webflow} alt="" />
                                <img src={google} alt="" />
                                <img src={amazon} alt="" />
                                <img src={adobe} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between absolute top-[10%] m-16 gap-8'>
                        <div className='rounded-md bg-white flex flex-col gap-4 shadow-xl shadow-black/20'>
                            <img src={house1} alt="" />
                            <div className='flex flex-col gap-4 px-8 py-8'>
                                <h1 className='font-bold text-xl'>$ 59,345</h1>
                                <h1 className='font-semibold'>Home in downtom, Los Angles</h1>
                                <div className='h-[1px] bg-black'></div>
                                <div className='flex flex-row justify-evenly'>
                                    <button disabled="disabled" className='px-3 py-2 border border-slate-200 rounded-md shadow-xl shadow-slate-200'>
                                        <img src={SquareFeet} alt="" />
                                        2500 sqft
                                    </button>
                                    <button disabled="disabled" className='px-3 py-2 border border-slate-200 rounded-md shadow-xl shadow-slate-200'>
                                        <img src={Bed} alt="" />
                                        3
                                    </button>
                                    <button disabled="disabled" className='px-3 py-2 border border-slate-200 rounded-md shadow-xl shadow-slate-200'>
                                        <GiBathtub/>
                                        2
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='rounded-md bg-white flex flex-col gap-4  shadow-xl shadow-black/20'>
                            <img src={house2} alt="" />
                            <div className='flex flex-col gap-4 px-8 py-8'>
                                <h1 className='font-bold text-xl'>$ 79,345</h1>
                                <h1 className='font-semibold'>Modern Loft in San Francisco, CA</h1>
                                <div className='h-[1px] bg-black'></div>
                                <div className='flex flex-row justify-evenly'>
                                    <button disabled="disabled" className='px-3 py-2 border border-slate-200 rounded-md shadow-xl shadow-slate-200'>
                                        <img src={SquareFeet} alt="" />
                                        2500 sqft
                                    </button>
                                    <button disabled="disabled" className='px-3 py-2 border border-slate-200 rounded-md shadow-xl shadow-slate-200'>
                                        <img src={Bed} alt="" />
                                        3
                                    </button>
                                    <button disabled="disabled" className='px-3 py-2 border border-slate-200 rounded-md shadow-xl shadow-slate-200'>
                                        <GiBathtub/>
                                        2
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='rounded-md bg-white flex flex-col gap-4 shadow-xl shadow-black/20'>
                            <img src={house3} alt="" />
                            <div className='flex flex-col gap-4 px-8 py-8'>
                                <h1 className='font-bold text-xl'>$ 53,542</h1>
                                <h1 className='font-semibold'>Homeapartment Downtom, San Diego</h1>
                                <div className='h-[1px] bg-black'></div>
                                <div className='flex flex-row justify-evenly'>
                                    <button disabled="disabled" className='px-3 py-2 border border-slate-200 rounded-md shadow-xl shadow-slate-200'>
                                        <img src={SquareFeet} alt="" />
                                        2500 sqft
                                    </button>
                                    <button disabled="disabled" className='px-3 py-2 border border-slate-200 rounded-md shadow-xl shadow-slate-200'>
                                        <img src={Bed} alt="" />
                                        3
                                    </button>
                                    <button disabled="disabled" className='px-3 py-2 border border-slate-200 rounded-md shadow-xl shadow-slate-200'>
                                        <GiBathtub/>
                                        2
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row px-12 py-12 items-center justify-between'>
                    <img src={building} alt="" width={500}/>
                    
                    <div className='flex flex-col gap-8'>
                        <h1 className='font-bold text-6xl'>Value We Give To You</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quod odit porro velit aperiam, temporibus officia minima eligendi, similique possimus illum pariatur unde? 
                            Consequuntur magnam qui adipisci accusantium enim minima accusamus.
                        </p>
                        <div className='flex flex-col items-center gap-8'>
                            <div className='shadow-xl shadow-slate-300 flex flex-col relative w-3/4 border border-slate-100'>
                                <input type="checkbox" className='absolute peer transition-all right-4 bottom-2 h-[120px] w-full opacity-0'/>
                                <label htmlFor="" className='peer font-bold flex items-center h-[50px] mx-[20px]'>Best Interest Rates On The Market</label>
                                <div className='flex absolute right-[30px] top-[15%] rotate-0 peer-checked:rotate-45 transition-all duration-500'>
                                    <AiOutlinePlus className='text-[#FF3F3F]'/>
                                </div>
                                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                                    <p className='p-[20px] text-sm peer-checked:max-h-full'>I see Coint being a long-term part of my business structure. Not just for this business, but also our future endeavors.</p>
                                </div>
                            </div>

                            <div className='shadow-xl shadow-slate-300 flex flex-col relative w-3/4 border border-slate-100'>
                                <input type="checkbox" className='absolute peer right-4 bottom-2 h-[120px] w-full opacity-0'/>
                                <label htmlFor="" className='peer font-bold flex items-center h-[50px] mx-[20px]'>Prevent Unstable Prices</label>
                                <div className='flex absolute right-[30px] top-[15%] rotate-0 peer-checked:rotate-45 transition-all duration-500'>
                                    <AiOutlinePlus className='text-[#FF3F3F]'/>
                                </div>
                                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                                    <p className='p-[20px] text-sm peer-checked:max-h-full'>I see Coint being a long-term part of my business structure. Not just for this business, but also our future endeavors.</p>
                                </div>
                            </div>

                            <div className='shadow-xl shadow-slate-300 flex flex-col relative w-3/4 border border-slate-100'>
                                <input type="checkbox" className='absolute peer right-4 bottom-2 h-[120px] w-full opacity-0'/>
                                <label htmlFor="" className='peer font-bold flex items-center h-[50px] mx-[20px]'>Best Price On The Market</label>
                                <div className='flex absolute right-[30px] top-[15%] rotate-0 peer-checked:rotate-45 transition-all duration-500'>
                                    <AiOutlinePlus className='text-[#FF3F3F]'/>
                                </div>
                                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                                    <p className='p-[20px] text-sm peer-checked:max-h-full'>I see Coint being a long-term part of my business structure. Not just for this business, but also our future endeavors.</p>
                                </div>
                            </div>

                            <div className='shadow-xl shadow-slate-300 flex flex-col relative w-3/4 border border-slate-100'>
                                <input type="checkbox" className='absolute peer right-4 bottom-2 h-[120px] w-full opacity-0'/>
                                <label htmlFor="" className='peer font-bold flex items-center h-[50px] mx-[20px]'>Security Of Your Data</label>
                                <div className='flex absolute right-[30px] top-[15%] rotate-0 peer-checked:rotate-45 transition-all duration-500'>
                                    <AiOutlinePlus className='text-[#FF3F3F]'/>
                                </div>
                                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                                    <p className='p-[20px] text-sm peer-checked:max-h-full'>I see Coint being a long-term part of my business structure. Not just for this business, but also our future endeavors.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-12 px-12 py-12'>
                    <h1 className='font-bold text-5xl mt-8 mb-8'>Our Blogs</h1>
                    <div className='flex flex-row gap-8'>
                        <div className='flex flex-col gap-4'>
                            <img src={blog1} alt="" />
                            <div className='flex flex-col gap-4'>
                                <h1 className='opacity-50 text-sm'>19 July 2022</h1>
                                <div className='bg-white/25 w-1/2 h-[1px]'></div>
                                <h1 className='font-bold text-2xl'>Introduction To Real Estate Investing Recording</h1>
                                <button className='w-[35%] bg-[#FF3F3F] px-5 py-2 rounded-md text-white font-bold hover:bg-black '>Read More</button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <img src={blog2} alt="" />
                            <div className='flex flex-col gap-4'>
                                <h1 className='opacity-50 text-sm'>14 March 2022</h1>
                                <div className='bg-white/25 w-1/2 h-[1px]'></div>
                                <h1 className='font-bold text-2xl'>Hoe I Cretively Got Into Real Restate (Twice)</h1>
                                <button className='w-[35%] bg-[#FF3F3F] px-5 py-2 rounded-md text-white font-bold hover:bg-black '>Read More</button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <img src={blog3} alt="" />
                            <div className='flex flex-col gap-4'>
                                <h1 className='opacity-50 text-sm'>28 February 2022</h1>
                                <div className='bg-white/25 w-1/2 h-[1px]'></div>
                                <h1 className='font-bold text-2xl'>The Power Of Real Estate To Create Wealth</h1>
                                <button className='w-[35%] bg-[#FF3F3F] px-5 py-2 rounded-md text-white font-bold hover:bg-black '>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
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