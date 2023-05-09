import { useState } from 'react'
import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'
import './App.css'

import Landing from "./pages/Landing/Landing"

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Browser>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </Browser>
    </div>
  )
}

export default App
