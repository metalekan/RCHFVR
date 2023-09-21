import React from "react";
import admin from '../assets/metalekan_ai1.jpg';


const Developer = () => {

  return (

    <main className="min-h-screen mx-[1rem] md:mx-[4rem] flex items-center justify-center font-geologica text-offWhite">
      <div className="grid md:grid-cols-[1.5fr_1fr] animate__animated animate__zoomIn w-full">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="admin_card flex flex-col items-center justify-center py-10 w-full">
            <img className="glow w-[50%] rounded-full xl:hidden border-4 border-[#9B7EDA] self-center z-20 hover:scale-125 duration-300 mb-8" src={admin} alt="admin" loading="lazy" />
            <h1 className="text-xl font-bold text-gradient">John Adesiyan</h1>
            <h2 className="text-md text-gradient">Frontend Developer</h2>
          </div>
          <p className="text-sm md:text-md text-center xl:text-start leading-5">
            Welcome to the digital realm of innovation and creativity! <br /> My name is John Adesiyan your frontend developer. I specialize in crafting visually mesmerizing and functionally impeccable websites that not only leave a lasting impression but also drive results. <br /> Join me on this journey through the ever-evolving landscape of web development, where design meets technology, and together, we'll make your online presence truly shine. Let's build something remarkable!
          </p>
        </div>

        <div className="hidden xl:block place-self-center rounded-full w-[70%] relative">
          <img className="glow rounded-full border-2 border-[#9B7EDA] z-20" src={admin} alt="admin" />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[85%] bottom-40 rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 blue__gradient" />
        </div>

      </div>

    </main>

  );
};

export default Developer;
