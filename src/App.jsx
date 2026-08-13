import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BrandsPage from './pages/BrandsPage';
import FAQsPage from './pages/FAQsPage';

export default function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="bg-zinc-950 border-b border-zinc-800 p-4 text-white flex justify-center gap-6 text-sm font-semibold">
        <Link to="/about" className="hover:text-amber-400 transition-colors">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-amber-400 transition-colors">
          Contact Us
        </Link>
        <Link to="/brands" className="hover:text-amber-400 transition-colors">
          Brands
        </Link>
        <Link to="/faqs" className="hover:text-amber-400 transition-colors">
          FAQs
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
      </Routes>
    </Router>
  );
}