import { MessageCircle, Compass, Code2, CheckCheck, Rocket } from "lucide-react";

const ETAPAS = [
  {
    numero: "01",
    titulo: "Conversa inicial",
    descricao: "Entendimento da ideia, das necessidades e dos objetivos do cliente.",
    icon: MessageCircle,
    cor: "text-[#00C8FF]",
    borda: "border-[#00C8FF]/30",
  },
  {
    numero: "02",
    titulo: "Planejamento",
    descricao: "Definição das funcionalidades, da estrutura e da proposta visual.",
    icon: Compass,
    cor: "text-[#0066FF]",
    borda: "border-[#0066FF]/30",
  },
  {
    numero: "03",
    titulo: "Design e desenvolvimento",
    descricao: "Criação da interface e desenvolvimento da solução planejada.",
    icon: Code2,
    cor: "text-[#FF8500]",
    borda: "border-[#FF8500]/30",
  },
  {
    numero: "04",
    titulo: "Revisão e ajustes",
    descricao: "Apresentação do projeto e realização dos ajustes combinados.",
    icon: CheckCheck,
    cor: "text-[#00C8FF]",
    borda: "border-[#00C8FF]/30",
  },
  {
    numero: "05",
    titulo: "Publicação",
    descricao: "Preparação da solução para ser disponibilizada ao público.",
    icon: Rocket,
    cor: "text-[#FF8500]",
    borda: "border-[#FF8500]/30",
  },
];

export default function Processo() {
  return (
    <section
      id="processo"
      className="py-24 relative overflow-hidden bg-[#07142B]/20"
      aria-label="Processo de desenvolvimento da VELTRIX"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07142B] border border-[#00C8FF]/20 text-[#00C8FF] text-xs font-semibold uppercase tracking-wider mb-4">
            Metodologia
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Da ideia à presença digital.
          </h2>

          <p className="text-base sm:text-lg text-[#AAB8CD] leading-relaxed">
            Cada projeto passa por etapas pensadas para transformar necessidades em uma solução digital.
          </p>
        </div>

        {/* Linha do Tempo / Etapas */}
        <div className="relative">
          {/* Linha conectora no Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-8 bg-gradient-to-r from-[#0066FF] via-[#00C8FF] to-[#FF8500] opacity-25 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {ETAPAS.map((etapa, index) => {
              const Icon = etapa.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-[#07142B]/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-[#00C8FF]/50 hover:shadow-xl hover:shadow-[#0066FF]/15"
                >
                  <div>
                    {/* Número e Ícone */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-heading text-2xl font-black text-white/20 group-hover:text-white/60 transition-colors">
                        {etapa.numero}
                      </span>
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-[#030817] border ${etapa.borda} shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-5 h-5 ${etapa.cor}`} />
                      </div>
                    </div>

                    {/* Título da Etapa */}
                    <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-[#00C8FF] transition-colors">
                      {etapa.titulo}
                    </h3>

                    {/* Descrição da Etapa */}
                    <p className="text-sm text-[#AAB8CD] leading-relaxed">
                      {etapa.descricao}
                    </p>
                  </div>

                  {/* Pequena tag de status */}
                  <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#AAB8CD]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF]/60" />
                    <span>Fase {etapa.numero}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
