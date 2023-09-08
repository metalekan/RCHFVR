import React from 'react'






const Tools = ({ item }) => {


  return (
    <section className='relative grid place-content-center min-h-screen mx-[1rem] md:mx-[4rem]'>
      <div className="absolute z-[0] translate-x-[-50%] translate-y-[-50%] top-0 left-[50%] w-[60%] h-[60%] rounded-full blue__gradient" />
      <h1 className='my-[3rem] text-[2.5rem] md:text-[3rem] text-center gradient-text-1 font-bold z-40'>Tools</h1>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:place-content-center">
        <div className="self-center">
          <p className='mb-8 text-[14px] leading-8 md:text-[18px] text-center md:text-start z-40'>
            My primary stack includes Javascript (React on the front-end). I have listed some of the
            languages/tools I have used or still use below (not really including frameworks).
          </p>
          <p className='text-[14px] leading-8 md:text-[18px] text-center md:text-start'>
            A small gallery of some things i've built mainly with HTML, CSS, JavaScript, Tailwindcss, React.js, firebase etc. Ranging from fully functional webapps to landing pages and websites. There's more from where these came.
          </p>
        </div>
        <div className="language grid grid-cols-3 gap-3 md:py-4 py-3 shadow-2xl">
          {
            item.map((lang) => (
              <div key={lang.id} className="flex flex-col items-center lang hover:shadow-xl p-2 rounded-2xl">
                <img src={lang.img} className='hover:scale-125 duration-300 w-[40px] md:h-[80px] md:w-[50px] h-[50px]' alt={lang.language} />
                <span className='text-[13px] md:text-[18px] text-[#9ca3af]'>{lang.language}</span>
              </div>
            ))
          }

        </div>
      </div>
      <div className="flex justify-center mt-[4rem]">
        <button className="btn__glow">Learn More</button>
      </div>

    </section>
  )
}

export default Tools