import { Library } from './library-module.js';
import { Quiz } from './quiz-module.js';
import { FactChakra } from './fact-module.js';
import { Calculator } from './calc-module.js';

class App {
    constructor() {
        this.library = new Library();
        this.quiz = new Quiz();
        this.factChakra = new FactChakra();
        this.calculator = new Calculator();
    }

    async init() {
        console.log("Swarajya Vidya Initializing...");
        await this.library.init();
        await this.quiz.init();
        await this.factChakra.init();
        this.calculator.init();

        this.setupAnimations();
        this.setupPreambleHover();
    }

    setupAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        // Scroll Reveal Utility
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Handwritten reveal for Preamble
        gsap.to(".handwritten", {
            opacity: 1,
            stagger: 0.05,
            duration: 1,
            scrollTrigger: {
                trigger: "#preamble-section",
                start: "top 70%"
            }
        });
    }

    setupPreambleHover() {
        const explainMap = {
            "Sovereign": "Independent authority; not under the control of any external power.",
            "Socialist": "Commitment to social and economic equality for all citizens.",
            "Secular": "The state remains neutral in religious matters, respecting all faiths equally.",
            "Democratic": "Government of the people, by the people, and for the people.",
            "Republic": "A state where the head is elected, not a hereditary monarch.",
            "Justice": "Fairness in social, economic, and political spheres.",
            "Liberty": "Freedom of thought, expression, belief, faith, and worship.",
            "Equality": "Ensuring equal status and opportunity for every citizen.",
            "Fraternity": "Promoting a sense of brotherhood and dignity of the individual."
        };

        document.querySelectorAll('.pillar-target').forEach(el => {
            el.addEventListener('mouseenter', (e) => {
                const term = e.target.innerText.trim();
                const explanation = explainMap[term] || "A core pillar of our democracy.";
                this.showTooltip(e, explanation);
            });
            el.addEventListener('mouseleave', () => this.hideTooltip());
        });
    }

    showTooltip(e, text) {
        let tip = document.querySelector('#preamble-tooltip');
        if (!tip) {
            tip = document.createElement('div');
            tip.id = 'preamble-tooltip';
            tip.className = 'fixed bg-leather text-parchment p-4 rounded shadow-2xl z-50 max-w-xs text-sm border border-gold pointer-events-none';
            document.body.appendChild(tip);
        }
        tip.innerText = text;
        tip.style.display = 'block';
        tip.style.left = `${e.clientX + 10}px`;
        tip.style.top = `${e.clientY + 10}px`;
        gsap.fromTo(tip, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.2 });
    }

    hideTooltip() {
        const tip = document.querySelector('#preamble-tooltip');
        if (tip) tip.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
    window.app.init();
});
