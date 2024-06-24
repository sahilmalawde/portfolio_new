import React from 'react'
import { styles } from '../style'
import { motion } from 'framer-motion'
import { textVariant,slideIn,staggerContainer } from '../utils/motion'

const Education = () => {
  return (
    <motion.section 
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport = {{ once:true,amount:0.25}}
    className='relative w-full h-screen mx-auto' id='education'>
      <motion.div 
      variants= {textVariant()}
      className='absolute inset-0 sm:top-[70px] top-5 max-w-7xl mx-auto'>
      <h1 className={styles.sectionSubText}>What have I learnt</h1>

      <h1 className= {`${styles.sectionHeadText} `}> <span className='text-[#ffffff] ml-4'>Education</span></h1>
      <div className='flex flex-col sm:flex-row items-center w-full sm:h-[10vh] justify-center mt-[10vh]' >
        <div className=' hidden sm:flex flex-col  justify-center h-[200px] w-[300px] border-solid border-blue-200 border-2 rounded-2xl shadow-[0px_10px_1px_#6ff7e5ef,_0_10px_20px_#6ff7e5ef] px-5  transform transition duration-500 
                                hover:scale-110'>
        <h1 className= {`${styles.heroSubText} `}>2022-23</h1>
          <p>CBSE Class XII</p>
          <p className='text-red-400'>97.4% (Eng PCM AI)</p>
        </div>
      </div>

      <div className=' hidden sm:flex flex-col sm:flex-row  items-center w-full sm:h-[30vh] justify-center' >
      
      <div className='w-10 h-10 rounded-full bg-[#e460d9] hover:shadow-[0_1px_50px_rgba(240,_50,_160,_1)]' />
      <div 
            className='sm:h-3 sm:w-80 h-60 w-3 sm:bg-gradient-to-r from-[#e460d9] to-[#6ff7e5ef] bg-gradient-to-b '/>
        <div className='w-10 h-10 rounded-full bg-[#6ff7e5ef] hover:shadow-[0_1px_50px_#6ff7e5ef]'/>  
        <div 
            className='sm:h-3 sm:w-80 h-60 w-3 sm:bg-gradient-to-r from-[#6ff7e5ef] to-[#f4ec82ef] bg-gradient-to-b '/>
        <div className='w-10 h-10 rounded-full bg-[#f4ec82ef] hover:shadow-[0_1px_60px_#f4ec82ef]'/>
      </div>
      <div className='flex flex-col sm:flex-row sm:gap-0 gap-5  items-center w-full sm:h-[10vh] justify-around ' >
        <div className='flex flex-col  justify-center h-[200px] w-[300px] border-solid border-pink-400 border-2 rounded-2xl shadow-[0px_10px_1px_#e460d9,_0_10px_20px_#e460d9] px-5  transform transition duration-500 
                                hover:scale-110'>
          <h1 className= {`${styles.heroSubText} `}>2020-21</h1>
          <p>CBSE Class X</p>
          <p className='text-red-400'>97.8%</p>
        </div>

        <div className=' flex sm:hidden flex-col  justify-center h-[200px] w-[300px] border-solid border-blue-200 border-2 rounded-2xl shadow-[0px_10px_1px_#6ff7e5ef,_0_10px_20px_#6ff7e5ef] px-5  transform transition duration-500 
                                hover:scale-110'>
        <h1 className= {`${styles.heroSubText} `}>2022-23</h1>
          <p>CBSE Class XII</p>
          <p className='text-red-400'>97.4%(Eng PCM AI)</p>
        </div>
        
        <div className=' flex flex-col justify-center h-[200px] w-[300px] border-solid border-yellow-200 border-2 rounded-2xl shadow-[0px_10px_1px_#f4ec82ef,_0_10px_20px_#f4ec82ef] px-5  transform transition duration-500 
                                hover:scale-110'>
        <h1 className= {`${styles.heroSubText} `}>2023- <i>present</i></h1>
          <p>COEP CSE</p>
          <p className='text-red-400'>Btech</p>
        </div>
      </div>
      </motion.div>
      <div className='hidden absolute xs:bottom-10 bottom-32 w-full sm:flex sm:justify-end sm: pr-[100px]
      items-center'>
        <a href="#tech">
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
    </motion.section>
  )
}

export default Education