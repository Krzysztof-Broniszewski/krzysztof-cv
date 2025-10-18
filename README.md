# Krzysztof Broniszewski — CV / Portfolio

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github)](https://krzysztof-broniszewski.github.io/krzysztof-cv/)
[![Build](https://img.shields.io/github/actions/workflow/status/Krzysztof-Broniszewski/krzysztof-cv/deploy.yml?label=Pages%20deploy)](../../actions)
![Stack](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=000)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=fff)
![License](https://img.shields.io/badge/License-MIT-2ea44f)

Nowoczesne, lekkie CV w React + Vite. Automatycznie **budowane i publikowane** z GitHub Actions na GitHub Pages.

👉 **Live**: https://krzysztof-broniszewski.github.io/krzysztof-cv/

> _Tip:_ jeśli patrzysz na kod – zasugerowane miejsca do edycji: `src/components/`, `src/sections/`, `src/data/` (skills, projekty).

---

## ✨ Funkcje
- Szybkie ładowanie (Vite + code-splitting)
- Dark-friendly UI (Tailwind/SCSS – zależnie od projektu)
- Sekcje: o mnie, umiejętności, projekty, doświadczenie, kontakt
- Responsywność + klawiatura (skip links)
- Automatyczny **deploy z Actions** na Pages (każdy `push` → publikacja)

---

## 🧰 Technologia
- **React 18** + **Vite 5**
- (opcjonalnie) Tailwind CSS / SCSS
- GitHub Actions → GitHub Pages

---

## 🚀 Szybki start (lokalnie)

```bash
# wymagany Node 18/20/22
npm i
npm run dev
# dev serwer: http://localhost:5173/

<title>Krzysztof Broniszewski • Data Scientist / ML Engineer</title>
<meta name="description" content="CV i portfolio — projekty ML/DS, doświadczenie, kontakt." />
<meta property="og:title" content="Krzysztof Broniszewski — CV / Portfolio" />
<meta property="og:description" content="Projekty ML/DS, doświadczenie, kontakt." />
<meta property="og:image" content="https://krzysztof-broniszewski.github.io/krzysztof-cv/og-image.png" />
<meta property="og:type" content="website" />

