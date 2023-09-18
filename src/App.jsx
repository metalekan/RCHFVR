import React from 'react';

import Header from './component/Header';
import Developer from './component/Developer'
import Tools from './component/Tools'
import Projects from './component/Projects'
import Contact from './component/Contact'


const languages = [
  {
    id: 1,
    language: "JavaScript",
    img: "https://img.icons8.com/color/480/javascript--v1.png"
  },
  {
    id: 2,
    language: "CSS",
    img: "https://img.icons8.com/color/480/css3.png"
  },
  {
    id: 3,
    language: "Bootstrap",
    img: "https://img.icons8.com/color/480/bootstrap.png"
  },
  {
    id: 4,
    language: "Firebase",
    img: "https://img.icons8.com/color/480/google-firebase-console.png"
  },
  {
    id: 5,
    language: "GIT",
    img: "https://img.icons8.com/color/480/git.png"
  },
  {
    id: 6,
    language: "HTML",
    img: "https://img.icons8.com/color/480/html-5--v1.png"
  },
  {
    id: 7,
    language: "Tailwind",
    img: "https://img.icons8.com/color/480/tailwindcss.png"
  },
  {
    id: 8,
    language: "Node JS",
    img: "https://img.icons8.com/fluency/480/node-js.png"
  },
  {
    id: 9,
    language: "React",
    img: "https://img.icons8.com/color/480/react-native.png"
  },
];


const App = () => {

  return (
    <div className="container mx-auto">
      <Header />
      <Developer />
      <Tools item={languages} />
      <Projects stack={languages} />
      <Contact />
    </div>
  )
}

export default App