# Andy Samberg Gallery

Portfólio editorial e imersivo sobre a carreira de Andy Samberg. Cada projeto assume toda a interface com cenário, cores, informações, avaliações e um PNG interativo do personagem.

## Site publicado

[andy-samberg-gallery.jg-barros-dsantos.chatgpt.site](https://andy-samberg-gallery.jg-barros-dsantos.chatgpt.site)

## Destaques

- seis universos visuais: *Brooklyn Nine-Nine*, *Palm Springs*, *Popstar*, *Hot Rod*, *Saturday Night Live* e *Celeste & Jesse Forever*;
- personagens recortados em PNG com hover, clique e gesto de arrastar;
- transição direcional para a biografia de Andy Samberg;
- avaliações, prêmios, créditos e links de cada obra;
- layout responsivo para desktop, tablet e celular;
- suporte a teclado, toque e preferência por movimento reduzido;
- página biográfica com cronologia e fontes.

## Tecnologias

- React 19
- TypeScript
- Next.js / Vinext
- Tailwind CSS 4
- Cloudflare Workers

## Executando localmente

Requisitos: Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura principal

```text
app/
  about/page.tsx   # biografia
  gallery.tsx      # galeria e interações
  globals.css      # direção visual e responsividade
public/
  characters/      # PNGs transparentes
  works/           # cenários das obras
```

## Créditos

Projeto conceitual não oficial. Imagens e propriedades das obras pertencem aos seus respectivos titulares.

2026 Andy Samberg Gallery by NOMA.
