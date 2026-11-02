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
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex size-12 items-center justify-center bg-transparent p-0 hover:scale-110 transition-transform duration-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      >
        <Image
          src="/imagens/marca/icone-whatsapp.png"
          alt=""
          width={48}
          height={48}
          className="size-12 object-contain"
          aria-hidden="true"
        />
        <span className="sr-only">Falar com a VELTRIX pelo WhatsApp</span>
      </a>
    </aside>
  );
}
