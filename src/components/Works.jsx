import React from 'react'
import { styles } from '../style'
import {chat,lms,spotify } from '../assets'


const Works = () => {
  return (
    <section className='relative w-full sm:h-screen h-[150vh] mx-auto' id='work'> 
      <div className='absolute inset-0 sm:top-[70px] top-5 w-full mx-0 flex flex-col overflow-hidden sm:items-end'>
        <h1 className= {`${styles.sectionHeadText} mr-5`}> <span>Projects</span></h1>
        <p className={`${styles.sectionSubText} mr-5 mt-8`}>This is my work! Check it out.</p>
        <p className={`${styles.sectionSubText} mr-5`}>Hackathons | Individual projects | open src</p>
        <div className='absolute bottom-48 hidden sm:flex w-full  mt-8 justify-evenly items-center pb-9'>
          <div className={`absolute left-0 w-[25vw] h-[50vh] ml-24 bg-gradient-to-b from-white to-black rounded-3xl`}>
            <p className={`${styles.heroSubText} text-pink-700 mx-5 mt-8`}>Books4COEP</p>
            <p className={`${styles.heroSubText} text-black-200 mx-5`}>Library Management Software</p>
            <br /><br />
            <p className={`${styles.sectionSubText} text-black-200 mx-5`}>This software was made in COEP Hackathon 2024 by our team. It uses javascript + firebase for the backend.</p>
          </div>
          
          <div className='absolute left-0 w-[25vw] h-[50vh] bg-slate-100 ml-24 hover:opacity-[0.2] hover:scale-105 transition ease-out delay-150 rounded-3xl'>
            <img src={lms} alt="" className='object-contain w-[25vw] h-[50vh] rounded-3xl'/>
          </div>
          
          <div className='absolute w-[25vw] h-[50vh] bg-gradient-to-b from-white  to-black rounded-3xl'>
          <p className={`${styles.heroSubText} text-green-700 mx-5 mt-8`}>Spotify-Clone</p>
            <p className={`${styles.heroSubText} text-black-200 mx-5`}>Your Customised Music Player</p>
            <br /><br />
            <p className={`${styles.sectionSubText} text-black-200 mx-5`}>Simple Fronted based software having elegant designs and excellent experience</p>
          </div>
          <div className='absolute w-[25vw] h-[50vh]  hover:opacity-[0.2] hover:scale-105 transition ease-out delay-150 rounded-3xl'>
            <img src={spotify} alt="" className='object-cover w-[25vw] h-[50vh] rounded-3xl'/>
          </div>
          <div className='absolute right-0 w-[25vw] h-[50vh] bg-gradient-to-b from-white to-black mr-24 rounded-lg'>
          <p className={`${styles.heroSubText} text-blue-700 mx-5 mt-8`}>VChat</p>
            <p className={`${styles.heroSubText} text-black-200 mx-5`}>Group Chatting Software</p>
            <br /><br />
            <p className={`${styles.sectionSubText} text-black-200 mx-5`}>Seamless chatting Experience, a react-firebase based application. Create Groups and Chat!</p>
          </div>
          <div className='absolute right-0 w-[25vw] h-[50vh]  hover:opacity-[0.2] hover:scale-105 transition ease-out delay-150 mr-24 rounded-3xl flex'>
            <img src={chat} alt="" className='rounded-3xl object-cover object-top items-center w-[25vw] h-[50vh] '/>
          </div>
        </div>
        <div className='flex sm:hidden flex-col gap-10 items-center'>
        <div className={`absolute w-[80vw] h-[30vh] mt-5  bg-gradient-to-b from-white to-black rounded-3xl`}>
            <p className={`${styles.heroSubText} text-pink-700 mx-5 mt-8`}>Books4COEP</p>
            <p className={`${styles.heroSubText} text-black-200 mx-5`}>Library Management Software</p>
            <br /><br />
            <p className={`${styles.sectionSubText} text-black-200 mx-5`}>This software was made in COEP Hackathon 2024 by our team. It uses javascript + firebase for the backend.</p>
          </div>
          <div className='absolute w-[80vw] h-[30vh] bg-slate-100 mt-5 hover:opacity-[0.2] hover:scale-105 transition ease-out delay-150 rounded-3xl'>
            <img src={lms} alt="" className='object-contain w-[80vw] h-[30vh] rounded-3xl'/>
          </div>
          <div className='absolute w-[80vw] h-[30vh] mt-80 bg-gradient-to-b from-white  to-black rounded-3xl'>
          <p className={`${styles.heroSubText} text-green-700 mx-5 mt-8`}>Spotify-Clone</p>
            <p className={`${styles.heroSubText} text-black-200 mx-5`}>Your Customised Music Player</p>
            <br /><br />
            <p className={`${styles.sectionSubText} text-black-200 mx-5`}>Simple Fronted based software having elegant designs and excellent experience</p>
          </div>
          <div className='absolute w-[80vw] h-[30vh] mt-80 hover:opacity-[0.2] hover:scale-105 transition ease-out delay-150 rounded-3xl'>
            <img src={spotify} alt="" className='object-cover w-[80vw] h-[30vh] rounded-3xl'/>
          </div>
          <div className='absolute  w-[80vw] h-[30vh] mt-[40rem] bg-gradient-to-b from-white to-black  rounded-lg'>
          <p className={`${styles.heroSubText} text-blue-700 mx-5 mt-8`}>VChat</p>
            <p className={`${styles.heroSubText} text-black-200 mx-5`}>Group Chatting Software</p>
            <br /><br />
            <p className={`${styles.sectionSubText} text-black-200 mx-5`}>Seamless chatting Experience, a react-firebase based application. Create Groups and Chat!</p>
          </div>
          <div className='absolute  w-[80vw] h-[30vh] mt-[40rem]  hover:opacity-[0.2] hover:scale-105 transition ease-out delay-150  rounded-3xl flex'>
            <img src={chat} alt="" className='rounded-3xl object-cover object-top items-center w-[80vw] h-[30vh] '/>
          </div>


        </div>
        
      </div>
      


    </section>
  )
}

export default Works