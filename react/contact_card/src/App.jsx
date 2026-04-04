import { useActionState, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [title, setTitle] = useState([''])
    const [email, setEmail] = useState([''])

  return (
   <div>
     <form onSubmit={(e)=>{
      submitHandler(e)
     }}>
      <input type="text"
      placeholder='Enter name'
      value = {title}
      required
      onChange={(e)=>{
        setTitle(e.target.value)
      }} />
      <input type="text"
      placeholder='Enter Email'
      value = {email}
      required
      onChange={(e)=>{
        setEmail(e.target.value)
      }} />
      
        <button>Submit</button>
     </form>
   </div>
  )
}

export default App
