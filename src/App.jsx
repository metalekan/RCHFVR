import React, { useState } from 'react';

import world from './assets/worldcoin.png';

import Developer from './component/Developer'
import Tools from './component/Tools'
import Projects from './component/Projects'
import Contact from './component/Contact'


const languages = [
  {
    id: 1,
    language: "JavaScript",
    img: "https://img.icons8.com/color/480/javascript--v1.png"
  },
  {
    id: 2,
    language: "CSS",
    img: "https://img.icons8.com/color/480/css3.png"
  },
  {
    id: 3,
    language: "Bootstrap",
    img: "https://img.icons8.com/color/480/bootstrap.png"
  },
  {
    id: 4,
    language: "Firebase",
    img: "https://img.icons8.com/color/480/google-firebase-console.png"
  },
  {
    id: 5,
    language: "GIT",
    img: "https://img.icons8.com/color/480/git.png"
  },
  {
    id: 6,
    language: "HTML",
    img: "https://img.icons8.com/color/480/html-5--v1.png"
  },
  {
    id: 7,
    language: "Tailwind",
    img: "https://img.icons8.com/color/480/tailwindcss.png"
  },
  {
    id: 8,
    language: "Node JS",
    img: "https://img.icons8.com/fluency/480/node-js.png"
  },
  {
    id: 9,
    language: "React",
    img: "https://img.icons8.com/color/480/react-native.png"
  },
];


const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container mx-auto">
      <header className="sticky top-0 z-50">
        <nav className="glass px-[1rem] md:px-[2rem] py-2 flex justify-between items-center backdrop-blur-[15px]">
          <div className="flex md:gap-2 gap-1 items-center">
            <h3 className="font-Cursive tracking-[4px] text-[1.75rem] md:text-[2.5rem]">Metalekan</h3>
            <img src={world} className='w-[40px] h-[40px] md:w-[70px] md:h-[70px]' />
          </div>

          <ul className="menu hidden md:flex lg:gap-[4rem] gap-[2rem] text-lg">
            <li><a href="">Home</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="https://drive.google.com/file/d/1U9KK6Fhf5sVpXokq0BlpZ52Hh5bw1GPk/view?usp=drivesdk"
              target="_blank">Resume</a></li>
            <li><a href="contact">Contact Me</a></li>
          </ul>

          <ul className={`${toggle ? "grid" : "hidden"} md:hidden mobile-menu h-screen w-full place-content-center gap-[4rem] text-center text-[1.1rem] z-[20] fixed top-0 right-0 rounded-tl-lg animate__animated animate__slideInRight`}>
            <li><a className="hover:font-extrabold" href="/">Home</a></li>
            <li><a className="hover:font-extrabold" onClick={() => setToggle(prevToggle => !prevToggle)} href="#project">Projects</a></li>
            <li><a className="hover:font-extrabold"
              href="https://drive.google.com/file/d/1U9KK6Fhf5sVpXokq0BlpZ52Hh5bw1GPk/view?usp=drivesdk" target='_blank'>Resume</a>
            </li>
            <li><a className="hover:font-extrabold" onClick={() => setToggle(prevToggle => !prevToggle)} href="#contact">Contact Me</a></li>
          </ul>
          <label class="hamburger md:hidden z-50">
            <input onClick={() => setToggle(prevToggle => !prevToggle)} type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path class="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </nav>
      </header>
      <Developer />
      <Tools item={language} />
      <Projects stack={languages} />
      <Contact />
    </div>
  )
}

export default App