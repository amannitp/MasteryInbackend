import { useCallback, useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
function App() {
const [jokes,setjokes]=useState([]);

useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
     setjokes(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })

})


  return (
    <>
      <h1>basic project using fullstack</h1>
      <p>array length is : {jokes.length}</p>

      {
        jokes.map((joke)=>{
          return <div key={joke.id}>
            <h3>{joke.type}</h3>
            <p>{joke.name}</p>

          </div>
        })
      }
    </>
  )
}

export default App
