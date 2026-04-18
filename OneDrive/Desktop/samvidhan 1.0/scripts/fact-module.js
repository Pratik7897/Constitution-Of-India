export class FactChakra {
    constructor() {
        this.facts = [];
        this.current = 0;
        this.el = document.querySelector('#fact-ticker');
    }

    async init() {
        const response = await fetch('scripts/facts.json');
        this.facts = await response.json();
        this.updateFact();
        setInterval(() => this.rotate(), 30000); // 30 seconds for better user experience than 20m in demo
    }

    rotate() {
        if (!this.el) return;
        gsap.to(this.el, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            onComplete: () => {
                this.current = (this.current + 1) % this.facts.length;
                this.updateFact();
                gsap.fromTo(this.el, 
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5 }
                );
            }
        });
    }

    updateFact() {
        if (this.el) this.el.innerHTML = `<p class="preamble-text italic text-lg text-leather/80 leading-relaxed">"${this.facts[this.current]}"</p>`;
    }
}
