import React, {useEffect} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from './Pages/Courses';
import NAvbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Foter from './Pages/Footer';
import { Route, Routes } from 'react-router-dom';
import Cinematography from './CourseContent/Cinemato';
import ScreenPlay from './CourseContent/Screenplay';
import Moviemaking from './CourseContent/Moviemaking';

function App() {
  return (
    <>
    <div>
        <NAvbar />
        <Routes>
          <Route path='/' element={
            <>
              <Home />
              <About />
              <Course />
            </>
          } />
          <Route path='/Cinematography' element={<Cinematography />} />
          <Route path='/screenplay' element={<ScreenPlay />} />
          <Route path='/moviemaking' element={<Moviemaking />} />
        </Routes>
        <Foter />
       
    </div>
    </>
  )
}

export default App