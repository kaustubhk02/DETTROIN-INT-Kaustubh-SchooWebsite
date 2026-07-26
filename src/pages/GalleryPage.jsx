import Gallery from "../components/sections/Gallery";

export default function GalleryPage() {
  return (
    <div className="py-12 sm:py-16">
      {/* Page Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-indigo-950 via-blue-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/30">
            Campus Life & Gallery
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-4 text-white">
            Explore 5 Acres of Modern Infrastructure
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl">
            Take a visual tour through our smart classrooms, sports ground, science & computer labs, and knowledge library.
          </p>
        </div>
      </div>

      <Gallery />
    </div>
  );
}
