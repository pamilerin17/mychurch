// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Church from './components/Church/Church'
import Love from './components/Love/Love'

import './App.css'

function App() {
 

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<><Body/><Church/><Love/></>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
