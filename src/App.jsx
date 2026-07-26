import Navbar from './components/layout/Navbar';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-800 flex flex-col font-sans">
      <Navbar onOpenInquiry={() => alert("Inquiry modal will open here.")} />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900">Krishna International School</h1>
        <p className="text-slate-600 mt-2">Navbar & Top Contact Bar Implemented Successfully.</p>
      </main>
    </div>
  );
}
