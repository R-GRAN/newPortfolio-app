import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home/Index.jsx'
import "@/assets/styles/main.scss"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/'Component={<Home/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
