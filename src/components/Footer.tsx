import React from 'react'

import { socialLinks } from '../constants';

const Footer = () => {
  return (
    <div className='flex flex-row justify-between items-center gap-8 bg-primary p-10'>
        <p className='sm:text-[10px] text-[14px]'>&copy; Rohan, All rights reserved 2023</p>
        <div className='flex flex-row justify-between items-center'>
            {socialLinks.map((link) => (
                <div className='w-20 h-20 rounded-full flex justify-center items-center cursor-pointer' onClick={() => window.open(link.link, '_blank')}>
                    <img 
                        src={link.icon}
                        alt={link.name}
                        className='w-1/2 h-1/2 object-contain'
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Footer