# 🇮🇳 Swarajya Vidya — The Living Constitution

![Swarajya Vidya Banner](https://img.shields.io/badge/Project-Constitution-orange.svg) 
![Status](https://img.shields.io/badge/Status-Live-success.svg)

An interactive, educational web platform designed to explore and celebrate the **Constitution of India**. Built with a heritage-inspired parchment aesthetic, this project makes constitutional literacy engaging through interactive tools and micro-animations.

## 🌟 Features

- **📜 Interactive Preamble:** Hover over key terms (Sovereign, Socialist, Secular, etc.) to reveal their meanings in real-time.
- **📚 Gyan Library:** An expandable repository of knowledge covering key Constitutional Parts, Schedules, and Amendments.
- **🧮 Constitutional Witness Calculator:** Enter your birth year to discover how many constitutional amendments and general elections you have lived through.
- **☸️ Vichara Chakra Fact Ticker:** Auto-rotating golden facts about the drafting and history of the Constitution.
- **🏆 Civic Scholar Quiz:** Test your knowledge with a randomized 10-question quiz that gives immediate feedback and facts, scoring you with civic badges.
- **💬 Community Forum ("Have a Doubt?"):** Ask questions, filter by category, and upvote community doubts. Features a live reading time and quality score indicator.

## 🛠️ Technology Stack

- **HTML5** (Semantic structure)
- **CSS3** (Custom vanilla styles + Tailwind CSS via CDN)
- **JavaScript (ES6+)** (Vanilla JS modules consolidated into `bundle.js`)
- **GSAP (GreenSock)** (Scroll-triggered animations and UI transitions)

## 🚀 Live Demo

The project is live on Vercel:
[**https://swarajya-vidya.vercel.app**](https://swarajya-vidya.vercel.app)

## 💻 Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Sohamzagare/Constitution-Of-India.git
   ```
2. Navigate into the directory:
   ```bash
   cd Constitution-Of-India
   ```
3. Run a local server:
   ```bash
   npx serve .
   ```
   *or using Python:*
   ```bash
   python3 -m http.server 8000
   ```
4. Open your browser to `http://localhost:8000`.

## 📂 Project Structure

```
├── index.html           # Main application entry point
├── styles/
│   ├── theme.css        # Core design tokens and component styles
│   └── index.css        # Layout, scroll mechanics, and GSAP support
├── scripts/
│   ├── bundle.js        # Core logic: Preamble, Calculator, Quiz, Library
│   └── doubts.js        # Logic for community doubts, localStorage, text-analysis
├── assets/              # Images (PCCoE logo, Ashoka Stambha, Chakra background)
└── README.md            # Project documentation
```

## 🤝 Contribution

Contributions, issues, and feature requests are welcome!
Feel free to check [issues page](https://github.com/Sohamzagare/Constitution-Of-India/issues).

---
*Developed for Constitutional literacy & educational engagement.*
