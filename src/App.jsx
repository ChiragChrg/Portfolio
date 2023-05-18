import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from "./pages/Home/Home"
import Cursor from './Components/Cursor'

function App() {


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
