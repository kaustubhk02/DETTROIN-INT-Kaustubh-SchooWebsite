import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AdmissionsPage from './pages/AdmissionsPage';
import AcademicsPage from './pages/AcademicsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import InquiryModal from './components/ui/InquiryModal';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const handleNavigate = (pageKey) => {
    setCurrentPage(pageKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = () => {
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onOpenInquiry={handleOpenInquiry} />;
      case 'admissions':
        return <AdmissionsPage onOpenInquiry={handleOpenInquiry} />;
      case 'academics':
        return <AcademicsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage onOpenInquiry={handleOpenInquiry} />;
      case 'home':
      default:
        return <HomePage onOpenInquiry={handleOpenInquiry} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-800 flex flex-col font-sans">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} onOpenInquiry={handleOpenInquiry} />
      <InquiryModal isOpen={inquiryModalOpen} onClose={handleCloseInquiry} />
    </div>
  );
}
