import { Flame, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';
import { restaurantData } from '../data/restaurantData';

export function Spotlight() {
  const { brand, images } = restaurantData;

  return (
    <section
      aria-label="Produto em Destaque"
      className="py-16 lg:py-24 bg-[#0E1013] border-y border-[#17191D] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Spotlight Image */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal direction="up" distance={30} delay={0.1} className="w-full max-w-sm sm:max-w-md">
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden border border-[#23272E] shadow-xl bg-[#0A0B0D] aspect-[4/3] max-h-[300px]">
                  <img
                    src={images.spotlightBurger}
                    alt="Hambúrguer artesanal double smash com bacon e queijo cheddar derretido"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D]/80 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-[#A4A6AC] bg-[#0A0B0D]/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#23272E]">
                    <span className="font-bold text-[#F5F4F0] uppercase tracking-wider">
                      Double Smash & Bacon
                    </span>
                    <span className="text-[#FFD429] text-[10px] font-bold">
                      Receita autoral
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Spotlight Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal direction="up" distance={16} delay={0.15}>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#FFD429]" aria-hidden="true" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFD429]">
                  Filosofia de Preparo
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" distance={20} delay={0.25}>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#F5F4F0] uppercase leading-[1.15] mb-4 text-balance">
                {brand.spotlightTitle}
              </h2>
            </Reveal>

            <Reveal direction="up" distance={20} delay={0.35}>
              <p className="text-sm sm:text-base text-[#A4A6AC] leading-relaxed mb-6 font-normal text-pretty">
                {brand.spotlightText}
              </p>
            </Reveal>

            <Reveal direction="up" distance={20} delay={0.45}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#17191D]">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#17191D] border border-[#23272E] flex items-center justify-center shrink-0 text-[#FFD429] mt-0.5">
                    <Flame className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs text-[#F5F4F0] uppercase tracking-wider">
                      Prensagem & Crosta
                    </h3>
                    <p className="text-xs text-[#A4A6AC] mt-0.5">
                      Smash rápido na chapa para caramelização intensa sem ressecar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#17191D] border border-[#23272E] flex items-center justify-center shrink-0 text-[#FFD429] mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs text-[#F5F4F0] uppercase tracking-wider">
                      Equilíbrio Real
                    </h3>
                    <p className="text-xs text-[#A4A6AC] mt-0.5">
                      Picles para acidez, cheddar cremoso e pão macio tostado na manteiga.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" distance={16} delay={0.55}>
              <div className="mt-6">
                <a
                  href="#localizacao"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFD429] hover:text-[#ffe066] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <span>Venha experimentar no salão</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
