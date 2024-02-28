import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Reserve from './pages/Reserve'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router> 
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/reserve' element={<Reserve />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
