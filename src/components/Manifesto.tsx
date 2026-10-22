import { Reveal } from './Reveal';
import { restaurantData } from '../data/restaurantData';

export function Manifesto() {
  const { brand } = restaurantData;

  return (
    <section
      aria-label="Manifesto CLOUD"
      className="relative py-20 lg:py-24 bg-[#0E1013] border-y border-[#17191D] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal direction="up" distance={16} delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="w-10 h-[1.5px] bg-[#23272E]" aria-hidden="true" />
            <div className="w-2 h-2 rounded-full bg-[#FFD429]" aria-hidden="true" />
            <span className="w-10 h-[1.5px] bg-[#23272E]" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal direction="up" distance={24} delay={0.2}>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#F5F4F0] uppercase leading-[1.15] mb-6 max-w-3xl mx-auto text-balance">
            {brand.statementTitle}
          </h2>
        </Reveal>

        <Reveal direction="up" distance={20} delay={0.3}>
          <p className="text-base sm:text-lg lg:text-xl text-[#A4A6AC] font-normal leading-relaxed max-w-2xl mx-auto text-pretty">
            {brand.statementSubtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-[#17191D]/80">
          <Reveal direction="up" distance={20} delay={0.4}>
            <div className="px-4">
              <span className="block font-display font-bold text-sm uppercase tracking-wider text-[#F5F4F0] mb-1">
                Chapa Quente & Crosta
              </span>
              <span className="text-xs text-[#A4A6AC] leading-normal">
                Selamento preciso para preservar suculência e aroma.
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" distance={20} delay={0.5}>
            <div className="px-4">
              <span className="block font-display font-bold text-sm uppercase tracking-wider text-[#F5F4F0] mb-1">
                Pão Macio & Tostado
              </span>
              <span className="text-xs text-[#A4A6AC] leading-normal">
                Brioche artesanal com estrutura ideal para cada mordida.
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" distance={20} delay={0.6}>
            <div className="px-4">
              <span className="block font-display font-bold text-sm uppercase tracking-wider text-[#F5F4F0] mb-1">
                Molhos da Casa
              </span>
              <span className="text-xs text-[#A4A6AC] leading-normal">
                Receitas originais feitas com ingredientes autênticos.
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
