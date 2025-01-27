import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './page/homepage';
import Service from './page/servicepage';
import About from './page/aboutpage';
import Career from './page/careerpage';
import Contact from './page/contactpage';
import Footer from './components/footer';
import Track from './page/trackpage';
import Term from './components/terms/term';
import Privacy from './components/terms/privacy';
import Returnpolicy from './components/terms/returnpolicy';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Disable right-click (context menu)
    const handleRightClick = (e) => {
      e.preventDefault(); // Prevent right-click context menu
    };
    document.addEventListener('contextmenu', handleRightClick);

    // Disable keyboard shortcuts for dev tools (F12, Ctrl+Shift+I)
    const blockDevTools = (e) => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', blockDevTools);

    // Disable text selection
    document.body.style.userSelect = 'none';

    // Disable copy functionality
    const handleCopy = (e) => {
      e.preventDefault();
      alert('Copying is disabled!');
    };
    document.addEventListener('copy', handleCopy);

    // Cleanup function to remove the event listeners
    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('keydown', blockDevTools);
      document.removeEventListener('copy', handleCopy);
      document.body.style.userSelect = ''; // Reset user select
    };
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/track" element={<Track />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/term" element={<Term />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/returnpolicy" element={<Returnpolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;