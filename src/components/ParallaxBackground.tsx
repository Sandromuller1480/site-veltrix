"use client";

import { useEffect, useState } from "react";

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verificar preferência de redução de movimento
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    motionQuery.addEventListener("change", handleMotionChange);

    // Verificar se é dispositivo móvel (simplificar efeito)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    let animationFrameId: number;

    const handleScroll = () => {
      if (motionQuery.matches || window.innerWidth < 768) return;
      animationFrameId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Parallax suave: fator de 0.15 para desktop, 0 para mobile/reduced-motion
  const translateY = isReducedMotion || isMobile ? 0 : scrollY * 0.12;

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Camada de fundo Parallax */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[120%] h-[130%] transition-transform ease-out will-change-transform"
        style={{
          transform: `translate3d(0, -${translateY}px, 0)`,
        }}
      >
        {/* Imagem de Fundo Tecnológico */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
          style={{
            backgroundImage: "url('/imagens/fundos/veltrix-tecnologia.svg')",
          }}
        />

        {/* Orbes e Iluminação de Fundo */}
        {/* Glow Ciano superior direito */}
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#00C8FF]/10 blur-[130px]" />
        
        {/* Glow Azul profundo central */}
        <div className="absolute top-[35%] left-[10%] w-[700px] h-[700px] rounded-full bg-[#0066FF]/12 blur-[150px]" />

        {/* Glow Laranja sutil na transição inferior */}
        <div className="absolute top-[65%] right-[20%] w-[500px] h-[500px] rounded-full bg-[#FF8500]/08 blur-[140px]" />

        {/* Grade de perspectiva tecnológica */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #00C8FF 1px, transparent 1px),
                              linear-gradient(to bottom, #00C8FF 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Sobreposição escura elegante para garantir contraste perfeito em todos os textos */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030817]/85 via-[#030817]/90 to-[#030817]" />
    </div>
  );
}
