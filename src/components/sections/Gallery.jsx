export default function Gallery() {
  const GALLERY_ITEMS = [
    {
      img: "/images/campus-main.jpg",
      title: "5-Acre Main Campus Building",
      subtitle: "Lush green environment in Aligarh",
    },
    {
      img: "/images/classroom.jpg",
      title: "Interactive Smart Classrooms",
      subtitle: "Airy, modern, & technology enabled",
    },
    {
      img: "/images/sports.jpg",
      title: "Sports Grounds & Athletics",
      subtitle: "Basketball, football & athletic fields",
    },
    {
      img: "/images/library.jpg",
      title: "Knowledge Resource Library",
      subtitle: "Over 10,000 books & digital journals",
    },
  ];

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              Campus Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
              A Glimpse into Life at Krishna International
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
            Designed with wide open spaces, natural lighting, and modern facilities to give students room to study, play, and thrive.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="h-72 sm:h-80 group relative rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent p-5 flex flex-col justify-end">
                <span className="text-white font-bold text-base leading-tight">
                  {item.title}
                </span>
                <span className="text-slate-300 text-xs mt-1">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
