# VELTRIX — Site Institucional e Portfólio

> **Tecnologia com identidade.**  
> Desenvolvimento de sites, aplicativos, sistemas de gestão e plataformas digitais personalizadas.

Este é o repositório oficial do site institucional e portfólio da **VELTRIX**, desenvolvido em **Next.js**, **TypeScript** e **Tailwind CSS**, pronto para execução local e publicação na **Vercel**.

---

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Tipografia:** Google Fonts (`Sora` para títulos e `Inter` para textos)
- **Hospedagem:** [Vercel](https://vercel.com/)

---

## 🎨 Identidade Visual e Cores

O projeto segue estritamente a identidade visual da VELTRIX:

| Aplicação | Cor / Token | Código Hex / RGB |
| :--- | :--- | :--- |
| **Fundo Principal** | `--color-veltrix-bg` | `#030817` |
| **Fundo Secundário** | `--color-veltrix-navy` | `#07142B` |
| **Superfície Cards** | `--color-veltrix-card` | `rgba(7, 20, 43, 0.65)` |
| **Azul Intenso** | `--color-veltrix-blue` | `#0066FF` |
| **Ciano Tecnológico**| `--color-veltrix-cyan` | `#00C8FF` |
| **Laranja Destaque** | `--color-veltrix-orange` | `#FF8500` |
| **Texto Principal** | `--color-veltrix-text` | `#FFFFFF` |
| **Texto Secundário** | `--color-veltrix-muted` | `#AAB8CD` |

---

## 📁 Estrutura de Arquivos

```text
codigo-site-veltrix/
├── public/
│   ├── favicon.png
│   └── imagens/
│       ├── marca/               # Logo, símbolo 3D e banners da VELTRIX
│       │   ├── logo-veltrix.png
│       │   ├── logo-veltrix-transparente.png
│       │   ├── simbolo-veltrix-transparente.png
│       │   ├── arte-simbolo-3d.png
│       │   └── banner-completo-veltrix.png
│       ├── projetos/            # Capas e mockups dos projetos
│       │   ├── harmonie-odonto.svg
│       │   ├── tecnomotos.svg
│       │   ├── pintor-premium.svg
│       │   ├── pintor-pro.svg
│       │   └── trabalhe-livre.svg
│       └── fundos/              # Backgrounds tecnológicos
│           └── veltrix-tecnologia.svg
├── src/
│   ├── app/
│   │   ├── globals.css          # Design system, glassmorphism e resets
│   │   ├── layout.tsx           # SEO, fontes Google, OpenGraph, Viewport
│   │   ├── page.tsx             # Montagem da página única (landing page)
│   │   └── icon.png             # Favicon nativo do Next.js
│   ├── components/              # Componentes modulares e reutilizáveis
│   │   ├── Header.tsx           # Topbar fixa com navegação e menu mobile acessível
│   │   ├── ParallaxBackground.tsx # Fundo parallax suave com fallback responsivo
│   │   ├── Hero.tsx             # Apresentação de alto impacto com símbolo 3D
│   │   ├── Sobre.tsx            # Propósito da VELTRIX e 4 diferenciais
│   │   ├── Servicos.tsx         # 6 frentes de soluções digitais
│   │   ├── PrototipoGratuito.tsx# Seção de destaque com protótipo conceitual
│   │   ├── Projetos.tsx         # Grid dos 5 projetos do portfólio
│   │   ├── Processo.tsx         # As 5 fases do desenvolvimento
│   │   ├── Contato.tsx          # Seção final com chamada direta ao WhatsApp
│   │   ├── Footer.tsx           # Rodapé institucional com ano automático
│   │   └── FloatingWhatsApp.tsx # Botão flutuante de atendimento rápido
│   └── data/
│       └── projetos.ts          # Arquivo central de dados dos projetos e links
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Como Executar Localmente

### 1. Pré-requisitos

- **Node.js** (versão 18.17 ou superior instalada)
- **npm** (gerenciador de pacotes)

### 2. Instalação das Dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

### 3. Execução em Modo de Desenvolvimento

```bash
npm run dev
```

Abra no seu navegador: [http://localhost:3000](http://localhost:3000)

### 4. Geração da Versão de Produção (Build)

Para validar a integridade completa do código e gerar a versão otimizada:

```bash
npm run build
```

Para rodar a versão de produção localmente após o build:

```bash
npm run start
```

---

## ✏️ Como Atualizar Projetos, Textos e Links

Todo o catálogo de projetos está centralizado no arquivo [`src/data/projetos.ts`](file:///c:/Users/sandr/OneDrive/Área de Trabalho/SITE VELTRIX/codigo-site-veltrix/src/data/projetos.ts).

### Para atualizar o link público de um projeto:

Abra `src/data/projetos.ts` e altere o campo `linkPublico` e `emBreve`:

```typescript
{
  id: "pintor-pro",
  nome: "Pintor Pro",
  segmento: "Serviços de pintura",
  descricao: "Plataforma criada para aproximar clientes e profissionais...",
  etiquetas: ["Marketplace", "Pintura", "Serviços"],
  imagem: "/imagens/projetos/pintor-pro.svg",
  linkPublico: "https://seu-dominio-oficial.com.br", // <-- Insira o link aqui
  emBreve: false, // <-- Mude para false para liberar o botão público
}
```

### Para adicionar um novo projeto:

Basta duplicar um bloco de objeto dentro do array `projetos` em `src/data/projetos.ts`. O grid se adapta automaticamente!

---

## 🖼️ Como Substituir Imagens

- **Logotipo e Símbolo:** Basta substituir os arquivos dentro de `public/imagens/marca/`.
- **Capas de Projetos:** Salve a nova imagem (em `.webp`, `.png` ou `.svg`) dentro de `public/imagens/projetos/` e atualize o caminho no arquivo `src/data/projetos.ts`.
- **Fundo Tecnológico Parallax definitivo:**
  Coloque sua imagem de fundo em:
  `public/imagens/fundos/veltrix-tecnologia.webp`

---

## 🚢 Como Enviar para o GitHub e Publicar na Vercel

### Passo 1: Inicializar e enviar para o GitHub

1. Abra o terminal na raiz do projeto (`codigo-site-veltrix`).
2. Crie um novo repositório vazio no seu GitHub (exemplo: `site-veltrix`).
3. Execute os seguintes comandos no terminal:

```bash
git add .
git commit -m "feat: site institucional e portfolio veltrix v1"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/site-veltrix.git
git push -u origin main
```

### Passo 2: Importar e Publicar na Vercel

1. Acesse sua conta na [Vercel](https://vercel.com/) e clique em **"Add New..."** > **"Project"**.
2. Conecte sua conta do GitHub e selecione o repositório `site-veltrix`.
3. A Vercel detectará automaticamente as configurações de Next.js.
4. Clique em **"Deploy"**.
5. Em poucos segundos, o site estará publicado e online com certificado SSL (HTTPS) gratuito.

---

## 🌐 Como Configurar o Domínio Definitivo

Quando o domínio final da VELTRIX estiver registrado (exemplo: `veltrix.com.br` ou similar):

1. No painel da **Vercel**, vá até o projeto e acesse **Settings** > **Domains**.
2. Digite o domínio desejado (ex: `veltrix.com.br` e `www.veltrix.com.br`) e clique em **Add**.
3. A Vercel exibirá as entradas DNS necessárias (geralmente um apontamento do tipo `A` para `76.76.21.21` e um `CNAME` para `cname.vercel-dns.com`).
4. Configure esses apontamentos no seu registrador (ex: Registro.br, Cloudflare, etc.).
5. Se desejar, defina a variável de ambiente `NEXT_PUBLIC_SITE_URL` no painel da Vercel (**Settings** > **Environment Variables**) com o endereço final para otimizar o Open Graph e SEO.

---

## 📞 Informações de Contato Oficiais

- **WhatsApp Comercial:** (65) 99692-3551
- **Link Direto:** `https://wa.me/5565996923551`
- **Slogan:** Tecnologia com identidade.
