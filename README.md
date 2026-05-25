<img src="./src/assets/HeroImg.png" alt="Preview do projeto" />

# Custom Rose Tattoo Studio

Site (SPA) para o estúdio **Custom Rose**, com páginas de apresentação, equipe, portfólio, preços e um formulário de contato/orçamento.

## Funcionalidades

- Layout responsivo com **Header** e **Footer** fixos no fluxo da página
- Navegação por rotas:
  - `/` (Home / Hero)
  - `/about`
  - `/artists`
  - `/portfolio`
  - `/pricing`
  - `/contact`
- Animações com **AOS** (Animate On Scroll)
- Efeitos visuais e botões especiais (ex.: `FancyButton` “shiny button”)
- Estilo com **Tailwind CSS** e tema/cores definidos em `src/index.css`

## Stack

- **React** + **TypeScript**
- **Vite**
- **Tailwind CSS**
- **react-router-dom**
- **AOS**
- **framer-motion** (dependência do projeto)
- **lucide-react** / **react-icons** (ícones)
- **clsx** / **tailwind-merge** (utilitários de classe)

## Pré-requisitos

- Node.js (versão compatível com o Vite)
- npm (ou equivalente)

## Como rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o projeto no navegador (normalmente em `http://localhost:5173`).

## Scripts

- `npm run dev` — inicia o Vite em modo de desenvolvimento
- `npm run build` — compila com TypeScript e gera build do Vite
- `npm run lint` — executa o ESLint
- `npm run preview` — pré-visualiza a build gerada

## Estrutura (alto nível)

- `src/App.tsx` — configuração das rotas e inicialização do AOS
- `src/components/Layout/` — `Header`, `Footer`
- `src/components/pages/` — páginas: `About`, `Artists`, `Portfolio`, `Pricing`, `Contact`
- `src/components/Home/` — seções da Home (ex.: `Hero`, `SectionTitle`)
- `src/components/ui/` — componentes reutilizáveis (ex.: `ScrollToTop`, `shiny-button`, `Animated-text`)
- `src/assets/` — imagens do portfólio e assets visuais

## Observações

- O arquivo `src/index.css` define as variáveis de tema (cores/fundos) e a integração do Tailwind.
- `src/components/ui/ScrollToTop.tsx` garante que o topo seja exibido ao navegar entre rotas.


