import { useState } from 'react'
import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from "./pages/Home/Home"
// import Tracker from './Components/Tracker'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Browser>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Browser>

      {/* <Tracker /> */}
    </div>
  )
}

export default App
