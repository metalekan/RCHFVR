import React from 'react'
import projectData from '../..';


const Projects = () => {


  return (
    <section className='min-h-screen grid place-content-center my-[6rem] mx-[rem] md:mx-[4rem]'>
      <div className="px-[1rem]">
        <h1 className='my-[3rem] text-[2.5rem] md:text-[3rem] text-center font-bold gradient-text-1'>Projects</h1>
        <p className='mb-4 text-[14px] leading-8 md:text-[18px] text-center md:text-start'>
          My primary stack includes Javascript (React on the front-end). I have listed some of the
          languages/tools I have used or still use below (not really including frameworks).
        </p>
        <p className='mb-8 text-[14px] leading-8 md:text-[18px] text-center md:text-start'>
          A small gallery of some things i've built mainly with HTML, CSS, JavaScript, Tailwindcss, React.js, firebase, NodeJS etc. Ranging from fully functional webapps to landing pages and websites. There's more from where these came.
        </p>

      </div>
      <div id='project' className="project-cards grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 md:gap-2 gap-4 borders px-[1rem] xl:gap-9 my-[5rem] py-[2rem]">
        {
          projectData && projectData.map((project) => (
            <div className="card rounded-xl p-1" key={project.id}>
              <img className='rounded-xl' loading='lazy' src={project.image} alt={project.title} />

              <div className="card__content grid justify-between">
                <h3 className="card__title font-bold text-xl gradient-text-0">{project.title}</h3>
                <p className="card__description text-[12px]">{project.details}</p>
                <div className="flex gap-2">
                  <a href={project.url} className="card__button bg-[#059669] w-[80px] h-[35px] md:h-[40px] flex items-center justify-center rounded-lg text-[14px]">Link</a>
                  <a href={project.github} className="card__button secondary border-2 border-[#059669] w-[80px] h-[35px] md:h-[40px] flex items-center justify-center rounded-lg text-[14px]">Github</a>
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


      ))
        }
    </div>
    <div className="flex flex-col gap-10 items-center">
    <h2 className="px-[2rem] text-[14px] md:text-[18px] text-center">Let's get started with building your website solution.</h2>
    <button className='btn__glow w-fit'>Learn More</button>
    </div>
    </section >
  )
}

export default Projects