export class Calculator {
    constructor() {
        this.input = document.querySelector('#birth-year');
        this.btn = document.querySelector('#calc-btn');
        this.results = document.querySelector('#calc-results');
    }

    init() {
        if (!this.btn) return;
        this.btn.addEventListener('click', () => this.calculate());
    }

    calculate() {
        const year = parseInt(this.input.value);
        const currentYear = new Date().getFullYear();
        if (isNaN(year) || year < 1900 || year > currentYear) {
            alert("Please enter a valid birth year (1900-2026)");
            return;
        }

        const age = currentYear - year;
        const constAge = currentYear - 1950;

        // Realistic historical data for "Perfection"
        const totalAmendments = 106;
        const totalElections = 17; // 17th Lok Sabha is 2019, 18th is 2024

        // Formula: Current Count (106) minus count at Birth Year.
        // We approximate the count in the past based on a roughly linear growth with milestones
        const amendmentsPast = this.getAmendmentsByYear(year);
        const amendmentsSince = totalAmendments - amendmentsPast;

        const electionsSince = this.getElectionsByYear(year);
        
        const ratio = (constAge / (age || 1)).toFixed(2);

        this.animateResults(amendmentsSince, electionsSince, ratio);
    }

    getAmendmentsByYear(year) {
        if (year <= 1950) return 0;
        if (year >= 2026) return 106;
        // Approximation: ~1.4 amendments per year
        return Math.floor((year - 1950) * 1.4);
    }

    getElectionsByYear(year) {
        const elections = [
            1951, 1957, 1962, 1967, 1971, 1977, 1980, 1984, 1989, 
            1991, 1996, 1998, 1999, 2004, 2009, 2014, 2019, 2024
        ];
        return elections.filter(e => e >= year).length;
    }

    animateResults(amendments, elections, ratio) {
        this.results.classList.remove('hidden');
        
        // GSAP Odometer effect
        this.animateValue('#amendments-val', 0, amendments, 2000);
        this.animateValue('#elections-val', 0, elections, 2000);
        this.animateValue('#ratio-val', 0, parseFloat(ratio), 2000, true);

        gsap.from("#calc-results .parchment-card", {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            stagger: 0.3,
            ease: "back.out(1.7)"
        });
    }

    animateValue(selector, start, end, duration, isFloat = false) {
        const obj = document.querySelector(selector);
        if (!obj) return;
        
        const data = { val: start };
        gsap.to(data, {
            val: end,
            duration: duration / 1000,
            onUpdate: () => {
                obj.innerText = isFloat ? data.val.toFixed(2) : Math.floor(data.val);
            }
        });
    }
}
