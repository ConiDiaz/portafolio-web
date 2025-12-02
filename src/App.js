import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Crear cursor personalizado
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    // Seguir el mouse
    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };
    
    // Detectar elementos hover
    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Agranda cursor sobre elementos interactivos
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('.filters span') ||
        target.closest('.project-card') ||
        target.closest('.featured-project') ||
        target.closest('.menu-toggle') ||
        target.closest('.see-all') ||
        target.closest('.contact-links a') ||
        target.closest('.contact-links div')
      ) {
        cursor.classList.add('large');
      }
    };
    
    const handleMouseOut = (e) => {
      cursor.classList.remove('large');
    };
    
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      cursor.remove();
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="site-root">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
