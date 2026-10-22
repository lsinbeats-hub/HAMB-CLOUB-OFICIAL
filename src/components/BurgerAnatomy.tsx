import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { restaurantData, BurgerLayer } from '../data/restaurantData';

export function BurgerAnatomy() {
  const [selectedLayer, setSelectedLayer] = useState<number>(0);

  const layers: BurgerLayer[] = restaurantData.burgerLayers;
  const currentLayer = layers[selectedLayer] || layers[0];
  const currentImage = currentLayer.image;

  return (
    <section
      id="hamburguer"
      aria-label="Anatomia do Hambúrguer CLOUD"
      className="py-20 lg:py-28 bg-[#0A0B0D] relative overflow-hidden border-y border-[#17191D]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal direction="up" distance={20} delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#FFD429]" aria-hidden="true" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFD429]">
                Anatomia do Sabor
              </span>
              <span className="w-5 h-[2px] bg-[#FFD429]" aria-hidden="true" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F4F0] uppercase leading-[1.12]">
              O HAMBÚRGUER PERFEITO
            </h2>
            <p className="text-[#A4A6AC] text-sm sm:text-base mt-2.5 max-w-lg mx-auto leading-relaxed">
              Sem caixas, sem molduras. O hambúrguer artesanal da CLOUD isolado em sua forma mais pura.
            </p>
          </div>
        </Reveal>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Burger Showcase Viewport */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[360px] sm:min-h-[420px]">
            <Reveal direction="up" distance={28} delay={0.2} className="w-full flex justify-center">
              <div className="relative group w-full max-w-[340px] sm:max-w-[420px] flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center w-full aspect-square">
                  <img
                    key={`${selectedLayer}-${currentImage}`}
                    src={currentImage}
                    alt={currentLayer.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] animate-in fade-in zoom-in-95 duration-300"
                  />
                  <div className="absolute -bottom-4 w-3/4 h-8 bg-black/90 rounded-full blur-xl pointer-events-none" aria-hidden="true" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Interactive Layer Selectors */}
          <div className="lg:col-span-6 space-y-3">
            {layers.map((layer, index) => {
              const isSelected = selectedLayer === layer.id;
              return (
                <Reveal key={layer.id} direction="up" distance={18} delay={0.15 + index * 0.08}>
                  <div
                    onClick={() => setSelectedLayer(layer.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedLayer(layer.id);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-selected={isSelected}
                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD429] ${
                      isSelected
                        ? 'bg-[#17191D] border-[#FFD429] shadow-lg shadow-[#FFD429]/10 translate-x-1 sm:translate-x-1.5'
                        : 'bg-[#131519]/70 border-[#23272E] hover:border-[#A4A6AC]/40 hover:bg-[#17191D]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-[#F5F4F0] flex items-center gap-2.5">
                        <span
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            isSelected ? 'bg-[#FFD429]' : 'bg-[#23272E]'
                          }`}
                          aria-hidden="true"
                        />
                        {layer.title}
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded transition-colors ${
                          isSelected ? 'bg-[#FFD429] text-[#0A0B0D]' : 'bg-[#17191D] text-[#A4A6AC]'
                        }`}
                      >
                        {layer.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#A4A6AC] mt-1.5 leading-relaxed pl-5">
                      {layer.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}

            <Reveal direction="up" distance={14} delay={0.5}>
              <div className="pt-3 flex items-center justify-between text-xs text-[#A4A6AC]">
                <span>Chapa de ferro a 240°C para caramelização máxima.</span>
                <a
                  href="#cardapio"
                  className="font-bold text-[#FFD429] hover:underline inline-flex items-center gap-1"
                >
                  <span>Ver cardápio completo</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
