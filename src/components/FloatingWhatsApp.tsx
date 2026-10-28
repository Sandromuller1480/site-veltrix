"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINKS } from "@/data/projetos";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Atendimento rápido pelo WhatsApp">
      <a
        href={WHATSAPP_LINKS.geral}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a VELTRIX pelo WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.65)] hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-[#030817]"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        <span className="hidden sm:inline font-semibold text-sm tracking-wide">
          WhatsApp
        </span>
        <span className="sr-only">Falar com a VELTRIX pelo WhatsApp</span>
      </a>
    </aside>
  );
}
