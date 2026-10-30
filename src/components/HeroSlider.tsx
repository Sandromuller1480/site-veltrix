"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_LINKS } from "@/data/projetos";

const SLIDES = [
  {
    id: "sites",
    label: "Desenvolvimento\nde Sites",
    sublabel: "Criamos sites modernos, rápidos e com identidade visual alinhada ao seu negócio.",
    image: "/imagens/hero/desenvolvimento-de-sites.png",
    accent: "#00C8FF",
  },
  {
    id: "sistemas",
    label: "Desenvolvimento\nde Sistemas",
    sublabel: "Sistemas sob medida para automatizar processos e impulsionar sua operação.",
    image: "/imagens/hero/desenvolvimento-de-sistemas.png",
    accent: "#0066FF",
  },
  {
    id: "aplicativos",
    label: "Desenvolvimento\nde Aplicativos",
    sublabel: "Aplicativos iOS e Android com experiência fluida e design que converte.",
    image: "/imagens/hero/desenvolvimento-de-aplicativos.png",
    accent: "#FF8500",
  },
  {
    id: "prototipo",
    label: "Protótipo\nGratuíto",
    sublabel: "Receba uma demonstração interativa do seu produto antes de qualquer investimento.",
    image: "/imagens/hero/prototipo-gratuito.png",
    accent: "#00C8FF",
  },
];

const INTERVAL_MS = 5000; // 5 s por slide

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true); // controla fade-in / out
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Avança slide com fade-out → troca → fade-in
  const goTo = (next: number) => {
    setVisible(false);
    timeoutRef.current = setTimeout(() => {
      setCurrent(next);
      setVisible(true);
    }, 550); // metade da duração do CSS transition
  };

  // Auto-play em loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % SLIDES.length;
        goTo(next);
        return prev; // o estado real é atualizado dentro do goTo timeout
      });
    }, INTERVAL_MS);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slide = SLIDES[current];

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden"
      aria-label="Apresentação inicial da VELTRIX"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ─── Coluna Esquerda: Texto ─── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Badge de Identidade */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07142B]/90 border border-[#00C8FF]/25 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,200,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#00C8FF]">
                TECNOLOGIA COM IDENTIDADE
              </span>
              <span className="text-[#AAB8CD]/50 hidden sm:inline">•</span>
              <span className="text-xs text-[#AAB8CD] hidden sm:inline">VELTRIX Digital Solutions</span>
            </div>

            {/* Título dinâmico que muda com o slide */}
            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 whitespace-pre-line transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                filter: visible ? "blur(0px)" : "blur(8px)",
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.55s ease, filter 0.55s ease, transform 0.55s ease",
              }}
            >
              {slide.label.split("\n").map((line, i) =>
                i === 1 ? (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-[#00C8FF] via-[#0066FF] to-[#FF8500] bg-clip-text text-transparent"
                  >
                    {line}
                  </span>
                ) : (
                  <span key={i}>{line}<br /></span>
                )
              )}
            </h1>

            {/* Subtexto dinâmico */}
            <p
              className="text-base sm:text-lg text-[#AAB8CD] leading-relaxed max-w-xl mb-8"
              style={{
                opacity: visible ? 1 : 0,
                filter: visible ? "blur(0px)" : "blur(6px)",
                transform: visible ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.55s ease 0.06s, filter 0.55s ease 0.06s, transform 0.55s ease 0.06s",
              }}
            >
              {slide.sublabel}
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href="#projetos"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#07142B] border border-[#00C8FF]/40 hover:border-[#00C8FF] hover:bg-[#0066FF]/15 transition-all duration-300 shadow-[0_4px_20px_rgba(0,102,255,0.2)] hover:shadow-[0_4px_25px_rgba(0,200,255,0.35)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF]"
              >
                <span>Conhecer projetos</span>
                <ArrowRight className="w-4 h-4 text-[#00C8FF]" />
              </Link>

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

            {/* Dots de navegação */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Navegação dos slides">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Slide ${s.label.replace("\n", " ")}`}
                  onClick={() => goTo(i)}
                  className="group relative h-1 rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF]"
                  style={{ width: i === current ? 32 : 12, background: "rgba(255,255,255,0.15)" }}
                >
                  {i === current && (
                    <span
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ background: slide.accent, width: "100%", animation: `slideProgress ${INTERVAL_MS}ms linear` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ─── Coluna Direita: Imagem com fade+blur ─── */}
          <div className="relative flex justify-center items-center">
            {/* Halo de luz de fundo */}
            <div
              className="absolute inset-0 rounded-3xl blur-[80px] opacity-40 -z-10 transition-colors duration-1000"
              style={{ background: `radial-gradient(ellipse at center, ${slide.accent}55 0%, transparent 70%)` }}
            />

            {/* Container da imagem */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10">
              <Image
                key={slide.id} /* força remount p/ animação a cada slide */
                src={slide.image}
                alt={slide.label.replace("\n", " ")}
                width={1456}
                height={816}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto block hero-slide-img"
                priority={current === 0}
                loading={current === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Keyframes injetados via style tag */}
      <style>{`
        @keyframes slideProgress {
          from { width: 0% }
          to   { width: 100% }
        }
        .hero-slide-img {
          animation: heroFadeIn 0.65s ease both;
        }
        @keyframes heroFadeIn {
          from {
            opacity: 0;
            filter: blur(14px);
            transform: scale(1.03);
          }
          to {
            opacity: 1;
            filter: blur(0px);
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
