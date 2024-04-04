import Reacts from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from './Pages/Courses';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Pages/Footer';
import { Route, Routes } from 'react-router-dom';
import Cinematography from './CourseContent/Cinemato';
import ScreenPlay from './CourseContent/Screenplay';
import Moviemaking from './CourseContent/Moviemaking';
import Quiz from './Pages/Quiz';
import Chat from './Pages/Chat';

function App() {
  return (
    <>
    <div>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Home />
              <About />
              <Course />
            </>
          } />
          <Route path='/Quiz' element={<Quiz/>} />
          <Route path='/Cinematography' element={<Cinematography />} />
          <Route path='/screenplay' element={<ScreenPlay />} />
          <Route path='/moviemaking' element={<Moviemaking />} />
        </Routes>
        <Chat/>
        <Footer />
       
    </div>
    </>
  )
}

export default App