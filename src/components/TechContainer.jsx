import React from 'react';
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { fadeIn } from "../utils/motion";

const TechContainer = ({ icon, index }) => {
  return (
    <Tilt>
        <motion.div 
            className='w-20 h-20 flex rounded-full items-center justify-center relative bg-primary cursor-pointer'
            variants={fadeIn("right", "spring", 0.2 * index, 0.75)}
            whileHover={{ scale: 1.2, rotate: 360 }}
        >
            <div className='absolute -inset-0.5 bg-gradient-to-r from-white-100 to-purple-600 shadow rounded-full blur opacity-75'></div>
            <img 
                src={icon}
                alt='tech'
                className='w-16 h-16 object-contain relative rounded-full'
            />
        </motion.div>
    </Tilt>
  )
}

export default TechContainer