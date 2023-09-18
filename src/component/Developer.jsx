import React from "react";
import Admin from '../assets/metalekan.jpg';


const Developer = () => {



  return (

    <main className="min-h-screen grid place-content-center grid-cols-1 xl:grid-cols-[1.5fr_1fr] mx-[1rem] md:mx-[4rem] animate__animated animate__zoomIn">
      <div className="md:max-w-[650px] flex flex-col gap-8 justify-center">
        <div className="admin__card flex flex-col items-center justify-center h-[380px] md:h-[520px] xl:h-[150px]">
          <img className="rounded-full xl:hidden border-2 border-[#9B7EDA] w-[160px] h-[160px] self-center z-20 Admin hover:scale-125 duration-300 mb-8" src={Admin} alt="Admin" loading="lazy" />
          <h1 className="text-xl text-gradient">John Adesiyan</h1>
          <h2 className="text-md text-gradient">Frontend Developer</h2>
        </div>
        <p className="text-sm md:text-md text-center xl:text-start leading-5">
          Welcome to the digital realm of innovation and creativity! <br /> My name is John Adesiyan your frontend developer. I specialize in crafting visually mesmerizing and functionally impeccable websites that not only leave a lasting impression but also drive results. <br /> Join me on this journey through the ever-evolving landscape of web development, where design meets technology, and together, we'll make your online presence truly shine. Let's build something remarkable!
        </p>
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
