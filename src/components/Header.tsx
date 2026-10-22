import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { restaurantData } from '../data/restaurantData';

interface HeaderProps {
  onOpenCart?: () => void;
  cartCount?: number;
}

export function Header({ onOpenCart, cartCount = 0 }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${restaurantData.contact.whatsappNumber}?text=${encodeURIComponent(
    restaurantData.contact.whatsappDefaultMessage
  )}`;

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'O Burger', href: '#hamburguer' },
    { label: 'História', href: '#historia' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      <div
        className={`max-w-6xl mx-auto transition-all duration-300 rounded-2xl ${
          scrolled
            ? 'bg-[#0A0B0D]/90 backdrop-blur-xl border border-[#23272E] shadow-2xl shadow-black/80 py-3 px-5 sm:px-6'
            : 'bg-[#0A0B0D]/60 backdrop-blur-md border border-[#17191D]/80 py-3.5 px-5 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-6 sm:gap-8">
          <a
            href="#inicio"
            aria-label="CLOUD Hamburgueria - Início"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD429] rounded py-1"
          >
            <Logo size="md" />
          </a>

          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] font-semibold uppercase tracking-wider text-[#A4A6AC]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#F5F4F0] transition-colors duration-150 py-1 relative focus-visible:outline-none focus-visible:text-[#FFD429]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            {/* Status indicator */}
            <div className="hidden lg:flex items-center gap-2 text-[12px] text-[#A4A6AC] bg-[#17191D]/80 px-3 py-1.5 rounded-lg border border-[#23272E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD429] animate-pulse" aria-hidden="true" />
              <span>Chapa aberta às 18h</span>
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0A0B0D] bg-[#FFD429] hover:bg-[#ffe066] active:bg-[#e6bd1f] rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 shadow-md shadow-[#FFD429]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD429]"
            >
              <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Fale com a gente</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#A4A6AC] hover:text-[#F5F4F0] rounded-lg bg-[#17191D]/80 hover:bg-[#17191D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD429]"
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#17191D] flex flex-col gap-2 pb-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-2 text-sm font-semibold uppercase tracking-wider text-[#A4A6AC] hover:text-[#F5F4F0] hover:bg-[#17191D] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-[#17191D] flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A0B0D] bg-[#FFD429] hover:bg-[#ffe066] rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp Oficial</span>
              </a>
              <a
                href={restaurantData.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-[#A4A6AC] hover:text-[#F5F4F0] bg-[#17191D] rounded-lg transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FFD429]" aria-hidden="true" />
                <span>Como chegar ({restaurantData.location.street})</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
