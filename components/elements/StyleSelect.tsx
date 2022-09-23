import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSurprise, faPaintRoller, faStream } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export const StyleSelect = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        if (!isOpen) setIsOpen(true)
        else setIsOpen(false)
    }

    const variants={
        hoverState: {
            borderColor: '#391c1d',
            color: '#acacac',
            width: 145,
            height: 64
        },
        openState: {
            borderColor: '#2C1515',
            color: '#acacac',
            width: 200,
            height: 260,
            backgroundColor: '#2C1515',
        },
        closedState: {
            width: 80,
            height: 64
        }
    }
    const iconVariants={
        hoverState: {
            rotate: 90
        },
        openState: {
            rotate: 180
        },
        closedState: {
            rotate: 0
        }
    }
    const listVariants={
        openState: {
            opacity: 100
        },
        closedState: {
            opacity: 0
        },
        hoverState: {
            opacity: 0
        }
    }

    const themeData = [
        {
            theme: 'Portfolio',
            className: 'bg-gradient-to-tl from-[#4f3f43e4] to-[#cfbbc7e4] text-[#2D141A]  hover:text-[#cfbbc7e4]'
        },
        {
            theme: 'Coming Soon'
        },
        {
            theme: 'Coming Soon'
        },
        {
            theme: 'Coming Soon'
        },

    ]

  return (

    <button onClick={()=>handleOpen()} className='relative h-full'>
        <motion.div
            whileHover={!isOpen ? 'hoverState' : 'openState'}
            animate={isOpen ? 'openState' : 'closedState'}
            variants={variants}
            transition = {{ duration: 0.5 }}
            className={`py-4 rounded-md border-2 border-transparent text-transparent absolute top-0 left-0 ${isOpen ? 'shadow-md shadow-gray-3 ' : ''}`}
        >
            
            <div className='flex w-full justify-between items-center text-lg px-6'>
                <motion.div
                variants={iconVariants}
                transition = {{ duration: 0.4 }}
                >
                    <FontAwesomeIcon icon={faPaintRoller} className='min-w-[22px] text-gray-8'/>
                </motion.div>
            
                <span className='ml-2 '>Themes</span>
            </div>
            <motion.div
            variants={listVariants}
            animate={isOpen ? 'openState' : 'closedState'}
            transition = {{duration: 1, delay: .4, default: { ease: "linear" }}}
            className=''
            >

            {isOpen && <div className='flex flex-col px-2 pt-4'>
                {themeData.map((t)=>{
                    return(
                        <div className={t.className + ' my-1 bg-gray-6 rounded-md w-full flex justify-center items-center h-10 '}>
                            {t.theme}
                        </div>    
                    )
                })}
            </div>}
            </motion.div>
        </motion.div>
    </button>
  )
}
