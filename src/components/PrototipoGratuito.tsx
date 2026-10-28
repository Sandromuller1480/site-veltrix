import { Sparkles, MessageSquare, Layers, Eye, ShieldCheck, CheckCircle2 } from "lucide-react";
import { WHATSAPP_LINKS } from "@/data/projetos";

export default function PrototipoGratuito() {
  return (
    <section
      id="prototipo"
      className="py-24 relative overflow-hidden"
      aria-label="Oferta de protótipo gratuito"
    >
      {/* Luzes de fundo atmosféricas exclusivas desta seção */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-r from-[#0066FF]/20 via-[#00C8FF]/25 to-[#FF8500]/15 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Painel Central com Efeito Glass de Alto Impacto */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-[#07142B]/90 via-[#07142B]/80 to-[#030817]/95 border-2 border-[#00C8FF]/30 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,102,255,0.25)] overflow-hidden">
          
          {/* Faixa luminosa decorativa superior */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0066FF] via-[#00C8FF] to-[#FF8500]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Coluna da Oferta e Mensagem */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Badge da Oferta */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF8500]/15 border border-[#FF8500]/40 text-[#FF8500] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-[0_0_20px_rgba(255,133,0,0.25)]">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                <span>Oportunidade Exclusiva VELTRIX</span>
              </div>

              {/* Título EXATAMENTE como solicitado */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight mb-6">
                O PROTÓTIPO DA SUA PLATAFORMA É{" "}
                <span className="bg-gradient-to-r from-[#00C8FF] via-[#0066FF] to-[#FF8500] bg-clip-text text-transparent">
                  GRATUÍTO
                </span>
              </h2>

              {/* Subtítulo EXATAMENTE como solicitado */}
              <p className="text-base sm:text-lg lg:text-xl text-[#AAB8CD] leading-relaxed mb-8 max-w-2xl">
                Construímos o protótipo da sua plataforma gratuitamente para que você tenha noção concreta da sua plataforma antes de ser construída.
              </p>

              {/* Pilares visuais da oferta (sem estatísticas inventadas) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-10 text-left">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                  <Eye className="w-5 h-5 text-[#00C8FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">Visualização Real</h3>
                    <p className="text-xs text-[#AAB8CD] mt-0.5">Veja seu produto antes do código.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                  <Layers className="w-5 h-5 text-[#FF8500] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">Arquitetura Clara</h3>
                    <p className="text-xs text-[#AAB8CD] mt-0.5">Fluxos pensados para seu usuário.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#00C8FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">Sem Compromisso</h3>
                    <p className="text-xs text-[#AAB8CD] mt-0.5">Segurança total na tomada de decisão.</p>
                  </div>
                </div>
              </div>

              {/* Botão de WhatsApp Específico para o Protótipo */}
              <a
                href={WHATSAPP_LINKS.prototipo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-[#030817] bg-gradient-to-r from-[#00C8FF] via-[#0066FF] to-[#FF8500] shadow-[0_0_35px_rgba(0,200,255,0.45)] hover:shadow-[0_0_45px_rgba(255,133,0,0.55)] transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8500]"
              >
                <MessageSquare className="w-5 h-5 fill-[#030817]" />
                <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Quero meu protótipo gratuito
                </span>
              </a>
            </div>

            {/* Coluna Visual: Protótipo Conceitual de Interface Digital (CSS Glass Composition) */}
            <div className="lg:col-span-5 relative">
              {/* Efeito de profundidade e perspectiva */}
              <div className="relative mx-auto max-w-[420px] rounded-2xl bg-[#030817]/90 border border-[#00C8FF]/30 p-5 shadow-2xl backdrop-blur-xl">
                {/* Barra do Protótipo */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF8500]/80" />
                    <span className="w-3 h-3 rounded-full bg-[#00C8FF]/80" />
                    <span className="w-3 h-3 rounded-full bg-[#0066FF]/80" />
                    <span className="text-[11px] font-mono text-[#AAB8CD] ml-2">
                      preview://prototipo-conceitual.veltrix
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#00C8FF]/20 text-[#00C8FF] uppercase">
                    Protótipo Interativo
                  </span>
                </div>

                {/* Camadas da Interface Conceitual */}
                <div className="space-y-3">
                  {/* Bloco Superior: Header do protótipo */}
                  <div className="h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between px-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-gradient-to-tr from-[#0066FF] to-[#00C8FF]" />
                      <div className="w-20 h-2.5 rounded bg-white/30" />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-12 h-2 rounded bg-white/20" />
                      <div className="w-12 h-2 rounded bg-white/20" />
                      <div className="w-14 h-5 rounded-md bg-[#00C8FF]/20 border border-[#00C8FF]/40" />
                    </div>
                  </div>

                  {/* Bloco Central: Hero & Visual do Sistema */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#07142B] to-[#030817] border border-[#00C8FF]/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-32 h-3 rounded bg-white/50" />
                      <span className="w-2 h-2 rounded-full bg-[#FF8500] animate-ping" />
                    </div>
                    <div className="w-48 h-2 rounded bg-white/20 mb-4" />
                    
                    {/* Gráficos conceituais de dados */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                        <div className="w-10 h-1.5 rounded bg-[#00C8FF]/60 mb-2" />
                        <div className="w-14 h-4 rounded bg-[#00C8FF]/20" />
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                        <div className="w-10 h-1.5 rounded bg-[#FF8500]/60 mb-2" />
                        <div className="w-14 h-4 rounded bg-[#FF8500]/20" />
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                        <div className="w-10 h-1.5 rounded bg-[#0066FF]/60 mb-2" />
                        <div className="w-14 h-4 rounded bg-[#0066FF]/20" />
                      </div>
                    </div>

                    {/* Linha de progresso visual */}
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-[#0066FF] via-[#00C8FF] to-[#FF8500]" />
                    </div>
                  </div>

                  {/* Bloco Inferior: Wireframe de Módulos */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                      <div className="w-16 h-2 rounded bg-white/30 mb-2" />
                      <div className="w-full h-8 rounded bg-white/[0.02] border border-dashed border-white/10 flex items-center justify-center">
                        <span className="text-[9px] text-[#AAB8CD]">Módulo do Cliente</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                      <div className="w-16 h-2 rounded bg-white/30 mb-2" />
                      <div className="w-full h-8 rounded bg-white/[0.02] border border-dashed border-white/10 flex items-center justify-center">
                        <span className="text-[9px] text-[#AAB8CD]">Painel Analítico</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Selo Flutuante */}
                <div className="absolute -bottom-4 -right-4 p-3 rounded-xl bg-[#07142B] border border-[#00C8FF]/40 shadow-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C8FF]" />
                  <span className="text-[11px] font-bold text-white">Etapa Inicial Gratuita</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
