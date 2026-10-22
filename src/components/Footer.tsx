import { MessageCircle, Instagram, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { restaurantData } from '../data/restaurantData';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { brand, location, contact } = restaurantData;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappDefaultMessage
  )}`;

  return (
    <footer className="bg-[#0A0B0D] text-[#A4A6AC] border-t border-[#17191D] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#17191D]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#inicio" aria-label="Voltar ao início">
              <Logo size="md" />
            </a>
            <p className="text-sm text-[#A4A6AC] max-w-sm leading-relaxed mt-2">
              {brand.tagline} Hamburgueria urbana contemporânea com carnes selecionadas na chapa quente.
            </p>
            <div className="text-xs text-[#A4A6AC]/70">
              {location.street} · {location.neighborhood}, {location.city} - {location.state}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#F5F4F0] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#FFD429] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#FFD429] transition-colors">
                  Cardápio da Casa
                </a>
              </li>
              <li>
                <a href="#historia" className="hover:text-[#FFD429] transition-colors">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#hamburguer" className="hover:text-[#FFD429] transition-colors">
                  O Hambúrguer CLOUD
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#FFD429] transition-colors">
                  Localização & Horários
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Times & Social */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#F5F4F0] mb-4">
              Atendimento no Salão
            </h4>
            <p className="text-xs text-[#A4A6AC] leading-relaxed">
              Terça a Domingo: a partir das 18h.
              <br />
              Segunda-feira: Fechado para descanso.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#17191D] hover:bg-[#23272E] text-[#FFD429] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD429]"
                aria-label="WhatsApp da CLOUD"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#17191D] hover:bg-[#23272E] text-[#FFD429] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD429]"
                aria-label="Instagram da CLOUD"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#17191D] hover:bg-[#23272E] text-[#FFD429] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD429]"
                aria-label="Google Maps da CLOUD"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A4A6AC]/70">
          <div>
            © {currentYear} CLOUD Hamburgueria. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-3">
            <span>Site Institucional Demonstrativo</span>
            <span>·</span>
            <span className="text-[#A4A6AC]">Pronto para dados oficiais</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
