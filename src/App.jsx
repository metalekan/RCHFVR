import React, { createContext, useState } from 'react';

import Header from './component/Header';
import Developer from './component/Developer'
import Tools from './component/Tools'
import Projects from './component/Projects'
import Contact from './component/Contact'

export const ProjectContext = createContext();

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <ProjectContext.Provider value={{toggle, setToggle}}>
      <div className="flex flex-col bg-deepurple text-center">
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