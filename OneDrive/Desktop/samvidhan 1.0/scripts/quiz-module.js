export class Quiz {
    constructor() {
        this.questions = [];
        this.current = 0;
        this.score = 0;
        this.container = document.querySelector('#quiz-content');
        this.progressBar = document.querySelector('#quiz-progress');
    }

    async init() {
        const response = await fetch('scripts/quiz.json');
        this.questions = (await response.json()).sort(() => Math.random() - 0.5).slice(0, 20);
        this.renderQuestion();
    }

    renderQuestion() {
        if (!this.container) return;
        const q = this.questions[this.current];
        this.updateProgress();

        this.container.innerHTML = `
            <div class="quiz-step text-center">
                <h3 class="heritage-header text-xl mb-6 text-leather/60">Swarajya Question ${this.current + 1} of 20</h3>
                <p class="preamble-text text-2xl mb-12 italic text-leather font-bold">"${q.q}"</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${q.options.map(opt => `
                        <button class="quiz-btn parchment-card p-6 border-gold hover:bg-gold/10 transition-all font-bold heritage-header text-lg" 
                                onclick="window.app.quiz.checkAnswer('${opt.replace(/'/g, "\\'")}')">
                            ${opt}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        gsap.from(".quiz-step", { opacity: 0, x: 100, duration: 0.8, ease: "power2.out" });
    }

    checkAnswer(choice) {
        const q = this.questions[this.current];
        const isCorrect = choice === q.a;
        if (isCorrect) this.score++;

        // Feedback overlay or simple alert for now, but user says "make it perfect"
        // I'll add a temporary "Fact" display between questions
        this.showFeedback(isCorrect, q);
    }

    showFeedback(isCorrect, q) {
        this.container.innerHTML = `
            <div class="feedback-step text-center">
                <h3 class="heritage-header text-4xl mb-6 ${isCorrect ? 'text-india-green' : 'text-danger'}">${isCorrect ? 'Correct!' : 'Knowledge Gained!'}</h3>
                <div class="parchment-card p-8 mb-8 border-gold">
                    <p class="text-xl mb-4 font-bold text-ashoka-blue">${q.a}</p>
                    <p class="preamble-text italic text-leather/80">${q.fact || "Every article of the Constitution is a step toward a more perfect union."}</p>
                </div>
                <button class="bg-saffron text-white px-10 py-4 heritage-header font-bold hover:shadow-xl transition-all" 
                        onclick="window.app.quiz.next()">
                    Continue the Journey
                </button>
            </div>
        `;
        gsap.from(".feedback-step", { scale: 0.8, opacity: 0, duration: 0.5 });
    }

    next() {
        this.current++;
        if (this.current < this.questions.length) {
            this.renderQuestion();
        } else {
            this.showResults();
        }
    }

    updateProgress() {
        if (!this.progressBar) return;
        const percent = ((this.current) / this.questions.length) * 100;
        this.progressBar.style.width = `${percent}%`;
        
        // Tricolour Progress: Saffron (0-33), White (34-66), Green (67-100)
        this.progressBar.className = 'progress-bar';
        if (percent <= 33) this.progressBar.classList.add('progress-saffron');
        else if (percent <= 66) this.progressBar.classList.add('progress-white');
        else this.progressBar.classList.add('progress-green');
    }

    showResults() {
        this.updateProgress(); // 100%
        this.container.innerHTML = `
            <div class="results-step text-center">
                <h3 class="heritage-header text-5xl mb-6 text-saffron">Jai Hind!</h3>
                <p class="text-2xl mb-8 italic text-leather">You have attained the status of a</p>
                <h4 class="text-4xl font-bold text-ashoka-blue mb-12">"Civic Scholar"</h4>
                <div class="parchment-card p-12 mb-12 border-gold max-w-md mx-auto">
                    <span class="text-6xl font-bold text-india-green">${this.score} / 20</span>
                    <p class="mt-4 text-leather/60 font-bold heritage-header uppercase tracking-widest">Knowledge Points Earned</p>
                </div>
                <button class="border-2 border-leather px-10 py-4 heritage-header font-bold hover:bg-leather hover:text-white transition-all" 
                        onclick="location.reload()">Re-walk the Path</button>
            </div>
        `;
    }
}
