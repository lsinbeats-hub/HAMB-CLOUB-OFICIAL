import { useState, useRef } from 'react';
import { X, ZoomIn, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { restaurantData, GalleryItem } from '../data/restaurantData';

export function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 360;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      aria-label="Galeria da CLOUD"
      className="py-16 lg:py-24 bg-[#0A0B0D] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="up" distance={20} delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#17191D]">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#FFD429]" aria-hidden="true" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFD429]">
                  Experiência Visual
                </span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#F5F4F0] uppercase">
                O CLIMA DA CLOUD
              </h2>
              <p className="text-[#A4A6AC] text-sm mt-1 max-w-lg">
                Hambúrgueres na chapa, ambiente intimista e detalhes que fazem a diferença.
              </p>
            </div>

            <div className="flex items-center gap-4 self-start md:self-auto">
              {/* Carousel Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollCarousel('left')}
                  className="p-2 rounded-lg bg-[#131519] hover:bg-[#17191D] border border-[#23272E] hover:border-[#FFD429]/50 text-[#A4A6AC] hover:text-[#F5F4F0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD429]"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel('right')}
                  className="p-2 rounded-lg bg-[#131519] hover:bg-[#17191D] border border-[#23272E] hover:border-[#FFD429]/50 text-[#A4A6AC] hover:text-[#F5F4F0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD429]"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <a
                href={restaurantData.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD429] hover:text-[#ffe066] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span className="hidden sm:inline">@cloud.hamburgueria</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Single Row Photo Carousel / Carretel */}
        <div
          ref={carouselRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          className="flex items-stretch gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {restaurantData.gallery.map((item, index) => (
            <Reveal
              key={item.id}
              direction="up"
              distance={20}
              delay={0.1 + index * 0.05}
              className="w-[280px] sm:w-[350px] shrink-0 snap-start"
            >
              <div
                onClick={() => setSelectedPhoto(item)}
                className="group relative rounded-2xl overflow-hidden border border-[#23272E] bg-[#131519] aspect-[4/3] cursor-pointer shadow-lg hover:border-[#FFD429]/60 transition-all duration-300 h-full"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D]/90 via-[#0A0B0D]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-3 right-3 p-2 rounded-full bg-[#0A0B0D]/70 text-[#F5F4F0] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD429] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-base text-[#F5F4F0] group-hover:text-[#FFD429] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox / Full Photo Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#131519] border border-[#23272E] rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 text-[#A4A6AC] hover:text-[#F5F4F0] bg-[#0A0B0D]/80 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] w-full bg-[#0A0B0D] overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD429]">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-display font-bold text-lg text-[#F5F4F0]">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-[#A4A6AC] mt-0.5">{selectedPhoto.caption}</p>
              </div>

              <a
                href={restaurantData.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#17191D] hover:bg-[#23272E] text-[#FFD429] border border-[#23272E] transition-colors shrink-0"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
