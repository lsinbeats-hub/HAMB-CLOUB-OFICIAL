import { MessageCircle, Instagram, MapPin, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { restaurantData } from '../data/restaurantData';

export function ContactSection() {
  const { contact, location } = restaurantData;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappDefaultMessage
  )}`;

  return (
    <section
      id="contato"
      aria-label="Canais de Contato"
      className="py-24 lg:py-28 bg-[#0E1013] border-t border-[#17191D] relative overflow-hidden"
    >
      {/* Ambient Golden Glow com transição suave para o preto */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[950px] h-[450px] rounded-full pointer-events-none blur-[90px] bg-[radial-gradient(ellipse_at_center,_rgba(255,212,41,0.08)_0%,_rgba(255,212,41,0.03)_40%,_rgba(255,212,41,0.005)_65%,_transparent_80%)]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal direction="up" distance={16} delay={0.1}>
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-[#FFD429]" aria-hidden="true" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFD429]">
              Canais Oficiais
            </span>
            <span className="w-6 h-[2px] bg-[#FFD429]" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal direction="up" distance={20} delay={0.2}>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F4F0] uppercase leading-[1.15] mb-4">
            FALE COM A GENTE
          </h2>
        </Reveal>

        <Reveal direction="up" distance={18} delay={0.3}>
          <p className="text-sm sm:text-base text-[#A4A6AC] max-w-xl mx-auto mb-12">
            Estamos prontos para atender você, tirar dúvidas e receber sua visita.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* WhatsApp Card */}
          <Reveal direction="up" distance={24} delay={0.15} scale>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-[#131519]/90 backdrop-blur-sm border border-[#23272E] hover:border-[#FFD429]/70 hover:shadow-xl hover:shadow-[#FFD429]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD429] h-full"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#17191D] border border-[#23272E] group-hover:border-[#FFD429]/40 flex items-center justify-center text-[#FFD429] mb-4 transition-colors">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#A4A6AC] block">
                  Atendimento Rápido
                </span>
                <h3 className="font-display font-bold text-lg text-[#F5F4F0] mt-1 group-hover:text-[#FFD429] transition-colors">
                  WhatsApp Oficial
                </h3>
                <p className="text-xs text-[#A4A6AC] mt-1.5 leading-relaxed">
                  Tire dúvidas sobre ingredientes, mesas e eventos.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#17191D] flex items-center justify-between text-xs font-bold text-[#FFD429]">
                <span>Iniciar conversa</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </div>
            </a>
          </Reveal>

          {/* Instagram Card */}
          <Reveal direction="up" distance={24} delay={0.25} scale>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-[#131519]/90 backdrop-blur-sm border border-[#23272E] hover:border-[#FFD429]/70 hover:shadow-xl hover:shadow-[#FFD429]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD429] h-full"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#17191D] border border-[#23272E] group-hover:border-[#FFD429]/40 flex items-center justify-center text-[#FFD429] mb-4 transition-colors">
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#A4A6AC] block">
                  Bastidores & Novidades
                </span>
                <h3 className="font-display font-bold text-lg text-[#F5F4F0] mt-1 group-hover:text-[#FFD429] transition-colors">
                  {contact.instagramHandle}
                </h3>
                <p className="text-xs text-[#A4A6AC] mt-1.5 leading-relaxed">
                  Acompanhe o dia a dia da chapa, fotos e novidades da casa.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#17191D] flex items-center justify-between text-xs font-bold text-[#FFD429]">
                <span>Seguir no Instagram</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </div>
            </a>
          </Reveal>

          {/* Google Maps Card */}
          <Reveal direction="up" distance={24} delay={0.35} scale>
            <a
              href={location.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-[#131519]/90 backdrop-blur-sm border border-[#23272E] hover:border-[#FFD429]/70 hover:shadow-xl hover:shadow-[#FFD429]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD429] h-full"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#17191D] border border-[#23272E] group-hover:border-[#FFD429]/40 flex items-center justify-center text-[#FFD429] mb-4 transition-colors">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#A4A6AC] block">
                  Como Chegar
                </span>
                <h3 className="font-display font-bold text-lg text-[#F5F4F0] mt-1 group-hover:text-[#FFD429] transition-colors">
                  Google Maps
                </h3>
                <p className="text-xs text-[#A4A6AC] mt-1.5 leading-relaxed">
                  Navegue com GPS em tempo real até a porta da CLOUD.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#17191D] flex items-center justify-between text-xs font-bold text-[#FFD429]">
                <span>Abrir rota no Maps</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
