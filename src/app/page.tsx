import Header from "@/components/Header";
import ParallaxBackground from "@/components/ParallaxBackground";
import HeroSlider from "@/components/HeroSlider";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import PrototipoGratuito from "@/components/PrototipoGratuito";
import Projetos from "@/components/Projetos";
import Processo from "@/components/Processo";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030817] text-white selection:bg-[#00C8FF]/20 selection:text-[#00C8FF]">
      {/* Background Parallax */}
      <ParallaxBackground />

      {/* Header Fixo com Glassmorphism */}
      <Header />

      {/* Conteúdo Principal com todas as seções institucionais */}
      <main id="conteudo-principal">
        {/* 1. Hero */}
        <HeroSlider />

        {/* 2. Sobre a VELTRIX */}
        <Sobre />

        {/* 3. Serviços */}
        <Servicos />

        {/* 4. Destaque: Protótipo Gratuito */}
        <PrototipoGratuito />

        {/* 5. Projetos (Portfólio) */}
        <Projetos />

        {/* 6. Processo de Desenvolvimento */}
        <Processo />

        {/* 7. Contato */}
        <Contato />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
