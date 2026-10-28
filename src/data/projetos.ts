export interface Projeto {
  id: string;
  nome: string;
  segmento: string;
  descricao: string;
  etiquetas: string[];
  imagem: string;
  linkPublico?: string; // Preencha com o link oficial quando disponível (ex: https://meuprojeto.com.br)
  emBreve?: boolean;    // Se true, exibe "Link público em breve" e botão para WhatsApp
  destaque?: boolean;
}

export const WHATSAPP_NUMBER = "5565996923551";
export const WHATSAPP_DISPLAY = "(65) 99692-3551";

export const WHATSAPP_LINKS = {
  geral: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Conheci a VELTRIX pelo site e gostaria de conversar sobre um projeto."
  )}`,
  prototipo: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Conheci a VELTRIX pelo site e gostaria de conversar sobre um protótipo gratuito para minha plataforma."
  )}`,
  projeto: (nomeProjeto: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Olá! Conheci a VELTRIX pelo site e gostaria de conversar sobre o projeto ${nomeProjeto}.`
    )}`,
};

export const projetos: Projeto[] = [
  {
    id: "harmonie-odonto",
    nome: "Harmonie Odonto",
    segmento: "Odontologia e estética facial",
    descricao:
      "Plataforma digital voltada à organização e à gestão de serviços odontológicos e de estética facial, com uma experiência visual alinhada ao segmento de saúde.",
    etiquetas: ["Saúde", "Gestão", "Plataforma digital"],
    imagem: "/imagens/projetos/harmonie-odonto.svg",
    linkPublico: "https://harmonie-odonto.vercel.app/",
    emBreve: false,
    destaque: true,
  },
  {
    id: "tecnomotos",
    nome: "TECNOMOTOS",
    segmento: "Oficina e comércio de motocicletas",
    descricao:
      "Solução digital para uma empresa do setor de motocicletas, reunindo apresentação de produtos e recursos de gestão para apoiar as atividades do negócio.",
    etiquetas: ["E-commerce", "Gestão", "Motocicletas"],
    imagem: "/imagens/projetos/tecnomotos.svg",
    linkPublico: "https://tecnomotos-jdsx.vercel.app/",
    emBreve: false,
    destaque: true,
  },
  {
    id: "pintor-premium",
    nome: "Pintor Premium",
    segmento: "Pintura e fidelização",
    descricao:
      "Plataforma voltada ao relacionamento entre lojas e profissionais de pintura, com uma proposta de fidelização e benefícios.",
    etiquetas: ["Fidelização", "Plataforma", "Pintura"],
    imagem: "/imagens/projetos/pintor-premium.svg",
    linkPublico: "https://www.pintorpremium.com/",
    emBreve: false,
    destaque: false,
  },
  {
    id: "pintor-pro",
    nome: "Pintor Pro",
    segmento: "Serviços de pintura",
    descricao:
      "Plataforma criada para aproximar clientes e profissionais de pintura, facilitando a apresentação dos serviços e o contato entre as partes.",
    etiquetas: ["Marketplace", "Pintura", "Serviços"],
    imagem: "/imagens/projetos/pintor-pro.svg",
    // Link público em breve - insira a URL pública final quando estiver disponível:
    linkPublico: undefined,
    emBreve: true,
    destaque: false,
  },
  {
    id: "trabalhe-livre",
    nome: "Trabalhe Livre",
    segmento: "Plataforma digital",
    descricao:
      "Projeto digital desenvolvido pela VELTRIX. Mais informações serão apresentadas em breve.",
    etiquetas: ["Plataforma digital", "Solução personalizada"],
    imagem: "/imagens/projetos/trabalhe-livre.svg",
    // Link público em breve - insira a URL pública final quando estiver disponível:
    linkPublico: undefined,
    emBreve: true,
    destaque: false,
  },
];
