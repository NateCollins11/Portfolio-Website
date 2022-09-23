import { MotionConfig, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import { StyleSelect } from '../elements/StyleSelect'

export const Navbar = () => {
    const router = useRouter()
    const navItems = [
        {
            label: 'About',
            link: '/'
        },
        {
            label: 'Projects',
            link: '/projects'
        },
        {
            label: 'Resumé',
            link: '/resume'
        },
        
        {
            label: 'Contact',
            link: '/contact'
        }
    ]

    const navButtonVariants = {
        hoverState: {y: 2, color: '#42262de4'}
    }

  return (
    <div className='w-full h-24 flex justify-between items-end pb-4  bg-gradient-to-r from-[#4f3f43e4] to-[#cfbbc7e4] px-16 pt-4 '>
        <StyleSelect/>
        <div>
        {navItems.map((n, i)=>{
            return(
                <button key={n.label} className=' text-lg text-gray-1 font-light' onClick={()=>router.push(n.link)}>
                    <motion.div className={`px-4 mx-4 pb-2 `}
                    whileHover='hoverState'
                    transition={{ duration: 0.2 }}
                    variants={navButtonVariants}
                    >
                        {n.label}
                    </motion.div>
                </button>
                
            )
        })}
        </div>
    </div>
  )
}
