import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import Add from './component/Add.jsx'
import Home from './component/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar></Navbar>
    <Add></Add>
    <Home></Home>
  </StrictMode>,
)
