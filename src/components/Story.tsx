import { Flame, Users } from 'lucide-react';
import { Reveal } from './Reveal';
import { restaurantData } from '../data/restaurantData';

export function Story() {
  const { brand, images } = restaurantData;

  return (
    <section
      id="historia"
      aria-label="Nossa História"
      className="py-16 lg:py-24 bg-[#0A0B0D] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Story Content */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <Reveal direction="up" distance={16} delay={0.1}>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#FFD429]" aria-hidden="true" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFD429]">
                  Sobre a CLOUD
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" distance={22} delay={0.2}>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#F5F4F0] uppercase leading-[1.15] mb-5 text-balance">
                {brand.aboutTitle}
              </h2>
            </Reveal>

            <Reveal direction="up" distance={20} delay={0.3}>
              <div className="space-y-3.5 text-sm sm:text-base text-[#A4A6AC] leading-relaxed font-normal text-pretty">
                <p>{brand.aboutText}</p>
                <p className="text-xs sm:text-sm text-[#A4A6AC]/90">{brand.aboutSubtext}</p>
              </div>
            </Reveal>

            <Reveal direction="up" distance={20} delay={0.4}>
              <div className="mt-6 grid grid-cols-2 gap-3.5 pt-5 border-t border-[#17191D]">
                <div className="p-3.5 rounded-xl bg-[#131519] border border-[#23272E]">
                  <Flame className="w-4 h-4 text-[#FFD429] mb-1.5" aria-hidden="true" />
                  <h3 className="font-display font-bold text-xs text-[#F5F4F0] uppercase">
                    Chapa & Brasa
                  </h3>
                  <p className="text-[11px] text-[#A4A6AC] mt-0.5">
                    Preparo rápido e autêntico à vista de todos.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#131519] border border-[#23272E]">
                  <Users className="w-4 h-4 text-[#FFD429] mb-1.5" aria-hidden="true" />
                  <h3 className="font-display font-bold text-xs text-[#F5F4F0] uppercase">
                    Ponto de Encontro
                  </h3>
                  <p className="text-[11px] text-[#A4A6AC] mt-0.5">
                    Ambiente descontraído para reunir a galera.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Kitchen Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <Reveal direction="up" distance={28} delay={0.25} className="w-full max-w-sm sm:max-w-md">
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden border border-[#23272E] shadow-xl bg-[#131519] aspect-[4/3] max-h-[290px]">
                  <img
                    src={images.chefKitchen}
                    alt="Preparo artesanal e montagem cuidadosa do hambúrguer na cozinha da CLOUD"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D]/80 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-[#A4A6AC] bg-[#0A0B0D]/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#23272E]">
                    <span className="font-bold text-[#F5F4F0] uppercase tracking-wider">
                      Cozinha & Preparo
                    </span>
                    <span className="text-[10px] text-[#FFD429]">Montagem artesanal</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
