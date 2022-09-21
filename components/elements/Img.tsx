import Image from 'next/image'
import React from 'react'

export const Img = ({src, className}) => {
  return (
    <div className={className + 'overflow-hidden'}>
        <Image src='/prof.png' layout='responsive' width="100%" height="100%" alt=''/>
    </div>
  )
}
