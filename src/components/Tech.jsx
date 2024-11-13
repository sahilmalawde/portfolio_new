import React from 'react'
import { motion } from 'framer-motion'
import { firebase,python,css,html,javascript,nodejs,reactjs,tailwind,mongodb,figma,git,sql } from '../assets'
import { styles } from '../style'

const Tech = () => {
  return (
    <section className='relative w-full h-screen mx-auto xs:mt-10' id='tech'> 
      <div className='absolute inset-0 sm:top-[70px] top-5 w-full mx-0 flex flex-col overflow-hidden '>
        <h1 className={`${styles.sectionSubText} ml-5`}>Coding Experience</h1>
        <h1 className= {`${styles.sectionHeadText} ml-5`}> <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-400 to-orange-200 animate-waviy delay-calc(.1s * var(--i)) hover:animate-pulse '>Tech</span></h1>
        <p className={`${styles.sectionSubText} ml-5`}>I am a Javascript developer and particulary use MERN stack. <br /> I also have knowledge of other stacks and know SQL,firebase,python as well.</p>
        <div className='flex items-center justify-between w-full ml-8 mt-24 animate-slide-rev px-10 hover:animate-pulse'>
          <img src={html} alt=""  className='h-[100px] w-[100px] '/>
          <img src={css} alt=""  className='h-[100px] w-[100px] '/>
          <img src={javascript} alt=""  className='h-[100px] w-[100px] '/>
          <img src={tailwind} alt=""  className='h-[100px] w-[100px] '/>
          <img src={git} alt=""  className='h-[100px] w-[100px] '/>
          <img src={figma} alt=""  className='h-[100px] w-[100px] '/>
        </div>
        <div className='flex items-center justify-between ml-8 mt-5 animate-slide-rev2 px-10 hover:animate-pulse'>
          <img src={reactjs} alt="" className='h-[100px] w-[100px] ' />
          <img src={mongodb} alt=""  className='h-[100px] w-[100px] ' />
          <img src={nodejs} alt=""  className='h-[100px] w-[100px] '/>
          <img src={sql} alt=""  className='h-[100px] w-[100px] '/>
          <img src={python} alt=""  className='h-[100px] w-[100px] '/>
          <img src={firebase} alt=""  className='h-[100px] w-[100px] '/>
        </div>
        
      </div>
      


    </section>
  )
}

export default Tech