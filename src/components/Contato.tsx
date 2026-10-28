import { MessageSquare, PhoneCall, Sparkles, Clock, ArrowRight } from "lucide-react";
import { WHATSAPP_DISPLAY, WHATSAPP_LINKS } from "@/data/projetos";

export default function Contato() {
  return (
    <section
      id="contato"
      className="py-24 relative overflow-hidden"
      aria-label="Entre em contato com a VELTRIX"
    >
      {/* Luz ambiente de fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-[#0066FF]/20 via-[#00C8FF]/15 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#07142B]/90 via-[#07142B]/70 to-[#030817]/95 border border-[#00C8FF]/30 backdrop-blur-2xl shadow-2xl text-center relative overflow-hidden">
          
          {/* Decoração superior com as cores da VELTRIX */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066FF] via-[#00C8FF] to-[#FF8500]" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#030817] border border-[#00C8FF]/20 text-[#00C8FF] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8500]" />
            <span>Atendimento Direto &amp; Personalizado</span>
          </div>

          {/* Título Exato */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Sua próxima ideia pode começar aqui.
          </h2>

          {/* Texto Exato */}
          <p className="text-base sm:text-lg lg:text-xl text-[#AAB8CD] leading-relaxed mb-8 max-w-2xl mx-auto">
            Precisa de um site, aplicativo ou sistema para o seu negócio? Vamos conversar sobre o seu projeto.
          </p>

          {/* Telefone e Informações Rápidas */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#030817]/80 border border-white/10 text-white font-medium text-sm sm:text-base mb-8 shadow-inner">
            <PhoneCall className="w-4 h-4 text-[#00C8FF]" />
            <span>WhatsApp:</span>
            <span className="font-bold text-[#00C8FF]">{WHATSAPP_DISPLAY}</span>
          </div>

          {/* Botão Principal de Contato */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINKS.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#00C8FF] shadow-[0_4px_25px_rgba(0,200,255,0.4)] hover:shadow-[0_6px_35px_rgba(0,200,255,0.6)] hover:scale-[1.02] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF]"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Conversar pelo WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Nota de facilidade */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs text-[#AAB8CD]">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#00C8FF]" />
              Resposta rápida no horário comercial
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8500]" />
              Protótipo gratuito da sua plataforma
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
