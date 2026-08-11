import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      {/* Dynamic Navigation Bar */}
      <nav className="bg-zinc-950 border-b border-zinc-800 p-4 text-white flex justify-center gap-6 text-sm font-semibold">
        <Link to="/about" className="hover:text-amber-400 transition-colors">
          About Us Page
        </Link>
        <Link to="/contact" className="hover:text-amber-400 transition-colors">
          Contact Us Page
        </Link>
      </nav>

      {/* Dynamic Routes */}
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}