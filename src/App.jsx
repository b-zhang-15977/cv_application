import { useState } from 'react'
import General from "./components/General"
import Education from "./components/Education"
import Experience from "./components/Experience"
import './App.css'

function App() {

  /*
   * States for general sections
   */
  const [general, setGeneral] = useState({ 
    name: "john doe",
    title: "placeholder",
    description: "Lorem ipsum dolor...",
    email: "placeholder@email.com",
    phone: "123-456-7890",
  })
  const [editGeneral, setEditGeneral] = useState(false);

  /*
   * States for education section
   */
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
  const [editEducation, setEditEducation] = useState(false);

  /*
   * States for experience section
   */
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
  const [editExperience, setEditExperience] = useState(false);

  /*
   * Edit functions
   */
  const toggleGeneralEdit = () => setEditGeneral(prev => !prev);
  const toggleEducationEdit = () => setEditEducation(prev => !prev);
  const toggleExperienceEdit = () => setEditExperience(prev => !prev);

  return (
    <>
      <General 
        info={general} 
        setInfo={setGeneral} 
        editMode={editGeneral}
        editToggle={toggleGeneralEdit} 
      />
      <Education 
        info={education}
        setInfo={setEducation}
        editMode={editEducation}
        editToggle={toggleEducationEdit}
      />
      <Experience 
        info={experience}
        setInfo={setExperience}
        editMode={editExperience}
        editToggle={toggleExperienceEdit}
      />
    </>
  )
}

export default App
