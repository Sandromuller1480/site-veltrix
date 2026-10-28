import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, Sparkles, Code2, Smartphone, Globe, Gamepad2 } from "lucide-react";
import { WHATSAPP_LINKS } from "@/data/projetos";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden"
      aria-label="Apresentação inicial da VELTRIX"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna de Texto & Conteúdo Principal */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Tag / Badge de Identidade */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07142B]/90 border border-[#00C8FF]/25 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,200,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#00C8FF]">
                TECNOLOGIA COM IDENTIDADE
              </span>
              <span className="text-[#AAB8CD]/50 hidden sm:inline">•</span>
              <span className="text-xs text-[#AAB8CD] hidden sm:inline">VELTRIX Digital Solutions</span>
            </div>

            {/* Título Principal Exato */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Tecnologia com{" "}
              <span className="bg-gradient-to-r from-[#00C8FF] via-[#0066FF] to-[#FF8500] bg-clip-text text-transparent">
                identidade
              </span>{" "}
              para transformar suas ideias em realidade.
            </h1>

            {/* Texto Complementar Exato */}
            <p className="text-base sm:text-lg lg:text-xl text-[#AAB8CD] leading-relaxed max-w-2xl mb-8">
              Desenvolvemos sites, aplicativos e sistemas que unem criatividade, funcionalidade e soluções pensadas para o seu negócio.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              {/* Botão 1: Conhecer projetos */}
              <Link
                href="#projetos"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#07142B] border border-[#00C8FF]/40 hover:border-[#00C8FF] hover:bg-[#0066FF]/15 transition-all duration-300 shadow-[0_4px_20px_rgba(0,102,255,0.2)] hover:shadow-[0_4px_25px_rgba(0,200,255,0.35)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF]"
              >
                <span>Conhecer projetos</span>
                <ArrowRight className="w-4 h-4 text-[#00C8FF]" />
              </Link>

              {/* Botão 2: Conversar no WhatsApp */}
              <a
                href={WHATSAPP_LINKS.geral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#00C8FF] transition-all duration-300 shadow-[0_4px_25px_rgba(0,200,255,0.4)] hover:shadow-[0_6px_30px_rgba(0,200,255,0.6)] hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

            {/* 4 Frentes de Especialidade da VELTRIX */}
            <div className="w-full pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02]">
                <div className="p-1.5 rounded-md bg-[#0066FF]/15 text-[#00C8FF]">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-[11px] leading-tight">
                  <p className="font-semibold text-white">Software</p>
                  <p className="text-[#AAB8CD]">Sob medida</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02]">
                <div className="p-1.5 rounded-md bg-[#00C8FF]/15 text-[#00C8FF]">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div className="text-[11px] leading-tight">
                  <p className="font-semibold text-white">Aplicativos</p>
                  <p className="text-[#AAB8CD]">iOS &amp; Android</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02]">
                <div className="p-1.5 rounded-md bg-[#FF8500]/15 text-[#FF8500]">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="text-[11px] leading-tight">
                  <p className="font-semibold text-white">Web &amp; Portais</p>
                  <p className="text-[#AAB8CD]">Alta conversão</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02]">
                <div className="p-1.5 rounded-md bg-[#0066FF]/15 text-[#00C8FF]">
                  <Gamepad2 className="w-4 h-4" />
                </div>
                <div className="text-[11px] leading-tight">
                  <p className="font-semibold text-white">Interativos</p>
                  <p className="text-[#AAB8CD]">Engajamento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Visual: Símbolo 3D & Cartão Tecnológico */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Halo de luzes tridimensionais */}
            <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#0066FF]/25 via-[#00C8FF]/20 to-[#FF8500]/15 blur-[90px] -z-10" />

            <div className="relative w-full max-w-[420px] sm:max-w-[460px] p-6 sm:p-8 rounded-3xl bg-[#07142B]/75 border border-[#00C8FF]/25 backdrop-blur-xl shadow-2xl shadow-black/60">
              {/* Moldura de canto decorativa */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#00C8FF]/50" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#FF8500]/50" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#0066FF]/50" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#00C8FF]/50" />

              {/* Símbolo 3D com Iluminação */}
              <div className="relative w-full h-[260px] sm:h-[300px] flex items-center justify-center mb-6">
                <Image
                  src="/imagens/marca/simbolo-veltrix-transparente.png"
                  alt="Símbolo oficial VELTRIX com iluminação azul, ciano e laranja"
                  fill
                  sizes="(max-width: 640px) 280px, 340px"
                  className="object-contain drop-shadow-[0_0_35px_rgba(0,200,255,0.45)] hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Card de Informação com Efeito Glass */}
              <div className="p-4 rounded-2xl bg-[#030817]/80 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FF8500]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-white">
                      Solução Inteligente
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00C8FF]/15 text-[#00C8FF] border border-[#00C8FF]/30">
                    Protótipo 100% Gratuito
                  </span>
                </div>
                <p className="text-xs text-[#AAB8CD] leading-snug">
                  Criamos soluções digitais inteligentes para um mundo em constante evolução.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
