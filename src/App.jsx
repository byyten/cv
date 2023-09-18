import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'<!DOCTYPE html>

import './App.css'

import { Candidate } from './components/candidate.jsx'
import { CV } from './components/cv.jsx'
import { Academics, Academy } from './components/academics.jsx'
import { Employment, Employ } from './components/employment.jsx'

let individual = { name: 'modmar ydobemos', phone:'021021021021', email:'ydobemos@gmail.com', location: 'erehwemos' }
let education = [
  { id: 'Erehwemos Upper School', institute: 'Erehwemos Upper School', study: 'Undergraduate studies', graduate: '2004' },
  { id: 'Erehwemos Institute Technology', institute: 'Erehwemos Institute Technology', study: 'Computer Sciences / Engineering', graduate: '2009' }
]
let employments = [{ 
    id: 'ABC Systems Algorithms Corp', 
    company: 'ABC Systems Algorithms Corp', 
    position: 'Systems Engineering Intern', 
    from: 2010, 
    to: 2012, 
    responsibilities: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt soluta, omnis odio voluptatibus saepe perspiciatis provident? Officiis, id. Quasi alias eius beatae illum architecto quo laboriosam atque odio rem.' 
  },{ 
    id: 'PlusArgent Bank', 
    company: 'PlusArgent Bank', 
    position: 'Intermediate Systems Engineer', 
    from: 2012, to: 2018, 
    responsibilities: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum doloribus voluptates iusto, consequuntur sequi, quas tempora corporis numquam sapiente necessitatibus deserunt eum quod ullam optio itaque? Nisi amet nihil voluptatem.' 
  }
]


function getFormData(evt) {
  let form = new FormData(evt.target.closest('form'))
  let inputs 
  if (form.get('institute')) {
    inputs = { 
      id: form.get('id') || form.get('institute'), 
      institute: form.get('institute'), 
      study: form.get('study'),
      graduate: form.get('graduate')
    } 
  } else if (form.get('company')) {
    inputs = { 
      id: form.get('id') || form.get('company'), //  + '_institute' + form.get('graduate'),
      company: form.get('company'), 
      position: form.get('position'),
      from: form.get('from'),
      to: form.get('to'),
      responsibilities: form.get('responsibilities')
    }
  }
  console.log(inputs)
  return inputs
}



