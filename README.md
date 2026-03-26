<p align="center">
  <img src="assets/scaff wordmark.png">
</p>

<p align="center">
  <strong>Plataforma de gerenciamento de disciplinas universitárias</strong><br>
  <sub>Progresso de estudo · PDFs por semana · Design editorial premium · Zero dependências</sub>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Single%20File-0%20deps-1a3a2a?style=flat-square" alt="Zero Dependencies">
</p>

---

## ⤷ Sobre

**Scaff** é uma aplicação web single-file para organizar e acompanhar disciplinas universitárias. Pensada para estudantes de engenharia, a plataforma oferece uma interface editorial premium com sistema de abas por disciplina, visualização de PDFs compilados em LaTeX, e rastreamento de progresso por semana — tudo persistido localmente no navegador. Foi pensado por universitário para universitários, deixando o SIGAA (Sistema Integrado de Gestão de Atividades Acadêmicas) para institucionalidades e entregando o Scaff para os estudantes. Nossa plafatorma é aquele amigo organizado que todo universitário de exatas merecia ter: **uma mistura de biblioteca, repositório de materiais e comunidade, tudo num só lugar**. A gente reúne os livros-texto, listas de exercícios e um acervo compartilhado de provas antigas, tudo organizado por disciplina. O app também cria um cronograma sob medida pro seu semestre, funcionando como um guia que mostra o que estudar e quando, sem complicação.

> "Eu não sei o que eu faria sem o Scaff" - diz um dos desenvolvedores do Scaff.

Como uma colmeia, a gente sabe que o conhecimento se constrói coletivamente. Cada estudante traz um grão de saber — um livro compartilhado, uma prova antiga, uma explicação valiosa — e juntos formamos uma estrutura viva e organizada. O nome Scaff vem de scaffolding, o andaime que dá suporte enquanto você ergue seu próprio entendimento. Aqui, oferecemos as bases temporárias para que você alcance novos andares na sua jornada acadêmica. E quando estiver pronto para voar, a colmeia continua vibrando, pronta para receber quem vem depois.

<p align="center">
  <img src="assets/scaff abelha.png">
</p>

## ⤷ Funcionalidades

| Feature | Descrição |
|---------|-----------|
| **Login** | Tela de autenticação com sessão persistente via `localStorage` |
| **Dashboard** | Visão geral com cards de disciplinas e barras de progresso dinâmicas |
| **Abas por disciplina** | Navegação em tabs — abra múltiplas disciplinas simultaneamente |
| **Sidebar de semanas** | Lista organizada por módulo com checkboxes de conclusão |
| **Progresso real** | Calculado dinamicamente a partir das semanas concluídas e tenha acesso ao progresso do curso |
| **Filtro de semanas** | Busca em tempo real na sidebar por título ou capítulo |
| **Visualizador de PDF** | Área de preview com navegação entre semanas (← / →) |
| **Barra de navegação** | Use expandida ou colapsada e navegue pelas páginas da plataforma |
| **Tema escuro/claro** | Toggle na topbar com transições suaves e persistência |
| **Adicionar disciplinas** | Modal para criar novas disciplinas com seletor de cor |
| **Cronograma** | Pra você ficar ligado no que deve fazer |
| **Calculadora de faltas** | Todo estudante precisava calcular as faltas do semestre... até hoje! |
| **Simulador de matrícula** | Finja que é recesso letivo e você está vendo se vai sobrar tempo livre |
| **Comunidade** | Veja o que o chiquinho.xp007 tem de tão importante a dizer ou avalie _aquele_ professor |
| **Explorar** | Se perdeu no campus ou esqueceu onde é sua aula? Entra no Scaff pra conferir |
| **Estatísticas** | Leia _in loco_ ou exporte em PDF para levar com você onde a internet não chegou ainda |
| **Persistência local** | Tema, progresso e sessão salvos no `localStorage` |
| **Acessibilidade** | ARIA labels, focus trap em modais, skip link, `focus-visible` |
| **Sanitização XSS** | Todo conteúdo dinâmico é sanitizado via `esc()` antes de renderizar |

## ⤷ Disciplinas Demo

A aplicação vem pré-carregada com 3 disciplinas de demonstração:

| Código | Disciplina | Semanas | Livro |
|--------|-----------|---------|-------|
| **TE0418** | Transferência de Calor e Massa | 18 | Incropera 7ª ed. |
| **MAT201** | Cálculo Diferencial e Integral III | 14 | Stewart 8ª ed. |
| **QUI301** | Termodinâmica Química | 16 | Smith, Van Ness & Abbott |

## ⤷ Como Usar

### Opção 1 — Abrir direto no navegador

Basta abrir o arquivo `index.html` em qualquer navegador moderno.
Ou então acesse `https://w4-c3r.github.io/scaff/` no seu navegador.

### Opção 2 — Servidor local

```bash
# Com Python
python -m http.server 8080

# Com Node.js
npx -y http-server . -p 8080
```

Acesse `http://localhost:8080` no navegador.

### Credenciais de Teste

Você tem duas opções para testar o aplicativo:
1. **Modo Visitante (Demo):** Clique no botão "Explorar como Visitante (Demo)" na tela inicial. Todo o progresso será salvo apenas no seu navegador.
2. **Conta Real:** Clique em "Criar conta", preencha um e-mail e senha, e seu progresso será salvo e sincronizado gratuitamente na nuvem via Firebase Firestore.

## ⤷ Arquitetura

```
scaff/
└── index.html    ← Aplicação completa (HTML + CSS + JS)
```

**Single-file by design.** Zero dependências de build, zero node_modules, zero frameworks. Apenas um HTML que você pode hospedar em qualquer lugar — GitHub Pages, Netlify, ou abrir localmente. Agradeça ao Lebinho7 por isso.

### Stack

- **HTML5** — Estrutura semântica com ARIA
- **CSS3** — Custom Properties, transições, Grid/Flexbox, media queries
- **Vanilla JS** — DOM manipulation, `localStorage`, `IntersectionObserver`
- **Fonts** — [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (serif), [DM Mono](https://fonts.google.com/specimen/DM+Mono) (mono), [DM Sans](https://fonts.google.com/specimen/DM+Sans) (sans)

## ⤷ Design System

| Cor | HEX |
|-------|-------|
| Papel | `#fffefd` |
| Marfim | `#2596be` |
| Jambo claro | `#e8553e` |
| Verde azulado | `#1a5f6e` |
| Preto sensação | `#0e0f13` |

## ⤷ Roadmap

- [ ] Integração com PDFs reais via `week.pdfUrl`
- [ ] Pipeline LaTeX → PDF automático
- [ ] PWA (Service Worker + manifest para instalação)
- [ ] Export/import de dados (JSON)
- [ ] Suporte a equações inline com KaTeX
- [ ] Backend real com autenticação (substituir credenciais hardcoded)
- [ ] Drag & drop para reordenar semanas

## ⤷ Licença

Este projeto é de uso acadêmico e pessoal até então.

---

<p align="center">
  <sub>Feito com ☕ por <strong>Kalebe</strong>, <strong>Hamilton</strong> e <strong>Wallace</strong> · UFC · Engenharia de Energias Renováveis</sub>
</p>
