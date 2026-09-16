import './App.css'
import { useState, useEffect } from "react";

import Navbar from './components/Navbar'
import Home from './components/Home'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <Home />
      <Education />
      <Projects />
      <Contact />
    </>
  )
}

export default App;