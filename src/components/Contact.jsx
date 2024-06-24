import {useState,useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import {styles} from '../style'
import {slideIn,staggerContainer,fadeIn} from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form,setForm] = useState({'name':'','email':'','msg':''});
  const [loading,setLoading] = useState(false);
  const handleChange = (e) =>{
    e.preventDefault()
    const { name,value} = e.target
    setForm({...form, [name]:value})
    
  }
  const handleSubmit = async(e) =>{
    //dyuAj_iWNdxforx4L
    //service_o6z3s5a
    //template_t99aham
    e.preventDefault();
    setLoading(true);
    await emailjs.send(
      'service_o6z3s5a',
      'template_w2lyo2f',
      {
        from_name : form.name,
        to_name: 'Sahil',
        from_email : form.email,
        to_email: 'msahil2806@gmail.com',
        message: form.msg,
      },
      'dyuAj_iWNdxforx4L'
    ).then(()=>{
      setLoading(false);
      alert('Thank You. Will revert to you shortly!');

      setForm(
        {
          'name':'',
          'email':'',
          'msg':''
        }
      )
    },(error)=>{
      setLoading(false);
      console.log(error);
      alert('something went wrong.')
    })

  }
  return (
    
    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport = {{ once:true,amount:0.25}}
   className='w-full h-[120vh] mx-auto mt-10 ' id='contact'>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse gap-10 overflow-hidden mx-10'> 
        <motion.div 
        variants={slideIn('left',"tween",0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-3xl'>
          <motion.p variants={fadeIn()} className={`${styles.sectionSubText}`}>Get in touch</motion.p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <form 
      id='myform'
      ref={formRef}
      onSubmit={handleSubmit}
      className='flex flex-col mt-12'>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
        </label>
        <input type="text" name="name" value={form.name} onChange={handleChange}
        placeholder={`What's your good name?`}
        className='bg-tertiary py-4 px-8 
        placeholder:text-secondary
        text-white rounded-lg outlined-none
        border-none font-medium' />
        <label className='flex flex-col mt-4'>
          <span className='text-white font-medium mb-4'>Your Email</span>
        </label>
        <input type="email" name="email" value={form.email} onChange={handleChange}
        placeholder={`What's your Email ID?`}
        className='bg-tertiary py-4 px-8 
        placeholder:text-secondary
        text-white rounded-lg outlined-none
        border-none font-medium' />
        <label className='flex flex-col mt-4'>
          <span className='text-white font-medium mb-4'>Your Message</span>
        </label>
        <textarea rows = "5" name="msg" value={form.msg} onChange={handleChange}
        placeholder={`Enter your message.`}
        className='bg-tertiary py-4 px-8 
        placeholder:text-secondary
        text-white rounded-lg outlined-none
        border-none font-medium' />

        <div className='flex flex-row items-center gap-5'>
        <input type="submit" onClick={handleSubmit}
        className='h-10 w-20 bg-tertiary my-8 rounded-2xl' content='Submit'/>
        {loading && <div className='w-5 h-5 rounded-full border-secondary border-4 border-dotted animate-spin' />}
        </div>

      </form>
        </motion.div>

        
      </div>

      
      
    </motion.section>
  )
}

export default Contact