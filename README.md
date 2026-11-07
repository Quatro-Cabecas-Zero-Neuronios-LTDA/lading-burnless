# Burnless — landing page

Landing page do **Burnless** (HackBrasil 2026 · Trilha Saúde & Bem-estar): detector de burnout, coach de sono, diário com conselheiro e triagem de encaminhamento para estudantes.

Stack: React + Vite + TypeScript + Tailwind CSS v4.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## Deploy (Vercel, HTTPS automático)

1. Em [vercel.com/new](https://vercel.com/new), importe este repositório.
2. A Vercel detecta Vite sozinha: build `npm run build`, saída `dist`.
3. A página fica em `https://<projeto>.vercel.app`, já com HTTPS.

## Estrutura

- `index.html`: título da página, meta tags e favicon
- `src/index.css`: cores da marca (`primary #283C2C`, `secondary #566A59`) e fontes
- `src/components/`: uma seção por arquivo (Hero, Features, DashboardPreview, ...)
- `public/`: logos e ícones
