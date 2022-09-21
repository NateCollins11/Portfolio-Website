import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'


export const MainLayout = ({children}) => {
  return (
    // <div className=' font-lato w-full bg-gradient-to-b from-purple-4 via-[#c1b8dc] to-[#cec7e5] p-4'>
        <div className='w-full min-h-screen flex flex-col justify-start bg-gradient-to-r from-[#4f3f43e4] to-[#cfbbc7e4] '>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    // </div>
  )
}
