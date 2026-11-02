"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_LINKS } from "@/data/projetos";

const SLIDES = [
  {
    id: "sites",
    label: "Desenvolvimento\nde Sites",
    sublabel:
      "Criamos sites modernos, rápidos e com identidade visual alinhada ao seu negócio.",
    image: "/imagens/hero/desenvolvimento-de-sites.png",
    accent: "#00C8FF",
  },
  {
    id: "sistemas",
    label: "Desenvolvimento\nde Sistemas",
    sublabel:
      "Sistemas sob medida para automatizar processos e impulsionar sua operação.",
    image: "/imagens/hero/desenvolvimento-de-sistemas.png",
    accent: "#0066FF",
  },
  {
    id: "aplicativos",
    label: "Desenvolvimento\nde Aplicativos",
    sublabel:
      "Aplicativos iOS e Android com experiência fluida e design que converte.",
    image: "/imagens/hero/desenvolvimento-de-aplicativos.png",
    accent: "#FF8500",
  },
  {
    id: "prototipo",
    label: "Protótipo\nGratuíto",
    sublabel:
      "Receba uma demonstração interativa do seu produto antes de qualquer investimento.",
    image: "/imagens/hero/prototipo-gratuito.png",
    accent: "#00C8FF",
  },
];

const INTERVAL_MS = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    // reset & restart interval on manual nav
    if (intervalRef.current) clearInterval(intervalRef.current);
    setVisible(false);
    timeoutRef.current = setTimeout(() => {
      setCurrent(next);
      setVisible(true);
    }, 550);
  }, []);

  // Auto-play loop
  useEffect(() => {
    const tick = () => {
      setCurrent((prev) => {
        const next = (prev + 1) % SLIDES.length;
        setVisible(false);
        timeoutRef.current = setTimeout(() => {
          setCurrent(next);
          setVisible(true);
        }, 550);
        return prev;
      });
    };

    intervalRef.current = setInterval(tick, INTERVAL_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const slide = SLIDES[current];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      aria-label="Apresentação inicial da VELTRIX"
    >
      {/* ══════════════════════════════════════════════
          DESKTOP: imagem full-bleed + texto sobreposto
          ══════════════════════════════════════════════ */}
      <div className="hidden lg:block relative w-full" style={{ minHeight: "92vh" }}>

        {/* Imagem de fundo – cobre 100% da section */}
        <Image
          key={slide.id}
          src={slide.image}
          alt={slide.label.replace("\n", " ")}
          fill
          sizes="100vw"
          className="object-cover object-center hero-slide-img"
          priority={current === 0}
          quality={90}
        />

        {/* Gradiente escuro sobre a esquerda para legibilidade do texto */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(3,8,23,0.92) 0%, rgba(3,8,23,0.80) 40%, rgba(3,8,23,0.35) 65%, transparent 100%)",
          }}
        />

        {/* Gradiente sutil no rodapé para integrar com a próxima seção */}
        <div
          className="absolute bottom-0 inset-x-0 h-28 z-10"
          style={{ background: "linear-gradient(to top, #030817, transparent)" }}
        />

        {/* Conteúdo sobreposto (esquerda) */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full pt-28">
            <div className="max-w-xl">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07142B]/80 border border-[#00C8FF]/30 backdrop-blur-md mb-7 shadow-[0_0_20px_rgba(0,200,255,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-[#00C8FF]">
                  TECNOLOGIA COM IDENTIDADE
                </span>
                <span className="text-[#AAB8CD]/50">•</span>
                <span className="text-xs text-[#AAB8CD]">VELTRIX Digital Solutions</span>
              </div>

              {/* Título dinâmico */}
              <h1
                className="font-heading text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-5"
                style={{
                  opacity: visible ? 1 : 0,
                  filter: visible ? "blur(0px)" : "blur(10px)",
                  transform: visible ? "translateY(0)" : "translateY(14px)",
                  transition:
                    "opacity 0.55s ease, filter 0.55s ease, transform 0.55s ease",
                }}
              >
                {slide.label.split("\n").map((line, i) =>
                  i === 1 ? (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-[#00C8FF] via-[#0066FF] to-[#FF8500] bg-clip-text text-transparent block"
                    >
                      {line}
                    </span>
                  ) : (
                    <span key={i} className="block">
                      {line}
                    </span>
                  )
                )}
              </h1>

              {/* Subtexto */}
              <p
                className="text-lg text-[#C8D8EC] leading-relaxed mb-9"
                style={{
                  opacity: visible ? 1 : 0,
                  filter: visible ? "blur(0px)" : "blur(6px)",
                  transform: visible ? "translateY(0)" : "translateY(8px)",
                  transition:
                    "opacity 0.55s ease 0.07s, filter 0.55s ease 0.07s, transform 0.55s ease 0.07s",
                }}
              >
                {slide.sublabel}
              </p>

              {/* Botões */}
              <div className="flex flex-row items-center gap-4 mb-10">
                <Link
                  href="#projetos"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#07142B]/80 border border-[#00C8FF]/40 hover:border-[#00C8FF] hover:bg-[#0066FF]/20 transition-all duration-300 backdrop-blur-md shadow-[0_4px_20px_rgba(0,102,255,0.2)] hover:shadow-[0_4px_25px_rgba(0,200,255,0.35)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF]"
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
                    className="relative h-1 rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF]"
                    style={{
                      width: i === current ? 36 : 12,
                      background: "rgba(255,255,255,0.20)",
                    }}
                  >
                    {i === current && (
                      <span
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{
                          background: slide.accent,
                          animation: `slideProgress ${INTERVAL_MS}ms linear`,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          MOBILE / TABLET: layout empilhado
          ══════════════════════════════════════════════ */}
      <div className="lg:hidden flex flex-col pt-28 pb-16 px-4 sm:px-6">

        {/* Badge */}
        <div className="inline-flex self-center items-center gap-2 px-4 py-1.5 rounded-full bg-[#07142B]/90 border border-[#00C8FF]/25 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,200,255,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-[#00C8FF]">
            TECNOLOGIA COM IDENTIDADE
          </span>
        </div>

        {/* Título */}
        <h1
          className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 text-center"
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
                className="bg-gradient-to-r from-[#00C8FF] via-[#0066FF] to-[#FF8500] bg-clip-text text-transparent block"
              >
                {line}
              </span>
            ) : (
              <span key={i} className="block">{line}</span>
            )
          )}
        </h1>

        {/* Subtexto */}
        <p
          className="text-base text-[#AAB8CD] leading-relaxed mb-8 text-center"
          style={{
            opacity: visible ? 1 : 0,
            filter: visible ? "blur(0px)" : "blur(6px)",
            transform: visible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.55s ease 0.07s, filter 0.55s ease 0.07s, transform 0.55s ease 0.07s",
          }}
        >
          {slide.sublabel}
        </p>

        {/* Imagem */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 mb-8">
          <Image
            key={`mob-${slide.id}`}
            src={slide.image}
            alt={slide.label.replace("\n", " ")}
            width={1456}
            height={816}
            sizes="100vw"
            className="w-full h-auto block hero-slide-img"
            priority={current === 0}
          />
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
          <Link
            href="#projetos"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#07142B] border border-[#00C8FF]/40 hover:border-[#00C8FF] hover:bg-[#0066FF]/15 transition-all duration-300 shadow-[0_4px_20px_rgba(0,102,255,0.2)] hover:-translate-y-0.5 focus:outline-none"
          >
            <span>Conhecer projetos</span>
            <ArrowRight className="w-4 h-4 text-[#00C8FF]" />
          </Link>

          <a
            href={WHATSAPP_LINKS.geral}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#00C8FF] transition-all duration-300 shadow-[0_4px_25px_rgba(0,200,255,0.4)] hover:-translate-y-0.5 hover:brightness-110 focus:outline-none"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Conversar no WhatsApp</span>
          </a>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2" role="tablist">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${s.label.replace("\n", " ")}`}
              onClick={() => goTo(i)}
              className="relative h-1 rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
              style={{
                width: i === current ? 36 : 12,
                background: "rgba(255,255,255,0.18)",
              }}
            >
              {i === current && (
                <span
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: slide.accent,
                    animation: `slideProgress ${INTERVAL_MS}ms linear`,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes slideProgress {
          from { width: 0% }
          to   { width: 100% }
        }
        .hero-slide-img {
          animation: heroFadeIn 0.7s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes heroFadeIn {
          from {
            opacity: 0;
            filter: blur(16px);
            transform: scale(1.04);
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
