import './App.css'
import Home from './pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Reserve from './pages/Reserve'
import Login from './pages/Login'
import Report from './pages/Report'

function App() {
  return (
    <>
      <Router> 
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/reserve' element={<Reserve />}/>
          <Route path='/report' element={<Report />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