function App() {
  //const [count, setCount] = useState(0)
  const [academics, setAcademics] = useState([])
  const [employment, setEmployment] = useState([])
  const [candidate, setCandidate] = useState({ name: '', phone:'', email:'', location: '' } ) //  { name: name, email: email, phone: phone, location: location }) // Candidate ) // 
  const curryr = new Date().getFullYear()
   
  const employRec = () => { return {id:'', company:'', position:'', from: '', to: curryr, responsibilities: '' } }
  const academicRec = () => { return {id:'', institute:'', study:'', graduate: curryr} }
  
  function importCandidate () {
    setAcademics(education)
    setEmployment(employments)
    setCandidate(individual ) //  { name: name, email: email, phone: phone, location: location }) // Candidate ) // 
  }
  function clearCandidate() {
    setAcademics([])
    setEmployment([])
    setCandidate({ name: '', phone:'', email:'', location: '' } )
  }
  console.log(employment)
  // console.log(JSON.stringify(candidate))
  function setName(name) {
      setCandidate({ ...candidate, name: name })
      // console.log(candidate)
  } 
  function setEmail(email) {
      setCandidate({ ...candidate, email: email })
      // console.log(candidate)
  } 
  function setPhone(phone) {
      setCandidate({ ...candidate, phone: phone })
      // console.log(candidate)
  } 
  function setLocation(location) {
      setCandidate({ ...candidate, location: location })
      // console.log(candidate)
  } 

  
  function handleAddAcademy(evt) {
    let academicRec = getFormData(evt)
    evt.target.closest('form').reset()
    evt.preventDefault(); 
    console.log('handleAddAcademy')
    
    let edu = [...academics, academicRec]
    console.log(JSON.stringify(edu)) // 
    // alert()
    setAcademics(edu) 
    console.log(['post add', JSON.stringify(academics)]) 
  }
  function handleUpdateAcademy(evt) {
    evt.preventDefault(); 
    console.log('handleUpdateAcademy')
    let academicRec = getFormData(evt)
    let edu = [...academics]
    let idx = edu.findIndex(ed => ed.id.toLowerCase() === academicRec.id.toLowerCase())
    edu[idx] = academicRec
    console.log([ idx, JSON.stringify(edu) ]) // 
    // alert()
    setAcademics(edu) 
    console.log(['post upd', JSON.stringify(academics)]) 
  }
  function handleDeleteAcademy(evt) {
    evt.preventDefault(); 
    console.log('handleDeleteAcademy')
    let academicRec = getFormData(evt)
    let edu = [...academics.filter(ed => ed.id.toLowerCase() !== academicRec.id.toLowerCase())]
    console.log(JSON.stringify(edu)) 
    // alert()
    setAcademics(edu) 
    console.log(['post del', JSON.stringify(academics)]) 

  }


  function handleAddEmploy(evt) {
    let employRec = getFormData(evt)
    evt.target.closest('form').reset()
    evt.preventDefault(); 
    console.log('handleAddEmploy')
    
    let edu = [...employment, employRec]
    console.log(JSON.stringify(edu)) // 
    // alert()
    setEmployment(edu) 
    console.log(['post add', JSON.stringify(employment)]) 
  }
  function handleUpdateEmploy(evt) {
    evt.preventDefault(); 
    console.log('handleUpdateEmploy')
    let employRec = getFormData(evt)
    let emp = [...employment]
    let idx = emp.findIndex(em => em.id.toLowerCase() === employRec.id.toLowerCase())
    emp[idx] = employRec
    console.log([ idx, JSON.stringify(emp) ]) // 
    // alert()
    setEmployment(emp) 
    console.log(['post upd', JSON.stringify(employment)]) 
  }
  function handleDeleteEmploy(evt) {
    evt.preventDefault(); 
    console.log('handleDeleteEmploy')
    let employRec = getFormData(evt)
    let emp = [...employment.filter(em => em.id.toLowerCase() !== employRec.id.toLowerCase())]
    console.log(JSON.stringify(emp)) 
    // alert()
    setEmployment(emp) 
    console.log(['post del', JSON.stringify(employment)]) 
  }
  const toggle = (evt) => {
    let frm = evt.target.closest('div').lastChild
    frm.classList.replace(frm.classList[1], (frm.classList[1] === 'hid' ? 'viz' : 'hid'))
  }

  let hasAdd=true
  let hasUpd=false
  let hasDel=false
  let isViz = false
  
  let propsAcademy =  { curryr, hasAdd, hasUpd, hasDel, handleAddAcademy, handleUpdateAcademy, handleDeleteAcademy }
  let propsEmploy =  { curryr, hasAdd, hasUpd, hasDel, handleAddEmploy, handleUpdateEmploy, handleDeleteEmploy }

  return (
    <> 
      <div className="container">
        <div className="inputFields">
          <div className="formmanage">
            <button className="addData" onClick={() => { importCandidate() }}>
              import
            </button>
            <button className="addData" onClick={() => { clearCandidate() }}>
              clear
            </button>

          </div>
          <h3>Candidate</h3>
          <Candidate 
            candidate = { candidate }
            setName = { setName } 
            setEmail = { setEmail } 
            setPhone = { setPhone } 
            setLocation = { setLocation }
            />
          
          <h3>Education</h3>
          <div className="addEducation">
            <button className='add education' onClick={ (evt) => { toggle(evt) }}>
              <span className="material-symbols-outlined"> add </span> 
              <span className='label'>Education</span>
            </button>
            
            <Academy 
              academy = { academicRec() } 
              props = { propsAcademy }
            />
          </div>
          <Academics 
            academics = { academics } 
            props = { propsAcademy }
          />
          
          
          <h3>Employment</h3>
          <div className="addEmployment">
            <button className='add employment' onClick={ (evt) => { toggle(evt) }}>
              <span className="material-symbols-outlined"> add </span> 
              <span className='label'>Employment</span>
            </button>
            <Employ 
                employ = { employRec() }
                props = { propsEmploy }
            />
          </div>
          <Employment 
            employment = { employment }
            props = { propsEmploy }
          />
          
        </div>
        <div className="output">
          <CV 
            candidate = { candidate }
            academics = { academics } 
            employment = { employment }
          />
        </div>
      </div>  

    </>
  )
}

export default App



