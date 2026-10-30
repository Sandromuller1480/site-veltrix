import Image from "next/image";
import { ExternalLink, Clock, MessageSquare } from "lucide-react";
import { projetos, WHATSAPP_LINKS } from "@/data/projetos";

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="py-24 relative overflow-hidden"
      aria-label="Portfólio de projetos da VELTRIX"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07142B] border border-[#00C8FF]/20 text-[#00C8FF] text-xs font-semibold uppercase tracking-wider mb-4">
            Portfólio &amp; Casos de Uso
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Projetos que transformam ideias em experiências digitais.
          </h2>

          <p className="text-base sm:text-lg text-[#AAB8CD] leading-relaxed">
            Conheça algumas das soluções desenvolvidas pela VELTRIX para diferentes segmentos e necessidades.
          </p>
        </div>

        {/* Grade de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto) => {
            const hasPublicLink = Boolean(projeto.linkPublico && !projeto.emBreve);

            return (
              <article
                key={projeto.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#07142B]/75 border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00C8FF]/40 hover:shadow-2xl hover:shadow-[#0066FF]/20"
              >
                <div>
                  {/* Capa do Projeto */}
                  {hasPublicLink && projeto.linkPublico ? (
                    <a
                      href={projeto.linkPublico}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full bg-[#030817] overflow-hidden border-b border-white/10 cursor-pointer"
                      tabIndex={-1}
                      aria-label={`Acessar plataforma ${projeto.nome}`}
                    >
                      <Image
                        src={projeto.imagem}
                        alt={`Apresentação da solução ${projeto.nome}`}
                        width={1900}
                        height={867}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-auto block transition-all duration-300 group-hover:brightness-105"
                        loading="lazy"
                      />

                      {/* Badge de Segmento sobre a imagem */}
                      <div className="absolute top-3 left-3 z-10 pointer-events-none">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#030817]/85 border border-[#00C8FF]/30 text-[#00C8FF] backdrop-blur-md shadow-md">
                          {projeto.segmento}
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div className="relative w-full bg-[#030817] overflow-hidden border-b border-white/10">
                      <Image
                        src={projeto.imagem}
                        alt={`Apresentação da solução ${projeto.nome}`}
                        width={1900}
                        height={867}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-auto block transition-all duration-300 group-hover:brightness-105"
                        loading="lazy"
                      />

                      {/* Badge de Segmento sobre a imagem */}
                      <div className="absolute top-3 left-3 z-10 pointer-events-none">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#030817]/85 border border-[#00C8FF]/30 text-[#00C8FF] backdrop-blur-md shadow-md">
                          {projeto.segmento}
                        </span>
                      </div>

                      {/* Indicador de Disponibilidade */}
                      {projeto.emBreve && (
                        <div className="absolute top-3 right-3 z-10 pointer-events-none">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FF8500]/20 border border-[#FF8500]/40 text-[#FF8500] backdrop-blur-md">
                            <Clock className="w-3 h-3" />
                            Link público em breve
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Informações do Projeto */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-[#00C8FF] transition-colors">
                      {hasPublicLink && projeto.linkPublico ? (
                        <a
                          href={projeto.linkPublico}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline focus:outline-none"
                        >
                          {projeto.nome}
                        </a>
                      ) : (
                        projeto.nome
                      )}
                    </h3>

                    <p className="text-sm text-[#AAB8CD] leading-relaxed mb-6">
                      {projeto.descricao}
                    </p>

                    {/* Etiquetas / Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {projeto.etiquetas.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[#AAB8CD]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botões de Ação na base do card */}
                <div className="p-6 pt-0">
                  {hasPublicLink && projeto.linkPublico ? (
                    <a
                      href={projeto.linkPublico}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#0066FF] to-[#00C8FF] hover:brightness-110 shadow-[0_4px_16px_rgba(0,102,255,0.3)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8FF]"
                    >
                      <span>Conhecer projeto</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-[#AAB8CD]">
                        <Clock className="w-3.5 h-3.5 text-[#FF8500]" />
                        <span>Link público em breve</span>
                      </div>
                      <a
                        href={WHATSAPP_LINKS.projeto(projeto.nome)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold bg-[#00C8FF]/15 border border-[#00C8FF]/30 text-[#00C8FF] hover:bg-[#00C8FF]/25 transition-colors"
                        title={`Conversar sobre o projeto ${projeto.nome} no WhatsApp`}
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Conversar</span>
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
