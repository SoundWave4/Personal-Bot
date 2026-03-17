import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CookieBanner from './components/CookieBanner/CookieBanner';
import ChatWidget from './components/ChatWidget/ChatWidget';
import HomePage from './pages/HomePage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import './App.css';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
      <ChatWidget />
    </>
  );
}

export default App;
