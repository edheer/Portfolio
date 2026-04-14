import { useState } from 'react';

const brandingProjects = [
  { title: "Logo Design Twinpixel", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800" },
  { title: "Identity WUR Project", img: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800" },
  { title: "S.V.NULL Branding", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800" }
];

export default function BrandingModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* De Trigger (De knop op je work page) */}
      <div 
        onClick={() => setIsOpen(true)}
        className="group relative bg-[#befc28]/5 border border-[#befc28]/20 p-12 rounded-[2rem] cursor-pointer hover:bg-[#befc28]/10 transition-all text-center"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#befc28] mb-4 block">Visual Identity</span>
        <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Branding <span className="text-transparent" style={{WebkitTextStroke: '1px #befc28'}}>Showcase</span></h3>
        <p className="mt-4 text-white/40 italic">Klik om branding projecten te bekijken</p>
      </div>

      {/* De Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl">
          <div className="max-w-5xl w-full bg-neutral-900 border border-white/10 rounded-[3rem] p-8 md:p-16 relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-[#befc28] font-black uppercase tracking-widest text-xs hover:scale-110 transition-transform"
            >
              Sluiten [X]
            </button>

            <h2 className="text-4xl font-black italic uppercase mb-12">Branding & <span className="text-[#befc28]">Identity</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brandingProjects.map((item, i) => (
                <div key={i} className="group">
                  <div className="aspect-square overflow-hidden rounded-2xl bg-black mb-4">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}