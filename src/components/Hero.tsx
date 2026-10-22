import { ChevronDown, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';
import { restaurantData } from '../data/restaurantData';

export function Hero() {
  const { brand, images } = restaurantData;

  return (
    <section
      id="inicio"
      aria-label="Apresentação CLOUD"
      className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-start pt-32 pb-20 lg:py-28 overflow-hidden bg-[#0A0B0D]"
    >
      {/* Background with Ambient Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={images.dinerBackground}
          alt="Ambiente acolhedor do salão da hamburgueria CLOUD com mesas de madeira e iluminação âmbar"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D] via-[#0A0B0D]/85 to-[#0A0B0D]/40" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-[#0A0B0D]/70" aria-hidden="true" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-2xl text-left flex flex-col items-start">
          {/* Badge */}
          <Reveal delay={0.1} direction="up" distance={16}>
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="w-6 h-[2px] bg-[#FFD429]" aria-hidden="true" />
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#FFD429]">
                {brand.shortDescriptor}
              </span>
            </div>
          </Reveal>

          {/* Main Headline */}
          <Reveal delay={0.2} direction="up" distance={24}>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#F5F4F0] leading-[1.08] mb-5 whitespace-pre-line text-balance drop-shadow-md">
              {brand.heroHeadline}
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.3} direction="up" distance={20}>
            <p className="text-base sm:text-lg text-[#F5F4F0]/90 max-w-xl leading-relaxed font-normal mb-8 text-pretty drop-shadow-sm">
              {brand.heroSubhead}
            </p>
          </Reveal>

          {/* Actions */}
          <Reveal delay={0.4} direction="up" distance={20}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#cardapio"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[14px] font-bold tracking-wider uppercase text-[#0A0B0D] bg-[#FFD429] hover:bg-[#ffe066] active:bg-[#e6bd1f] rounded-lg transition-all duration-150 shadow-lg shadow-[#FFD429]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD429]"
              >
                <span>Conheça nosso cardápio</span>
                <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <a
                href="#localizacao"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[14px] font-medium tracking-wide text-[#F5F4F0] bg-[#17191D]/80 hover:bg-[#23272E] border border-[#23272E] hover:border-[#FFD429]/40 backdrop-blur-md rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD429]"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FFD429]" aria-hidden="true" />
                <span>Como chegar</span>
              </a>
            </div>
          </Reveal>

          {/* Value props */}
          <Reveal delay={0.5} direction="up" distance={16}>
            <div className="mt-10 pt-5 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-[13px] text-[#F5F4F0]/80">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD429]" aria-hidden="true" />
                <span>Carne 100% fresca</span>
              </div>
              <span className="text-white/20 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD429]" aria-hidden="true" />
                <span>Pão brioche selado</span>
              </div>
              <span className="text-white/20 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD429]" aria-hidden="true" />
                <span>Chapa de ferro quente</span>
              </div>
              <span className="text-white/20 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD429]" aria-hidden="true" />
                <span>Receitas autorais</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
