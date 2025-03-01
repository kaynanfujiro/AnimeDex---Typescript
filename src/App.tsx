import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Kaynan')
  
  const handleSubmit = () =>{
    setName('Kaynan Santos')
  }

  return (
    <>
      <h1>{name}</h1>
      <button onClick={handleSubmit}>TESTE</button>
    </>
  )
}

export default App
