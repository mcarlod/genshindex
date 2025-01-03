import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './containers/home'
import AppNavigator from './components/AppNavigator'

export default function App() {
  return (
    <div>
      <Router>
        <AppNavigator />
        <Routes>
          
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  )
}