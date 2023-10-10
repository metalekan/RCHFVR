import React from 'react'
import { myTools } from '../..';

const Tools = () => {

  return (
    <section className='min-h-screen relative grid place-content-center mx-[1rem] md:mx-[4rem] my-[8rem] font-roboto text-offWhite'>
      <div className="absolute z-[0] translate-x-[-50%] translate-y-[-50%] top-0 left-[50%] w-[30%] h-[30%] rounded-full blue__gradient" />
      <h1 className='my-[3rem] text-[2.5rem] md:text-[3rem] text-center gradient-text-1 font-bold font-geologica z-40'>Tools</h1>
      <div className="grid grid-cols-1 gap-10 xl:gap-12 xl:grid-cols-2 xl:place-content-center">
        <p className='self-center text-sm leading-5 z-40'>
          I harnessed a powerful stack of cutting-edge technologies to ensure a seamless user experience. HTML and CSS formed the foundation of our frontend. JavaScript brought interactivity and dynamic functionality to the site, enhancing user engagement. For data storage and real-time updates, Firebase proved indispensable, enabling efficient data management and synchronization. <br /> <br />
          On the backend, Node.js ensured robust server-side operations, while React, with its component-based architecture, facilitated a modular and maintainable codebase. To expedite frontend design and streamline development, I utilized both Tailwind CSS and Bootstrap, allowing for rapid prototyping and polished UI. This diverse tech stack not only empowered us to create a feature-rich website but also ensured its scalability and performance.
        </p>
        <div className="language grid grid-cols-3 gap-3 md:py-10 py-8 shadow-2xl">
          {
            myTools.map((lang) => (
              <div key={lang.id} className="flex flex-col items-center lang hover:shadow-xl p-2 rounded-2xl">
                <img src={lang.img} className='hover:scale-125 duration-300 w-[35px] h-[35px] md:h-[50px] md:w-[50px]' alt={lang.language} />
                <span className='text-[12px] md:text-sm text-[#9ca3af]'>{lang.language}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className="text-center mt-[6rem] md:mt-[9rem]">
        <button className="btn__glow interact-button">Learn More</button>
      </div>

    </section>
  )
}

export default Tools