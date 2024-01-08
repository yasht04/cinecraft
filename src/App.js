import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Login from './component/Login';
import Nav from './component/Nav';
import Feature from './component/Feature';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
function App() {
  return (
    <div>
      <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login&Signin" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/feature" element={<Feature />} />
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;