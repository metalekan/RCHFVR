import React from 'react'

import { IoMdMail } from 'react-icons/io';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';


const Contact = () => {
  return (
    <section id='contact' className='min-h-screen grid place-content-center relative mx-[1rem] md:mx-[4rem] font-roboto text-offWhite'>
      <h1 className='my-[3rem] text-[2.5rem] md:text-[3rem] text-center gradient-text-1 font-bold font-geologica z-40'>Get in Touch</h1>
      <p className='text-sm md:text-md font-thin md:font-normal leading-5 text-center z-40'>
        Feel free to get in touch with me if you have any questions, project ideas, or collaboration opportunities. I'm always excited to discuss innovative ways to enhance user experiences through frontend development. <br />Let's create visually engaging and user-friendly websites together!
      </p>
      <div className="z-10 flex justify-center gap-9 my-[5rem]">
        <a target="_blank" href="https://github.com/metalekan"><TbBrandGithubFilled className='text-[40px] hover:scale-125 hover:text-cyan ease-linear duration-300' /></a>
        <a target="_blank" href="https://www.linkedin.com/in/lekan-adesiyan-346495270"><AiFillLinkedin className='text-[40px] hover:scale-125 hover:text-cyan ease-linear duration-300' /></a>
        <a target="_blank" href="https://twitter.com/metalekan"><AiOutlineTwitter className='text-[40px] hover:scale-125 hover:text-cyan ease-linear duration-300' /></a>
        <a target="_blank" href="mailto:adelekanadesiyan@gmail.com"><IoMdMail className='text-[40px] hover:scale-125 hover:text-cyan ease-linear duration-300' /></a>
      </div>
      <footer>
        <div className="absolute bottom-0 z-10 translate-x-[-50%] translate-y-[-50%] left-[50%] text-center">
          <p className='text-[10px]'>Designed and built by Metalekan. <br /> <span>{new Date().getFullYear()}</span></p>

        </div>
      </footer>
      {/* <div className="absolute z-[0] w-[40%] h-[35%] translate-x-[-50%] translate-y-[-50%] top-0 pink__gradient" /> */}
      <div className="absolute z-[1] w-[80%] h-[85%] bottom-40 rounded-full white__gradient" />
      <div className="absolute z-[0] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[50%] bottom-20 blue__gradient" />
    </section>
  )
}

export default Contact