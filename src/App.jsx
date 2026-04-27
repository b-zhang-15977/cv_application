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

  const [experience, setExperience] = useState([
  {
    role: "Job Title",
    company: "Company Name",
    date: "20XX – 20XX",
    details: [
      "Brief description of responsibilities or achievements",
      "Another accomplishment or task performed",
      "Optional additional detail about your role"
    ]
  },
  {
    role: "Another Job Title",
    company: "Another Company",
    date: "20XX – 20XX",
    details: [
      "Summary of duties and contributions",
      "Key achievement or project involvement",
      "Additional relevant detail"
    ]
  }
])

  return (
    <>
      <General info={generalInfo} setInfo={setGeneralInfo} />
      <Education info={education} setInfo={setEducation} />
      <Experience info={experience} setInfo={setExperience} />
    </>
  )
}

export default App
