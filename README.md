<p align="center">
  <img src="https://img.shields.io/badge/Scaff-Biblioteca%20de%20Disciplinas-1a3a2a?style=for-the-badge&labelColor=0f0e0c" alt="Scaff Badge">
</p>

<h1 align="center">
  <em>Scaff</em>
</h1>

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

## 📖 Sobre

**Scaff** é uma aplicação web single-file para organizar e acompanhar disciplinas universitárias. Pensada para estudantes de engenharia, a plataforma oferece uma interface editorial premium com sistema de abas por disciplina, visualização de PDFs compilados em LaTeX, e rastreamento de progresso por semana — tudo persistido localmente no navegador.

> _"Uma biblioteca de disciplinas que você abre no notebook antes de estudar."_

## ✨ Funcionalidades

| Feature | Descrição |
|---------|-----------|
| 🔐 **Login** | Tela de autenticação com sessão persistente via `localStorage` |
| 📊 **Dashboard** | Visão geral com cards de disciplinas e barras de progresso dinâmicas |
| 📑 **Abas por disciplina** | Navegação em tabs — abra múltiplas disciplinas simultaneamente |
| 📋 **Sidebar de semanas** | Lista organizada por módulo com checkboxes de conclusão |
| ✅ **Progresso real** | Calculado dinamicamente a partir das semanas concluídas |
| 🔍 **Filtro de semanas** | Busca em tempo real na sidebar por título ou capítulo |
| 📄 **Visualizador de PDF** | Área de preview com navegação entre semanas (← / →) |
| 🌙 **Tema escuro/claro** | Toggle na topbar com transições suaves e persistência |
| ➕ **Adicionar disciplinas** | Modal para criar novas disciplinas com seletor de cor |
| 💾 **Persistência local** | Tema, progresso e sessão salvos no `localStorage` |
| ♿ **Acessibilidade** | ARIA labels, focus trap em modais, skip link, `focus-visible` |
| 🛡️ **Sanitização XSS** | Todo conteúdo dinâmico é sanitizado via `esc()` antes de renderizar |

## 🎓 Disciplinas Demo

A aplicação vem pré-carregada com 3 disciplinas de demonstração:

| Código | Disciplina | Semanas | Livro |
|--------|-----------|---------|-------|
| **TE0418** | Transferência de Calor e Massa | 18 | Incropera 7ª ed. |
| **MAT201** | Cálculo Diferencial e Integral III | 14 | Stewart 8ª ed. |
| **QUI301** | Termodinâmica Química | 16 | Smith, Van Ness & Abbott |

## 🚀 Como Usar

### Opção 1 — Abrir direto no navegador

```
Basta abrir o arquivo index.html em qualquer navegador moderno.
```

### Opção 2 — Servidor local

```bash
# Com Python
python -m http.server 8080

# Com Node.js
npx -y http-server . -p 8080
```

Acesse `http://localhost:8080` no navegador.

### Credenciais de teste

| Usuário | Senha |
|---------|-------|
| `estudante` | `scaff2025` |
| `wallace` | `deq2025` |
| `admin` | `scaffadm` |

## 🏗️ Arquitetura

```
scaff/
└── index.html    ← Aplicação completa (HTML + CSS + JS)
```

**Single-file by design.** Zero dependências de build, zero node_modules, zero frameworks. Apenas um HTML que você pode hospedar em qualquer lugar — GitHub Pages, Netlify, ou abrir localmente.

### Stack

- **HTML5** — Estrutura semântica com ARIA
- **CSS3** — Custom Properties, transições, Grid/Flexbox, media queries
- **Vanilla JS** — DOM manipulation, `localStorage`, `IntersectionObserver`
- **Fonts** — [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (serif), [DM Mono](https://fonts.google.com/specimen/DM+Mono) (mono), [DM Sans](https://fonts.google.com/specimen/DM+Sans) (sans)

## 🎨 Design System

| Token | Light | Dark |
|-------|-------|------|
| `--paper` | `#f5f2ec` | `#141210` |
| `--ink` | `#0f0e0c` | `#e0ddd6` |
| `--accent` | `#1a3a2a` | `#6abf8a` |
| `--accent2` | `#c8502a` | `#e8764a` |
| `--gold` | `#b8882a` | `#d4a840` |

Textura de grão SVG (`fractalNoise`) como overlay para estética editorial.

## 📝 Roadmap

- [ ] Integração com PDFs reais via `week.pdfUrl`
- [ ] Pipeline LaTeX → PDF automático
- [ ] PWA (Service Worker + manifest para instalação)
- [ ] Export/import de dados (JSON)
- [ ] Suporte a equações inline com KaTeX
- [ ] Backend real com autenticação (substituir credenciais hardcoded)
- [ ] Drag & drop para reordenar semanas

## 📄 Licença

Este projeto é de uso acadêmico e pessoal.

---

<p align="center">
  <sub>Feito com ☕ por <strong>Kalebe</strong> · UFC · Engenharia Química</sub>
</p>
