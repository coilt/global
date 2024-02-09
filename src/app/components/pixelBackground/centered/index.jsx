import React from 'react';
import sytles from './style.module.scss';
import { motion } from 'framer-motion';

const anim = {
  initial: {
    opacity: 0
  },
  open: (i) =>( {
    opacity: 1,
    transition: {duration: 0, delay: 0.02 * i  }
  }),
  closed: (i) => ({
    opacity: 0,
    transition: {duration: 0, delay: 0.05 * i}
  }),
}

export default function index({menuIsActive}) {

// Fisher-Yates shuffle algorithm

const shuffle = (a) => {
   var j, x, i;
   for ( i=a.length - 1; i>0; i--) {
j = Math.floor(Math.random() * (i + 1));
x = a[i];
a[i] = a[j];
a[j] = x;
   }
   
     return a;
}    




  const getBlocks = () => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const amountOfBlocks = Math.ceil(innerHeight / blockSize);
    const delays = shuffle([...Array(amountOfBlocks)].map ((_, i) => i));
    return delays.map ((randomDelay, i) => {
      return (
      <motion.div 
      className={sytles.block}
      variants={anim}
      initial='initial'
      animate={menuIsActive ? 'open' : 'closed'}
      custom={randomDelay}
      >

      </motion.div>
      )
    })
  }

  return (
    <div className={sytles.pixelBackground}>
      {[...Array(40)].map( (_, i) => {
        return <div className={sytles.column}>{getBlocks()}</div>
      })}
    </div>
  )
}
