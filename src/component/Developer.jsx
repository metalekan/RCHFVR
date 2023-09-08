import React from "react";
import Admin from '../assets/IMG_2744.jpeg';


const Developer = () => {



  return (

    <main className="min-h-screen grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] mx-[1rem] md:mx-[4rem] animate__animated animate__fadeIn">
      <div className="xl:w-[650px] flex flex-col xl:justify-center pt-[2rem] md:pt-[10rem] xl:pt-[0]">

        <div className="xl:text-start text-center">
          <div className="admin__card flex flex-col justify-center py-6 md:py-0 md:ps-4 md:text-center h-[380px] xl:h-[180px]">
            <img className="rounded-full xl:hidden border-2 border-[#9B7EDA] w-[160px] h-[160px] self-center z-20 Admin hover:scale-125 duration-300 mb-8" src={Admin} alt="Admin" loading="lazy" />
            <h1 className="text-[2rem] md:text-[4rem] text-gradient">John Adesiyan</h1>
            <h2 className="text-[1rem] md:text-[2rem] text-gradient">Frontend Developer</h2>
          </div>
          <div className="mb-[6rem] md:mb-[0rem]">
            <p className="mt-8 text-[14px] xl:text-start text-center leading-8 md:text-[18px]">Hi friends, as a developer I enjoy building web apps using the right and latest frontend frameworks/libraries which gives dynamic user experience.</p>
            <p className="text-[14px] xl:text-start text-center leading-8 md:text-[18px]"> I stay on top of changes in the state of the art so i can meet challenges with tools well suited to the job at hand. I've gathered significant experience over the years working for freelance clients around the globe, I have met and learnt from amazing and great people. </p>
          </div>

        </div>

      </div>

      <div className="relative hidden mx-auto xl:grid xl:self-center rounded-full w-[300px] h-[300px]">
        <img className="rounded-full border-8 border-[#9B7EDA] z-20 Admin" src={Admin} alt="Admin" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[85%] bottom-40 rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 blue__gradient" />
      </div>

    </main>

  );
};

export default Developer;
