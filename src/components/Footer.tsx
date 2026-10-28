"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
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

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className="relative bg-[#020611] border-t border-white/10 pt-16 pb-12 overflow-hidden"
      aria-label="Rodapé institucional"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Coluna da Marca */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link
              href="#inicio"
              className="flex items-center gap-3 mb-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF] rounded-lg p-1"
              aria-label="Ir para o topo da página"
            >
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/imagens/marca/simbolo-veltrix-transparente.png"
                  alt="Símbolo VELTRIX"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-wider text-white group-hover:text-[#00C8FF] transition-colors">
                  VELTRIX
                </span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-[#AAB8CD] -mt-1 uppercase">
                  Tecnologia com identidade.
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#AAB8CD] leading-relaxed max-w-sm">
              Desenvolvimento de sites, aplicativos e sistemas personalizados que unem design estratégico, tecnologia de ponta e soluções sob medida para o seu negócio.
            </p>
          </div>

          {/* Links Rápidos de Navegação */}
          <div className="md:col-span-4">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#AAB8CD] hover:text-[#00C8FF] transition-colors py-1 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Atendimento & Contato Oficial */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-4">
              Atendimento Comercial
            </h3>
            <p className="text-sm text-[#AAB8CD] mb-4">
              Converse diretamente sobre sua demanda ou solicite o protótipo da sua plataforma.
            </p>
            <a
              href={WHATSAPP_LINKS.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#07142B] border border-[#00C8FF]/30 hover:border-[#00C8FF] hover:bg-[#0066FF]/20 transition-all duration-200"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#00C8FF]" />
              <span>(65) 99692-3551</span>
            </a>
          </div>
        </div>

        {/* Linha Inferior com Copyright e Ano Automático */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAB8CD]">
          <p>© {currentYear} VELTRIX. Todos os direitos reservados.</p>
          <p className="tracking-wide">Tecnologia com identidade.</p>
        </div>
      </div>
    </footer>
  );
}
