import React from 'react'
import { myProjects } from '../..'

const Projects = () => {
  return (
    <section id='project' className='min-h-screen grid place-content-center mx-[1rem] md:mx-[4rem] my-[8rem] font-geologica text-offWhite'>
      <div>
        <h1 className='my-[3rem] text-[2.5rem] md:text-[3rem] text-center font-bold gradient-text-1'>Projects</h1>
        <p className='text-sm md:text-md font-thin text-center xl:text-start leading-5'>
          A collection of captivating websites that span a spectrum of industries and purposes. From sleek e-commerce platforms to interactive forums and stunning personal showcases, this list showcases my versatility as a frontend developer. <br />
          These projects represent just a glimpse of what's possible when innovation meets technology. Each one embodies my passion for creating captivating and functional websites that leave a lasting impact.
        </p>
      </div>
      <div className="project grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-4 md:gap-2 xl:gap-6 my-[5rem]">
        {
          myProjects ? myProjects.map((project) => (
            <div className="card rounded-xl p-1" key={project.id}>
              <img className='rounded-xl' loading='lazy' src={project.image} alt={project.title} />

              <div className="card__content grid justify-between">
                <h3 className="card__title font-bold text-md gradient-text-0">{project.title}</h3>
                <p className="card__description text-[12px]">{project.details}</p>
                <div className="flex gap-2">
                  <a href={project.url} target="_blank" className="card__button bg-[#059669] w-[80px] h-[35px] md:h-[40px] flex items-center justify-center rounded-lg text-[12px]">Link</a>
                  <a href={project.github} target="_blank" className="card__button secondary border-2 border-[#059669] w-[80px] h-[35px] md:h-[40px] flex items-center justify-center rounded-lg text-[12px]">Github</a>
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                  <div className="p-1 flex items-center gap-1">
                    {
                      project.tech.map((tech) => <span className='px-2 py-1 langs rounded-md text-[10px]' key={tech.length}>{tech}</span>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          )) : <div className="spinner">
            <div className="spinner1"></div>
          </div>
        }
      </div>
    </section >
  )
}

export default Projects