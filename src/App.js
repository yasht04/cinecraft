import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Nav from './component/Nav';
import Feature from './component/Feature';

function App() {
  return (
    <div>
      <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/feature" element={<Feature />} />
    </Routes>
  </div>
  );
}

export default App;