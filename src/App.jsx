// import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'

import AboutPage from './components/AboutPage'
 import LandingPage from './components/LandingPage'




 import React from 'react'
import NavBar from './components/navbar'
import Footer from './components/Footer'
 
 const App = () => {
   return (
    <>
     <BrowserRouter>
     <NavBar/>
       <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/about" element={<AboutPage />} />
       </Routes>
       <Footer />
     </BrowserRouter>
    </>
   )
 }
 
 export default App
