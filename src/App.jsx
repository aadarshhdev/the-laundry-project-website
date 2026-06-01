import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BookingProvider>
    </BrowserRouter>
  );
}
