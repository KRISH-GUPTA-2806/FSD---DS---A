import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Components/home'
import AboutUs from './Components/aboutus'
import Course from './Components/course'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="brand">ABES</div>
        <div className="nav-links">
          <NavLink to="/" end>HOME</NavLink>
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/course">COURSES</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
