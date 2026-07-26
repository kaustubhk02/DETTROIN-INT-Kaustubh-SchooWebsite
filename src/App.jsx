import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import './App.css';

export default function App() {
  const handleOpenInquiry = () => {
    alert("Admission Inquiry modal will open here.");
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-800 flex flex-col font-sans">
      <Navbar onOpenInquiry={handleOpenInquiry} />
      <main className="flex-1">
        <Hero onOpenInquiry={handleOpenInquiry} />
      </main>
    </div>
  );
}
