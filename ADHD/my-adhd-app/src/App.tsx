import { useState } from 'react'
import './App.css'
import MedicationList from './components/MedicationList'
import MainPage from './components/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainPage />
    </div>
  )
}

export default App
