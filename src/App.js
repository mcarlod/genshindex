import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './containers/home'
import Artifacts from './containers/artifacts'
import Characters from './containers/characters'
import Weapons from './containers/weapons'

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/artifacts" element={<Artifacts />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/weapons" element={<Weapons />} />

        </Routes>
      </Router>
    </div>
  )
}