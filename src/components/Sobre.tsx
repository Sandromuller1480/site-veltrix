import { Sliders, Palette, Smartphone, TrendingUp } from "lucide-react";

const DIFERENCIAIS = [
  {
    icon: Sliders,
    title: "Soluções personalizadas",
    description: "Projetos planejados conforme os objetivos de cada cliente.",
    color: "from-[#0066FF] to-[#00C8FF]",
    glow: "group-hover:border-[#00C8FF]/40",
  },
  {
    icon: Palette,
    title: "Design e tecnologia",
    description: "Interfaces pensadas para unir apresentação visual e facilidade de uso.",
    color: "from-[#00C8FF] to-[#0066FF]",
    glow: "group-hover:border-[#00C8FF]/40",
  },
  {
    icon: Smartphone,
    title: "Experiência responsiva",
    description: "Adaptação para diferentes tamanhos de tela.",
    color: "from-[#FF8500] to-[#FFAA33]",
    glow: "group-hover:border-[#FF8500]/40",
  },
  {
    icon: TrendingUp,
    title: "Visão de negócio",
    description: "Desenvolvimento orientado às necessidades de cada empresa.",
    color: "from-[#00C8FF] to-[#FF8500]",
    glow: "group-hover:border-[#00C8FF]/40",
  },
];

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-24 relative overflow-hidden"
      aria-label="Sobre a VELTRIX"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07142B] border border-[#00C8FF]/20 text-[#00C8FF] text-xs font-semibold uppercase tracking-wider mb-4">
            Sobre a VELTRIX
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ideias ganham forma. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00C8FF] to-[#FF8500] bg-clip-text text-transparent">
              Negócios ganham soluções.
            </span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#AAB8CD] leading-relaxed">
            <p>
              A VELTRIX nasceu para transformar ideias em experiências digitais. Criamos soluções que combinam tecnologia, design e funcionalidade, sempre considerando as necessidades de cada projeto e de cada negócio.
            </p>
            <p className="text-white/90 font-medium">
              De um site institucional a uma plataforma de gestão, nosso objetivo é desenvolver produtos digitais com identidade e propósito.
            </p>
          </div>
        </div>

        {/* 4 Cards de Diferenciais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFERENCIAIS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative p-7 rounded-2xl bg-[#07142B]/70 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0066FF]/10 ${item.glow}`}
              >
                {/* Ícone com gradiente */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.color} text-[#030817] mb-5 shadow-lg shadow-black/30 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-[#00C8FF] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#AAB8CD] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
