import { useState } from 'react'
import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from "./pages/Home/Home"
import Cursor from './Components/Cursor'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Browser>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Browser>

      <Cursor />
    </div>
  )
}

export default App
