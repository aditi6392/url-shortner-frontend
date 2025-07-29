// import { useState } from 'react'
import React from 'react'
import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './components/AboutPage'
 import LandingPage from './components/LandingPage'
 import RegisterPage from './components/RegisterPage'
import DashboardLayout from './Dashboard/DashboardLayout' // ✅ Use correct path based on your folder structure
import NavBar from './components/navbar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import LoginPage from './components/LoginPage'

 
 const App = () => {
   return (
    <>
     <BrowserRouter>
     <NavBar/>
     <Toaster position='bottom-center'/>
       <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/dashboard" element={<DashboardLayout />} />
       </Routes>
       <Footer />
     </BrowserRouter>
    </>
   )
 }
 
 export default App
