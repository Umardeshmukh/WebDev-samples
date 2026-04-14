import React, { useState } from 'react'
import axios from 'axios'
import User from './component/User'
function App() {
  const [alldata, setalldata] = useState([])
  const getData = async ()=>{
    const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(response);
      setalldata(response.data)
  }
  return (
    <div>
      <button onClick={getData}>
        Get Data
      </button>
      <div className='all_cards'>
         {alldata.map(function(elem,idx){
        return <div key={idx}>
          <User />
        </div>
      })}
      </div>
     
    </div>
  )
}

export default App