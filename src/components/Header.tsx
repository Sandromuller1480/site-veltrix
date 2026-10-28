"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageSquare } from "lucide-react";
import { WHATSAPP_LINKS } from "@/data/projetos";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Protótipo gratuito", href: "#prototipo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar o menu com a tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Bloquear rolagem do body quando menu mobile estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030817]/85 backdrop-blur-md border-b border-[#00C8FF]/15 py-3 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo VELTRIX */}
          <Link
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF] rounded-lg p-1"
            aria-label="Ir para o início - VELTRIX"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
              <Image
                src="/imagens/marca/simbolo-veltrix-transparente.png"
                alt="Símbolo VELTRIX"
                fill
                sizes="(max-width: 640px) 36px, 40px"
                className="object-contain drop-shadow-[0_0_12px_rgba(0,200,255,0.4)] transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#00C8FF] transition-colors">
                VELTRIX
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-medium text-[#AAB8CD] -mt-1 uppercase">
                Tecnologia com identidade
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#07142B]/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5 shadow-inner"
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map((link) => {
              const isHighlight = link.href === "#prototipo";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF] ${
                    isHighlight
                      ? "text-[#FF8500] hover:text-white hover:bg-[#FF8500]/15 relative font-semibold"
                      : "text-[#AAB8CD] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isHighlight && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF8500] ml-1.5 animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={WHATSAPP_LINKS.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#00C8FF] shadow-[0_0_20px_rgba(0,200,255,0.3)] hover:shadow-[0_0_25px_rgba(0,200,255,0.55)] transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00C8FF] focus-visible:ring-offset-[#030817]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#07142B] border border-white/10 text-white hover:text-[#00C8FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF]"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer / Overlay */}
      <div
        className={`fixed inset-0 top-[65px] bg-[#030817]/95 backdrop-blur-xl z-40 lg:hidden transition-all duration-300 flex flex-col justify-between px-6 py-8 border-t border-white/5 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <nav
          className="flex flex-col space-y-3"
          aria-label="Menu de navegação móvel"
        >
          {NAV_LINKS.map((link) => {
            const isHighlight = link.href === "#prototipo";
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                  isHighlight
                    ? "bg-[#FF8500]/10 border border-[#FF8500]/30 text-[#FF8500] font-semibold"
                    : "text-[#AAB8CD] hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{link.label}</span>
                {isHighlight && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#FF8500]/20 text-[#FF8500] font-semibold">
                    Destaque
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Action Button */}
        <div className="pt-6 border-t border-white/10">
          <a
            href={WHATSAPP_LINKS.geral}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#00C8FF] shadow-[0_0_20px_rgba(0,200,255,0.4)]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
          <p className="text-center text-xs text-[#AAB8CD] mt-4">
            (65) 99692-3551 • Atendimento personalizado
          </p>
        </div>
      </div>
    </header>
  );
}
