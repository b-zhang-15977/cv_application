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
  })

  const [education, setEducation] = useState([
    {
      school: "School Name",
      title: "Degree/Diploma",
      date: "****-****",
      details: [
        "graduated with honors..."
      ],
    }, 
    {
      school: "School Name",
      title: "Degree/Diploma",
      date: "****-****",
      details: [
        "graduated with honors..."
      ],
    },
  ])

  return (
    <>
      <General info={generalInfo} setInfo={setGeneralInfo} />
      <Education info={education} setInfo={setEducation} />
      <Experience />
    </>
  )
}

export default App
