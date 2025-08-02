import './App.css'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { getApps } from './utils/helper'

function App() {

  const CurrentApp = getApps();

  return (
    <Router>
      <CurrentApp />
    </Router>
  )
}

export default App