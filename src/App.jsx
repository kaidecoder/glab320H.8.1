import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Currencies from './pages/Currencies'
import Main from './pages/Main'
import Price from './pages/Price'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/currencies" element={<Currencies/>}/>
          <Route path="/price/:symbol" element={<Price/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App