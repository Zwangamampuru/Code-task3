
import './App.css';
import MainPage from './components/MainPage';
import Home from './components/Home-Page'
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {}
        <Route path="/home" element={<MainPage />} /> {}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} /> {/* catch-all 404 */}
      </Routes>
    </Router>
  );
}

export default App;
