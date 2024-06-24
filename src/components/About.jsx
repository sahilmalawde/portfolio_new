import React from 'react'
import { styles } from '../style'
import {dp} from '../assets'
import { motion, useScroll } from "framer-motion"
import { slideIn,staggerContainer } from '../utils/motion';


const About = () => {
  return (
    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport = {{ once:true,amount:0.25}} 
     id='about' className='relative w-full h-screen mx-auto'>
      <div className='absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-row-reverse items-start gap-5'>
      <div className='flex flex-col justify-center items-center sm:ml-10 ml-2'>
          <div className='w-5 h-5 rounded-full bg-[#6ffc6f]'/>
          <motion.div 
            className='w-1 h-80  bg-gradient-to-b from-[#6ffc6f] to-green-150'/>
        </div>
        <div className='flex sm:flex-row-reverse flex-col-reverse gap-12'>
        <div className='flex flex-col items-end'>
          <motion.h1
          variants={slideIn('right','tween',0.2,1)} className={styles.sectionSubText}>Who am I?</motion.h1>
          <h1 className= {`${styles.heroHeadText} `}> <span className='text-[#6ffc6f]'>About</span></h1>
          <img src={dp} alt="" className='block sm:hidden w-[100px] h-[100px] rounded-full object-cover  mt-4 '/>

          <motion.p 
          variants={slideIn('up','tween',0.5,2)}
          className='mx-7 mt-6 text-right'>
            I am Sahil Malawde. I am currently in 2nd year at COEP Tech. <br />
            I am a passionate Web developer and manage both front as well as backend. <br />
            I have spent a lot of time to enhance my coding in MERN stack. <br />
            I also have interest in UI/UX designing and am learning technologies like three js and figma.
            <br />Along with these webdev techs I also have coding expeience of python and c++.
          </motion.p>
          </div>
          <motion.img 
          variants={slideIn('left','tween','0.5','2')}
           
           transition = {{
            duration: 10,
            repeat : Infinity,
            repeatType : 'loop'
           }} src={dp} alt="" className='hidden sm:block w-[300px] h-[300px] rounded-full object-cover border-solid border-8 border-green-400 '/>

        </div>
      </div>
      <div className='hidden absolute xs:bottom-10 bottom-32 w-full sm:flex justify-center
      items-center'>
        <a href="#education">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary
          flex justify-center items-start'>
           <motion.dev
           animate = {{
            y:[0,34,0]
           }} 
           transition = {{
            duration: 1.5,
            repeat : Infinity,
            repeatType : 'loop'
           }}
           className="w-3 h-3 rounded-full bg-secondary mb-0"/>
          </div>
        </a>

      </div>
    </motion.section>
  )
}

export default About