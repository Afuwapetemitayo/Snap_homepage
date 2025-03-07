import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Index from './pages/Index.jsx'
import About from './pages/About.jsx'
import Company from './pages/Company.jsx'
import Features from './pages/Features.jsx'
import './App.css'



function App(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/company" element={<Company />} />
          <Route path="/features" element={<Features />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;