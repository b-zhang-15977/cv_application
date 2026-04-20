import { useState } from 'react'
import General from "./components/General"
import Education from "./components/Education"
import Experience from "./components/Experience"
import './App.css'

function App() {
  const [generalInfo, setGeneralInfo] = useState({ 
      name: "john doe",
      title: "placeholder",
      description: "Lorem ipsum dolor...",
      email: "placeholder@email.com",
      phone: "123-456-7890",
  });

  return (
    <>
      <General info={generalInfo} setInfo={setGeneralInfo} />
      <Education />
      <Experience />
    </>
  )
}

export default App
