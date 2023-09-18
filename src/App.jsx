import React, { createContext, useState } from 'react';

import Header from './component/Header';
import Developer from './component/Developer'
import Tools from './component/Tools'
import Projects from './component/Projects'
import Contact from './component/Contact'



export const ProjectContext = createContext();

const App = () => {
  const [toggle, setToggle] = useState(false);
  const close = () => {
    toggle ? null : setToggle(!toggle);
  }

  return (
    <ProjectContext.Provider value={{toggle, setToggle}}>
      <div 
        className="container mx-auto bg-deepurple text-text1"
         
        >
        <Header />
        <Developer />
        <Tools />
        <Projects />
        <Contact />
      </div>
    </ProjectContext.Provider>
  )
}

export default App