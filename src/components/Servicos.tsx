import { Globe, Smartphone, Database, ShoppingBag, Layers, Layout, ArrowUpRight } from "lucide-react";
import { WHATSAPP_LINKS } from "@/data/projetos";

const SERVICOS = [
  {
    icon: Globe,
    title: "Sites institucionais",
    description: "Sites para apresentar empresas, serviços e informações de contato.",
    tag: "Presença & Autoridade",
    accent: "text-[#00C8FF]",
    border: "group-hover:border-[#00C8FF]/50",
    gradient: "from-[#0066FF]/20 to-[#00C8FF]/10",
  },
  {
    icon: Smartphone,
    title: "Aplicativos",
    description: "Experiências digitais adaptadas às necessidades de clientes, equipes e negócios.",
    tag: "Mobile iOS & Android",
    accent: "text-[#0066FF]",
    border: "group-hover:border-[#0066FF]/50",
    gradient: "from-[#00C8FF]/20 to-[#0066FF]/10",
  },
  {
    icon: Database,
    title: "Sistemas de gestão",
    description: "Plataformas para organizar informações e processos de empresas.",
    tag: "Eficiência & Controle",
    accent: "text-[#FF8500]",
    border: "group-hover:border-[#FF8500]/50",
    gradient: "from-[#FF8500]/20 to-[#FF8500]/05",
  },
  {
    icon: ShoppingBag,
    title: "Lojas virtuais",
    description: "Vitrines e experiências digitais para apresentação e venda de produtos.",
    tag: "E-commerce Moderno",
    accent: "text-[#00C8FF]",
    border: "group-hover:border-[#00C8FF]/50",
    gradient: "from-[#0066FF]/20 to-[#00C8FF]/10",
  },
  {
    icon: Layers,
    title: "Plataformas personalizadas",
    description: "Soluções desenvolvidas para ideias e necessidades específicas.",
    tag: "Sob Demanda",
    accent: "text-[#FF8500]",
    border: "group-hover:border-[#FF8500]/50",
    gradient: "from-[#FF8500]/20 to-[#00C8FF]/10",
  },
  {
    icon: Layout,
    title: "Design de interfaces",
    description: "Criação de interfaces modernas, claras e alinhadas à identidade da marca.",
    tag: "UI / UX Design",
    accent: "text-[#00C8FF]",
    border: "group-hover:border-[#00C8FF]/50",
    gradient: "from-[#00C8FF]/20 to-[#0066FF]/10",
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="py-24 relative overflow-hidden bg-[#07142B]/30"
      aria-label="Serviços oferecidos pela VELTRIX"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07142B] border border-[#00C8FF]/20 text-[#00C8FF] text-xs font-semibold uppercase tracking-wider mb-4">
            Nossos Serviços
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Soluções digitais para cada etapa do seu negócio.
          </h2>

          <p className="text-base sm:text-lg text-[#AAB8CD] leading-relaxed">
            Da presença digital à organização dos processos da sua empresa, desenvolvemos experiências alinhadas às suas necessidades.
          </p>
        </div>

        {/* Grade com 6 Cards de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICOS.map((servico, index) => {
            const Icon = servico.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-[#07142B]/60 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#0066FF]/15 flex flex-col justify-between ${servico.border}`}
              >
                {/* Glow de fundo no card */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${servico.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#030817] border border-white/10 text-white shadow-inner group-hover:scale-105 transition-transform duration-300">
                      <Icon className={`w-7 h-7 ${servico.accent}`} />
                    </div>

                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#AAB8CD] uppercase tracking-wider">
                      {servico.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-[#00C8FF] transition-colors">
                    {servico.title}
                  </h3>

                  <p className="text-sm text-[#AAB8CD] leading-relaxed mb-6">
                    {servico.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#AAB8CD] group-hover:text-white transition-colors">
                    Conversar sobre este serviço
                  </span>
                  <a
                    href={WHATSAPP_LINKS.geral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 group-hover:bg-[#00C8FF] text-[#AAB8CD] group-hover:text-[#030817] transition-all"
                    aria-label={`Conversar sobre ${servico.title} no WhatsApp`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
