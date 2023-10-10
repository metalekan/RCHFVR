import React, { createContext, useState, useEffect } from "react";

import Header from "./component/Header";
import Developer from "./component/Developer";
import Tools from "./component/Tools";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

export const ProjectContext = createContext();

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [engineStart, setEngineStart] = useState(false);

  useEffect(() => {
    setTimeout(() => { setEngineStart(true) }, 3000)
  }, [])
  
  return (
    <ProjectContext.Provider value={{ toggle, setToggle }}>
      <div className="flex flex-col bg-deepurple items-center justify-center text-center min-h-screen">
      <div className={engineStart ? 'hidden' : 'loader'}></div>
        <div className={engineStart ? 'flex flex-col' : 'hidden'}>
          <Header />
          <Developer />
          <Tools />
          <Projects />
          <Contact />
        </div>
      </div>
    </ProjectContext.Provider>
  );
};

export default App;
