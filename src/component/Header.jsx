import React, { useState } from 'react'
import world from '../assets/worldcoin.png';

import { IoMdClose, IoMdMenu } from 'react-icons/io'


const Header = () => {
    const [toggle, setToggle] = useState(false);


    return (
        <header className="sticky top-0 z-50">
            <nav className="glass px-[1rem] md:px-[2rem] py-2 flex justify-between items-center">
                <div className="flex items-center">
                    <h3 className="font-header tracking-[4px] text-lg md:text-[2.5rem]">Metalekan</h3>
                    <img src={world} className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]' />
                </div>

                <ul className="menu hidden xl:flex lg:gap-[4rem] gap-[2rem] text-md">
                    <li><a href="/">Home</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="https://drive.google.com/file/d/1U9KK6Fhf5sVpXokq0BlpZ52Hh5bw1GPk/view?usp=drivesdk"
                        target="_blank">Resume</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>

                <ul className={`${toggle ? "grid" : "hidden"} xl:hidden mobile__menu menu h-screen w-full place-content-center gap-[4rem] text-center text-md z-[20] fixed top-0 right-0 rounded-tl-lg animate__animated animate__slideInLeft`}>
                    <li><a className="" href="/">Home</a></li>
                    <li><a className="" onClick={() => setToggle(prevToggle => !prevToggle)} href="#project">Projects</a></li>
                    <li><a className=""
                        href="https://drive.google.com/file/d/1U9KK6Fhf5sVpXokq0BlpZ52Hh5bw1GPk/view?usp=drivesdk" target='_blank'>Resume</a>
                    </li>
                    <li><a className="" onClick={() => setToggle(prevToggle => !prevToggle)} href="#contact">Contact Me</a></li>
                </ul>
                {
                    toggle ? <IoMdClose onClick={() => setToggle(prevToggle => !prevToggle)} className='text-[2rem] hover:scale-125 duration-300 md:hidden z-50' /> : <IoMdMenu onClick={() => setToggle(prevToggle => !prevToggle)} className='text-[2rem] hover:scale-125 md:hidden z-50' />
                }

            </nav>
        </header>

    )
}

export default Header