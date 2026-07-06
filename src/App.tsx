import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LeadershipSolution from './pages/LeadershipSolution';
import SalesSolution from './pages/SalesSolution';
import EnterpriseSolution from './pages/EnterpriseSolution';
import HowItWorks from './pages/HowItWorks';
import ResultsPage from './pages/ResultsPage';
import PilotPage from './pages/PilotPage';
import DemoPage from './pages/DemoPage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions/leadership" element={<LeadershipSolution />} />
        <Route path="/solutions/sales" element={<SalesSolution />} />
        <Route path="/solutions/enterprise" element={<EnterpriseSolution />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/pilot" element={<PilotPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
