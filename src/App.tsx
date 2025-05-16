// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Church from './components/Church/Church'
import Love from './components/Love/Love'
import Watch from './components/Watch/Watch'
import Upcoming from './components/Upcoming/Upcoming'
import We from './components/We/We'
import Read from './components/Read/Read'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Our from './components/Our/Our'
import Benefit from './components/Benefit/Benefit'
import Meet from './components/Meet/Meet'
import Sermon from './components/Sermon/Sermon'
import Blog from './components/Blog/Blog'
import All from './components/All/All'
import Contact from './components/Contact/Contact'
import Form from './components/Form/Form'
import './App.css'

function App() {
 

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<><Body/><Church/><Love/><Watch/><Upcoming/><We/><Read/></>}/>
          <Route path='/About' element={<><About/><Our/><Benefit/><Meet/></>}/>
          <Route path='/Sermon' element={<><Sermon/><Upcoming/><Read/></>}/>
          <Route path='/Blog' element={<><Blog/><All/></>}/>
          <Route path='/Contact' element={<><Contact/><Form/></>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
