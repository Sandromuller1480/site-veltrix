"use client";

import Image from "next/image";
import { WHATSAPP_LINKS } from "@/data/projetos";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Atendimento rápido pelo WhatsApp">
      <a
        href={WHATSAPP_LINKS.geral}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a VELTRIX pelo WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.65)] hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-[#030817]"
      >
        <Image
          src="/imagens/marca/icone-whatsapp.png"
          alt=""
          width={24}
          height={24}
          className="size-8 object-contain"
          aria-hidden="true"
        />
        <span className="sr-only">Falar com a VELTRIX pelo WhatsApp</span>
      </a>
    </aside>
  );
}
