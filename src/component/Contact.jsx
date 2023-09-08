import React from 'react'


import { IoMdMail } from 'react-icons/io';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';






const Contact = () => {
  return (
    <section id='contact' className='min-h-screen grid place-content-center relative mx-[1rem] md:mx-[4rem]'>
      <h1 className='my-[3rem] text-[2.5rem] md:text-[3rem] text-center gradient-text-1 font-bold z-40'>Get in Touch</h1>
      <p className='mb-4 text-[14px] leading-8 md:text-[18px] text-center z-40'>
        I am always open to new opportunities, lets build something! From simple landing pages to huge projects, freelance jobs, etc. <br />
        And Yes, I am available to serve you with maximum satisfaction and if you have other requests or questions,
        please by all means slide in below. <br />
      </p>
      <div className="z-10 flex justify-center gap-9 my-[5rem]">
        <a href="https://github.com/Metalekan" className=''><TbBrandGithubFilled className='text-[40px] hover:scale-125 ease-linear duration-300' /></a>
        <a href="https://www.linkedin.com/in/lekan-adesiyan-346495270" className=''><AiFillLinkedin className='text-[40px] hover:scale-125 ease-linear duration-300' /></a>
        <a href="https://twitter.com/metalekan" className=''><AiOutlineTwitter className='text-[40px] hover:scale-125 ease-linear duration-300' /></a>
        <a href="mailto:adelekanadesiyan@gmail.com" className=''><IoMdMail className='text-[40px] hover:scale-125 ease-linear duration-300' /></a>
      </div>
      <footer>
      <div className="absolute bottom-0 z-10 translate-x-[-50%] translate-y-[-50%] left-[50%] text-center">
        <p className='text-[10px]'>Designed and built by Metalekan. <br /> <span>{new Date().getFullYear()}</span></p>
        
      </div>
    </footer>
    <div className="absolute z-[0] w-[40%] h-[35%] translate-x-[-50%] translate-y-[-50%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[85%] bottom-40 rounded-full white__gradient" />
      <div className="absolute z-[0] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[50%] bottom-20 blue__gradient" />
    </section>
  )
}

export default Contact