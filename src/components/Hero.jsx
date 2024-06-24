import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../style';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5'>
        <div className='flex flex-col justify-center items-center sm:ml-10 ml-2'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Sahil</span></h1>
          <p>I am a Full Stack Web Developer.</p>
          Currently, pursuing Btech at COEP | CSE.
          <br /><br />
          <p className='text-[#a488e2]'>Designer | Developer</p>
          <br />
          <div className='flex sm:flex-row gap-5 '>
          <a className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-yellow-500' href="https://www.instagram.com/msahil_28?igsh=cHloNjJnYjQydGZi" target='_blank'>Instagram</a>&nbsp;|
          <a className='text-[#6262f8]' href="">Linkedin</a>&nbsp;|
          <a href="https://github.com/sahilmalawde" target='_blank'>GitHub</a>
          </div>
          

        </div>
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center
      items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary
          flex justify-center items-start'>
           <motion.div
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
      
    </section>
  )
}

export default Hero