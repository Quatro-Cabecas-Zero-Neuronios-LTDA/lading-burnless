# Burnless — landing page

Landing page do **Burnless** (HackBrasil 2026 · Trilha Saúde & Bem-estar): detector de burnout, coach de sono, diário com conselheiro e triagem de encaminhamento para estudantes.

Stack: React + Vite + TypeScript + Tailwind CSS v4.

## Rodar localmente

Requer [pnpm](https://pnpm.io) (`npm install -g pnpm`).

```bash
pnpm install
pnpm dev         # http://localhost:5173
pnpm build       # gera dist/
pnpm preview     # serve o build
```

## Deploy (Vercel, HTTPS automático)

1. Em [vercel.com/new](https://vercel.com/new), importe este repositório.
2. A Vercel detecta Vite e pnpm sozinha (pelo `pnpm-lock.yaml`): build `pnpm build`, saída `dist`.
3. A página fica em `https://<projeto>.vercel.app`, já com HTTPS.

## Estrutura

- `index.html`: título da página, meta tags e favicon
- `src/index.css`: cores da marca (`primary #283C2C`, `secondary #566A59`) e fontes
- `src/components/`: uma seção por arquivo (Hero, Features, DashboardPreview, ...)
- `public/`: logos, ícones e a foto da mão do hero

## Créditos

- Foto da mão segurando o celular: [Pexels](https://www.pexels.com/photo/hand-holding-iphone-mockup-8217475/), licença Pexels (uso comercial gratuito). Fundo e tela recortados para o mockup.
