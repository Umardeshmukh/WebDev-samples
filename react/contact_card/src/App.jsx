import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState([''])
  const [email, setEmail] = useState([''])
  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    console.log(title, email)

    setAllUsers(prev => [...prev, { title, email }])

    setTitle('')
    setEmail('')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='main'>
          <input
            className='input'
            type="text"
            placeholder='Enter name'
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className='input'
            type="email"
            placeholder='Enter Email'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className='btn'>Submit</button>
        </div>
      </form>

      {allUsers.map((elem, idx) => (
        <div key={idx}>
          <h4>{elem.title}</h4>
          <p>{elem.email}</p>
        </div>
      ))}
    </div>
  )
}

export default App