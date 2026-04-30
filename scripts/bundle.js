// ============================================================
// Swarajya Vidya – The Living Constitution
// Consolidated Bundle v2.0 — All Features Fixed & Enhanced
// ============================================================

// ============================================================
// 1. DATA BANKS
// ============================================================

const LIBRARY_DATA = [
    {
        id: "preamble",
        title: "The Preamble",
        articles: "The Soul of the Constitution",
        description: "The 'soul of the Constitution', defining its philosophy, objectives, and the source of its authority.",
        points: [
            "Source of Authority: 'We, the People of India'.",
            "Nature of State: Sovereign, Socialist, Secular, Democratic, Republic.",
            "Core Objectives: Justice, Liberty, Equality, Fraternity.",
            "Adopted on: 26th November 1949, the day we celebrate Constitution Day.",
            "The Preamble was amended once by the 42nd Amendment Act, 1976."
        ],
        tags: ["philosophy", "preamble", "preamble"]
    },
    {
        id: "part1",
        title: "Part I: The Union and its Territory",
        articles: "Articles 1–4",
        description: "Defines India as a Union of States and outlines provisions for the creation, alteration, and naming of states.",
        points: [
            "Article 1: India, that is Bharat, shall be a Union of States.",
            "Article 2: Admission or establishment of new States.",
            "Article 3: Formation of new States and alteration of existing ones.",
            "Article 4: Laws made under Articles 2 & 3 are not constitutional amendments."
        ],
        tags: ["union", "territory", "states", "part 1"]
    },
    {
        id: "part2",
        title: "Part II: Citizenship",
        articles: "Articles 5–11",
        description: "Deals with citizenship at the commencement of the Constitution and the power of Parliament to regulate citizenship.",
        points: [
            "Citizenship at commencement for those born or domiciled in India.",
            "Rights of citizenship for migrants from Pakistan.",
            "Citizenship Act, 1955 governs acquisition and termination.",
            "India follows single and not dual citizenship."
        ],
        tags: ["citizenship", "part 2"]
    },
    {
        id: "part3",
        title: "Part III: Fundamental Rights",
        articles: "Articles 12–35",
        description: "The 'Magna Carta of India'. These justiciable rights are guaranteed to all citizens and are enforceable in courts.",
        points: [
            "Right to Equality (Art 14–18): Equality before law, no discrimination.",
            "Right to Freedom (Art 19–22): Speech, assembly, profession, movement.",
            "Right Against Exploitation (Art 23–24): No forced labour or child labour.",
            "Right to Freedom of Religion (Art 25–28): Freedom of conscience.",
            "Cultural & Educational Rights (Art 29–30): Protection for minorities.",
            "Right to Constitutional Remedies (Art 32): The 'Heart & Soul' of the Constitution — Dr. Ambedkar."
        ],
        tags: ["rights", "citizens", "fundamental", "part 3", "art 14", "art 19", "art 21", "art 32"]
    },
    {
        id: "part4",
        title: "Part IV: Directive Principles of State Policy",
        articles: "Articles 36–51",
        description: "Non-justiciable guidelines for the state aimed at establishing a welfare state. Inspired by the Irish Constitution.",
        points: [
            "Right to adequate livelihood (Art 39a).",
            "Equal pay for equal work (Art 39d).",
            "Free legal aid (Art 39A, added by 42nd Amendment).",
            "Uniform Civil Code (Art 44).",
            "Promotion of education and economic interests of SCs/STs (Art 46).",
            "Protection of historical monuments (Art 49)."
        ],
        tags: ["dpsp", "directive", "welfare", "part 4"]
    },
    {
        id: "part4a",
        title: "Part IV-A: Fundamental Duties",
        articles: "Article 51-A",
        description: "Added by the 42nd Amendment (1976) on the recommendation of the Swaran Singh Committee. 11 duties in total.",
        points: [
            "Abide by the Constitution and respect national symbols.",
            "Cherish the noble ideals of the national struggle.",
            "Uphold and protect the sovereignty of India.",
            "Promote harmony transcending religious, linguistic & regional diversities.",
            "Protect and improve the natural environment.",
            "Develop scientific temper, humanism, and the spirit of inquiry.",
            "Safeguard public property and abjure violence.",
            "Provide opportunities for education to children (added by 86th Amendment, 2002)."
        ],
        tags: ["duties", "citizens", "fundamental duties", "part 4a", "art 51a"]
    },
    {
        id: "part5",
        title: "Part V: The Union",
        articles: "Articles 52–151",
        description: "The largest part, governing the executive, legislative, and judicial arms of the Union Government.",
        points: [
            "The President (Art 52–78): Head of State, elected by electoral college.",
            "Parliament (Art 79–122): Rajya Sabha + Lok Sabha.",
            "Prime Minister and Council of Ministers (Art 74): Real executive power.",
            "Supreme Court (Art 124–147): Guardian of the Constitution.",
            "Comptroller and Auditor General (Art 148–151)."
        ],
        tags: ["president", "parliament", "prime minister", "supreme court", "union", "part 5"]
    },
    {
        id: "part6",
        title: "Part VI: The States",
        articles: "Articles 152–237",
        description: "Mirrors the Union structure at the State level: Governor, State legislature, High Courts.",
        points: [
            "Governor (Art 153): Constitutional head of the State.",
            "State Legislature: Either unicameral or bicameral.",
            "Chief Minister and Council of Ministers: Real executive at state level.",
            "High Courts (Art 214): Jurisdiction over entire state territory.",
            "District Courts: Subordinate to High Courts."
        ],
        tags: ["states", "governor", "high court", "part 6"]
    },
    {
        id: "part18",
        title: "Part XVIII: Emergency Provisions",
        articles: "Articles 352–360",
        description: "Provisions allowing a temporary departure from the federal structure during times of crisis.",
        points: [
            "National Emergency (Art 352): External aggression or armed rebellion.",
            "Proclaimed three times: 1962, 1971, and the infamous 1975-77 Emergency.",
            "President's Rule (Art 356): Failure of constitutional machinery in a state.",
            "Financial Emergency (Art 360): Threat to financial stability of India.",
            "44th Amendment (1978) made 'armed rebellion' replace 'internal disturbance'."
        ],
        tags: ["emergency", "president's rule", "part 18", "art 352", "art 356"]
    },
    {
        id: "schedule8",
        title: "Schedule 8: Official Languages",
        articles: "22 Recognised Languages",
        description: "Lists languages that are constitutionally recognized. Originally 14, expanded to 22 by the 92nd Amendment (2003).",
        points: [
            "Original 14 languages (1950): Hindi, Marathi, Bengali, Tamil, Telugu, etc.",
            "Sindhi added by 21st Amendment (1967).",
            "Konkani, Manipuri, Nepali added by 71st Amendment (1992).",
            "Bodo, Dogri, Maithili, Santhali added by 92nd Amendment (2003).",
            "Hindi in Devanagari script is the official language of the Union."
        ],
        tags: ["schedule", "language", "hindi", "schedule 8"]
    },
    {
        id: "schedule9",
        title: "Schedule 9: Protected Laws",
        articles: "Added by 1st Amendment (1951)",
        description: "Laws placed in this schedule are protected from judicial review for violating Fundamental Rights.",
        points: [
            "Originally added to protect land reform laws.",
            "Currently contains 284 laws.",
            "The Supreme Court in Coelho Case (2007) ruled that laws added after April 24, 1973 can be reviewed.",
            "A shield of protection for land reforms & anti-monopoly legislation."
        ],
        tags: ["schedule 9", "land reform", "judicial review"]
    },
    {
        id: "amendments",
        title: "Key Constitutional Amendments",
        articles: "106 Amendments (as of 2024)",
        description: "The Constitution can be amended by Parliament under Article 368. It has been amended 106 times since 1951.",
        points: [
            "1st Amendment (1951): Created Schedule 9; added 'reasonable restrictions' to Art 19.",
            "42nd Amendment (1976): 'Mini-Constitution'; added Socialist, Secular, Integrity to Preamble.",
            "44th Amendment (1978): Restored Right to Property as a legal right (Art 300A).",
            "73rd & 74th Amendments (1992): Constitutional status to Panchayati Raj & Urban Local Bodies.",
            "86th Amendment (2002): Free & compulsory education for children (Art 21A, RTE).",
            "101st Amendment (2016): Introduced Goods & Services Tax (GST).",
            "103rd Amendment (2019): 10% reservation for Economically Weaker Sections (EWS)."
        ],
        tags: ["amendment", "art 368", "42nd amendment", "73rd amendment", "86th amendment"]
    }
];

const QUIZ_DATA = [
    { q: "Who is known as the 'Chief Architect of the Indian Constitution'?", a: "Dr. B.R. Ambedkar", options: ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Mahatma Gandhi", "Sardar Patel"], fact: "Dr. Ambedkar chaired the Drafting Committee and spent 2 years, 11 months, and 17 days crafting the Constitution." },
    { q: "Which amendment is widely known as the 'Mini-Constitution'?", a: "42nd Amendment", options: ["44th Amendment", "42nd Amendment", "1st Amendment", "73rd Amendment"], fact: "The 42nd Amendment (1976) introduced extensive changes, adding 'Socialist', 'Secular', and 'Integrity' to the Preamble." },
    { q: "Who was the Constitutional Advisor to the Constituent Assembly?", a: "B.N. Rau", options: ["B.R. Ambedkar", "B.N. Rau", "Dr. Rajendra Prasad", "K.M. Munshi"], fact: "Sir Benegal Narsing Rau was the principal constitutional advisor who drafted the initial document." },
    { q: "How many Fundamental Rights are currently guaranteed by the Constitution?", a: "6", options: ["5", "6", "7", "8"], fact: "Originally 7, the Right to Property was removed from Fundamental Rights by the 44th Amendment (1978) and is now a legal right under Art 300A." },
    { q: "Which part of the Constitution is referred to as the 'Magna Carta' of India?", a: "Part III", options: ["Part I", "Part III", "Part IV", "Part V"], fact: "Part III (Articles 12–35) contains the Fundamental Rights, which are justiciable and enforceable in courts — truly India's Magna Carta." },
    { q: "Article 21 of the Constitution guarantees which right?", a: "Right to Life and Personal Liberty", options: ["Right to Equality", "Right to Property", "Right to Life and Personal Liberty", "Right to Education"], fact: "The Supreme Court has expansively interpreted Art 21 to include right to dignity, privacy, health, livelihood, and much more." },
    { q: "The 'Directive Principles of State Policy' were inspired by the constitution of which country?", a: "Ireland", options: ["USA", "UK", "Ireland", "Australia"], fact: "India borrowed the concept of Directive Principles from the Irish Constitution (Bunreacht na hÉireann) of 1937." },
    { q: "In which year did the Constitution of India come into effect?", a: "1950", options: ["1947", "1948", "1949", "1950"], fact: "The Constitution was adopted on Nov 26, 1949 (Constitution Day) and came into force on Jan 26, 1950 (Republic Day)." },
    { q: "Article 32 was described as the 'Heart and Soul of the Constitution' by whom?", a: "Dr. B.R. Ambedkar", options: ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Mahatma Gandhi", "B.N. Rau"], fact: "Dr. Ambedkar called Art 32 (Right to Constitutional Remedies) the heart and soul as it makes all other rights enforceable." },
    { q: "How many Fundamental Duties are listed in the Constitution?", a: "11", options: ["8", "10", "11", "12"], fact: "Originally 10, a Fundamental Duty to provide education to children was added by the 86th Amendment (2002), making the total 11." },
    { q: "The concept of 'Judicial Review' in India is borrowed from which country?", a: "USA", options: ["UK", "USA", "Canada", "France"], fact: "India borrowed the concept of Judicial Review from the United States Constitution, though in a modified form." },
    { q: "Which schedule of the Constitution lists the 22 official languages of India?", a: "Eighth Schedule", options: ["Sixth Schedule", "Seventh Schedule", "Eighth Schedule", "Ninth Schedule"], fact: "The Eighth Schedule originally listed 14 languages; it has been expanded to 22 through various amendments." },
    { q: "What is the minimum age to become the Vice President of India?", a: "35 years", options: ["25 years", "30 years", "35 years", "40 years"], fact: "Like the President, the Vice President must be at least 35 years of age and eligible to be a member of the Rajya Sabha." },
    { q: "Which Article of the Constitution abolishes 'Untouchability'?", a: "Article 17", options: ["Article 14", "Article 15", "Article 17", "Article 46"], fact: "Article 17 abolishes untouchability in all forms and makes its practice a punishable offence." },
    { q: "The Preamble to the Indian Constitution was first proposed as an 'Objectives Resolution' by whom?", a: "Jawaharlal Nehru", options: ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Dr. Rajendra Prasad", "J.B. Kripalani"], fact: "Nehru moved the 'Objectives Resolution' on December 13, 1946, which became the foundation for the Preamble." },
    { q: "The 'Right to Education' (Art 21A) was added to the Constitution by which Amendment?", a: "86th Amendment", options: ["42nd Amendment", "73rd Amendment", "86th Amendment", "97th Amendment"], fact: "The 86th Amendment Act, 2002 inserted Art 21A, making free and compulsory education a Fundamental Right for children aged 6-14." },
    { q: "How many Articles did the original Constitution have?", a: "395", options: ["350", "395", "400", "448"], fact: "The original Constitution had 395 Articles, 8 Schedules, and 22 Parts. Currently it has 448 Articles, 12 Schedules, and 25 Parts." },
    { q: "Which Emergency was declared in India under Article 356 for the first time?", a: "In Punjab (1951)", options: ["In Punjab (1951)", "In Kerala (1959)", "In Rajasthan (1967)", "In West Bengal (1968)"], fact: "The first use of President's Rule (Art 356) was in Punjab in 1951, under Prime Minister Nehru." },
    { q: "The Supreme Court of India has its jurisdiction defined primarily in which Articles?", a: "Articles 124–147", options: ["Articles 80–100", "Articles 124–147", "Articles 214–231", "Articles 243–243ZH"], fact: "Part V of the Constitution (Articles 124–147) deals with the Union Judiciary, including the Supreme Court's original, appellate, and advisory jurisdiction." },
    { q: "Which Amendment Act gave constitutional status to Panchayati Raj institutions?", a: "73rd Amendment", options: ["42nd Amendment", "61st Amendment", "73rd Amendment", "74th Amendment"], fact: "The 73rd Amendment (1992) added Part IX to the Constitution, giving constitutional status to Panchayati Raj — Self-governance at the grassroots level." }
];

const FACTS_DATA = [
    { text: "The Constitution was never printed; it was handwritten by calligrapher Prem Behari Narain Raizada.", emoji: "✍️" },
    { text: "It took 2 years, 11 months, and 17 days to complete the Constitution of India.", emoji: "⏳" },
    { text: "The original copies of the Constitution are preserved in special helium-filled cases in Parliament's Library.", emoji: "🏛️" },
    { text: "India's Constitution is the longest written constitution of any sovereign country in the world.", emoji: "📜" },
    { text: "Each page of the original Constitution was beautifully decorated by artists from Shantiniketan, Beohar Rammanohar Sinha and Nandalal Bose.", emoji: "🎨" },
    { text: "The Constituent Assembly met for 11 sessions over 2 years and held 166 days of debate.", emoji: "🗣️" },
    { text: "The Constitution has been amended 106 times since 1951, making it one of the most frequently amended constitutions.", emoji: "🔏" },
    { text: "India borrowed features from over 10 constitutions: USA, UK, Ireland, Canada, Australia, Germany, USSR, France, South Africa, and Japan.", emoji: "🌍" },
    { text: "The Constituent Assembly had 389 members, of whom 299 were present to sign the Constitution on Jan 24, 1950.", emoji: "✒️" },
    { text: "Article 21 (Right to Life) has been expanded by the Supreme Court to include over 35 rights, from right to food to right to privacy.", emoji: "⚖️" },
    { text: "The word 'secular' was not in the original Preamble. It was added by the 42nd Constitutional Amendment in 1976.", emoji: "🕊️" },
    { text: "Originally, Right to Property was a Fundamental Right (Art 19f, 31). The 44th Amendment (1978) removed it and made it a mere legal right (Art 300A).", emoji: "🏠" }
];

const CALCULATOR_EVENTS = [
    { year: 1951, event: "First Constitutional Amendment & First General Elections" },
    { year: 1952, event: "First General Elections held" },
    { year: 1957, event: "Second General Elections" },
    { year: 1962, event: "Third General Elections; First National Emergency declared (China war)" },
    { year: 1964, event: "Death of PM Nehru; Lal Bahadur Shastri becomes PM" },
    { year: 1966, event: "Indira Gandhi becomes India's first female PM" },
    { year: 1967, event: "Fourth General Elections" },
    { year: 1971, event: "Fifth General Elections; Second National Emergency (Bangladesh Liberation War)" },
    { year: 1975, event: "Third National Emergency declared; The Dark Chapter begins" },
    { year: 1977, event: "Emergency lifted; Sixth General Elections; Janata Party wins" },
    { year: 1978, event: "44th Amendment reverses many Emergency-era changes" },
    { year: 1980, event: "Seventh General Elections; Indira Gandhi returns to power" },
    { year: 1984, event: "Eighth General Elections; Assassination of Indira Gandhi; Rajiv Gandhi becomes PM" },
    { year: 1989, event: "Ninth General Elections; V.P. Singh forms government" },
    { year: 1991, event: "10th General Elections; Rajiv Gandhi assassinated; Liberalisation begins" },
    { year: 1992, event: "73rd & 74th Amendments: Constitutional status to Panchayati Raj" },
    { year: 1996, event: "11th General Elections; Coalition era begins" },
    { year: 1998, event: "12th General Elections; Vajpayee becomes PM" },
    { year: 1999, event: "13th General Elections; NDA majority" },
    { year: 2002, event: "86th Amendment: Right to Education becomes a Fundamental Right" },
    { year: 2004, event: "14th General Elections; UPA under Manmohan Singh" },
    { year: 2009, event: "15th General Elections; UPA re-elected" },
    { year: 2014, event: "16th General Elections; NDA majority; Narendra Modi becomes PM" },
    { year: 2016, event: "101st Amendment: GST introduced; Demonetisation" },
    { year: 2019, event: "17th General Elections; NDA re-elected; Art 370 abrogated; 103rd Amendment (EWS reservation)" },
    { year: 2024, event: "18th General Elections; NDA wins; Modi government 3.0" }
];

// ============================================================
// 2. CORE APPLICATION CLASS
// ============================================================
class SwarajyaApp {
    constructor() {
        this.currentQuiz = 0;
        this.score = 0;
        this.factIndex = 0;
        this.quizAnswered = false;
        this.quizQuestions = this._shuffleArray([...QUIZ_DATA]).slice(0, 10);
        this.totalQuestions = this.quizQuestions.length;
    }

    _shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    init() {
        this.setupLibrary();
        this.setupFacts();
        this.setupQuiz();
        this.setupCalculator();
        this.setupAnimations();
        this.setupPreambleInteraction();
        this.setupMobileNav();
        this.setupKeyboardQuiz();
    }

    // ─── LIBRARY ───────────────────────────────────────────────
    setupLibrary() {
        const container = document.querySelector('#library-container');
        const searchInput = document.querySelector('#library-search');
        if (!container) return;

        this._renderLibrary(LIBRARY_DATA, container);

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase().trim();
                const filtered = term
                    ? LIBRARY_DATA.filter(it =>
                        it.title.toLowerCase().includes(term) ||
                        it.description.toLowerCase().includes(term) ||
                        (it.articles && it.articles.toLowerCase().includes(term)) ||
                        it.tags.some(tag => tag.toLowerCase().includes(term)) ||
                        (it.points && it.points.some(p => p.toLowerCase().includes(term)))
                      )
                    : LIBRARY_DATA;
                this._renderLibrary(filtered, container);
            });
        }
    }

    _renderLibrary(items, container) {
        if (items.length === 0) {
            container.innerHTML = `<div class="col-span-2 text-center py-16 italic text-leather/40 text-lg">No articles found. Try a different search term.</div>`;
            return;
        }
        container.innerHTML = items.map((item, idx) => `
            <div class="lib-card parchment-card border-l-4 border-saffron hover:shadow-xl transition-all duration-300 overflow-hidden" style="animation-delay:${idx * 0.08}s">
                <div class="p-6 cursor-pointer flex justify-between items-start gap-4" onclick="app.toggleLibCard(this)">
                    <div class="flex-1">
                        <h4 class="heritage-header font-bold text-lg text-leather leading-tight">${item.title}</h4>
                        <p class="text-xs italic text-saffron font-bold mt-1 uppercase tracking-wider">${item.articles || 'Global Provision'}</p>
                    </div>
                    <span class="lib-arrow text-2xl select-none flex-shrink-0 mt-1 transition-transform duration-300">📜</span>
                </div>
                <div class="lib-content px-6 pb-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                    <hr class="border-gold/20 mb-4">
                    <p class="preamble-text text-sm text-leather/80 mb-4 leading-relaxed">${item.description}</p>
                    <ul class="space-y-2 pb-6">
                        ${(item.points || []).map(p => `<li class="flex items-start gap-2 text-sm text-leather/70"><span class="text-saffron mt-0.5">▸</span><span>${p}</span></li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

        // Animate cards in
        if (typeof gsap !== 'undefined') {
            gsap.fromTo('.lib-card', { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.07, duration: 0.5, ease: 'power2.out' });
        }
    }

    toggleLibCard(headerEl) {
        const card = headerEl.closest('.lib-card');
        const content = card.querySelector('.lib-content');
        const arrow = card.querySelector('.lib-arrow');
        const isOpen = card.classList.contains('open');

        // Close all other open cards first (accordion)
        document.querySelectorAll('.lib-card.open').forEach(openCard => {
            if (openCard !== card) {
                openCard.classList.remove('open');
                openCard.querySelector('.lib-content').style.maxHeight = '0px';
                openCard.querySelector('.lib-content').style.paddingBottom = '0px';
                openCard.querySelector('.lib-arrow').style.transform = 'rotate(0deg)';
            }
        });

        if (isOpen) {
            card.classList.remove('open');
            content.style.maxHeight = '0px';
            content.style.paddingBottom = '0px';
            arrow.style.transform = 'rotate(0deg)';
        } else {
            card.classList.add('open');
            // Use fixed max-height — scrollHeight returns 0 on hidden elements
            content.style.maxHeight = '1000px';
            arrow.style.transform = 'rotate(90deg)';
        }
    }

    // ─── FACTS ─────────────────────────────────────────────────
    setupFacts() {
        const el = document.querySelector('#fact-ticker');
        if (!el) return;

        this._renderFact(el, 0);
        setInterval(() => {
            this.factIndex = (this.factIndex + 1) % FACTS_DATA.length;
            this._rotateFact(el, this.factIndex);
        }, 9000);
    }

    _renderFact(el, idx) {
        const fact = FACTS_DATA[idx];
        el.innerHTML = `
            <div class="fact-inner">
                <span class="text-5xl mb-4 block">${fact.emoji}</span>
                <p class="preamble-text italic text-xl md:text-2xl text-parchment/90 leading-relaxed">"${fact.text}"</p>
            </div>`;
    }

    _rotateFact(el, idx) {
        if (typeof gsap !== 'undefined') {
            gsap.to(el, {
                opacity: 0, y: -20, duration: 0.5,
                onComplete: () => {
                    this._renderFact(el, idx);
                    gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
                }
            });
        } else {
            this._renderFact(el, idx);
        }
    }

    // ─── QUIZ ──────────────────────────────────────────────────
    setupQuiz() {
        this._renderQuestion();
    }

    _renderQuestion() {
        const container = document.querySelector('#quiz-content');
        if (!container) return;

        if (this.currentQuiz >= this.totalQuestions) {
            this._showQuizResults();
            return;
        }

        const q = this.quizQuestions[this.currentQuiz];
        this.quizAnswered = false;

        const progress = document.querySelector('#quiz-progress');
        if (progress) progress.style.width = `${(this.currentQuiz / this.totalQuestions) * 100}%`;

        const optionLetters = ['A', 'B', 'C', 'D'];
        container.innerHTML = `
            <div class="quiz-step">
                <div class="flex justify-between items-center mb-6">
                    <span class="heritage-header text-sm font-bold text-leather/50 uppercase tracking-widest">Question ${this.currentQuiz + 1} of ${this.totalQuestions}</span>
                    <span class="heritage-header text-sm font-bold text-gold uppercase tracking-widest">Score: ${this.score}/${this.currentQuiz}</span>
                </div>
                <p class="preamble-text text-xl md:text-2xl mb-8 italic text-leather leading-relaxed">${q.q}</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="options-grid">
                    ${q.options.map((opt, i) => `
                        <button
                            class="quiz-opt p-4 md:p-5 border-2 border-leather/20 hover:border-saffron hover:bg-saffron/5 transition-all text-left font-bold heritage-header text-sm flex items-center gap-3 rounded-sm"
                            id="opt-${i}"
                            data-answer="${opt.replace(/"/g, '&quot;')}"
                            onclick="app.checkAnswer('${opt.replace(/'/g, "\\'")}', ${i})"
                        >
                            <span class="w-8 h-8 flex items-center justify-center border border-current text-xs flex-shrink-0">${optionLetters[i]}</span>
                            <span>${opt}</span>
                        </button>
                    `).join('')}
                </div>
                <p class="text-xs text-leather/30 mt-4 text-center italic">Tip: Press 1, 2, 3, or 4 to select an answer</p>
            </div>
        `;

        if (typeof gsap !== 'undefined') {
            gsap.fromTo('.quiz-step', { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' });
        }
    }

    checkAnswer(answer, btnIdx) {
        if (this.quizAnswered) return;
        this.quizAnswered = true;

        const q = this.quizQuestions[this.currentQuiz];
        const isCorrect = answer === q.a;
        if (isCorrect) this.score++;

        // Highlight buttons
        document.querySelectorAll('.quiz-opt').forEach((btn, i) => {
            btn.disabled = true;
            const btnAnswer = btn.getAttribute('data-answer');
            if (btnAnswer === q.a) {
                btn.classList.add('border-indiangreen', 'bg-indiangreen/10', 'text-indiangreen');
                btn.classList.remove('border-leather/20', 'hover:border-saffron');
            } else if (i === btnIdx && !isCorrect) {
                btn.classList.add('border-red-500', 'bg-red-500/10', 'text-red-600');
                btn.classList.remove('border-leather/20', 'hover:border-saffron');
            }
        });

        // Show fact + next button
        const container = document.querySelector('#quiz-content');
        const factDiv = document.createElement('div');
        factDiv.className = 'mt-6 p-5 border-l-4 border-gold bg-gold/5 rounded-sm';
        factDiv.innerHTML = `
            <p class="font-bold text-lg mb-1 ${isCorrect ? 'text-indiangreen' : 'text-red-600'}">${isCorrect ? '✅ Correct!' : '❌ Incorrect!'}</p>
            <p class="preamble-text text-sm italic text-leather/70 mb-4">"${q.fact}"</p>
            <button class="bg-saffron text-white px-8 py-3 heritage-header font-bold hover:bg-ashokablue transition-all text-xs uppercase tracking-widest hover:scale-105" onclick="app.nextQuestion()">
                ${this.currentQuiz + 1 < this.totalQuestions ? 'Next Question →' : 'See Results'}
            </button>
        `;

        const quizStep = container.querySelector('.quiz-step');
        if (quizStep) quizStep.appendChild(factDiv);

        if (typeof gsap !== 'undefined') {
            gsap.fromTo(factDiv, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 });
        }
    }

    nextQuestion() {
        this.currentQuiz++;
        if (typeof gsap !== 'undefined') {
            const step = document.querySelector('.quiz-step');
            if (step) {
                gsap.to(step, { opacity: 0, x: -30, duration: 0.4, onComplete: () => this._renderQuestion() });
                return;
            }
        }
        this._renderQuestion();
    }

    _showQuizResults() {
        const container = document.querySelector('#quiz-content');
        const progress = document.querySelector('#quiz-progress');
        if (progress) progress.style.width = '100%';

        const percentage = Math.round((this.score / this.totalQuestions) * 100);
        let badge, badgeColor, message;
        if (percentage >= 90) { badge = "Constitutional Scholar 🏆"; badgeColor = "text-gold"; message = "Dr. Ambedkar would be proud of you!"; }
        else if (percentage >= 70) { badge = "Civic Champion 🌟"; badgeColor = "text-saffron"; message = "Excellent constitutional awareness!"; }
        else if (percentage >= 50) { badge = "Aware Citizen 📜"; badgeColor = "text-ashokablue"; message = "Good knowledge of the Constitution!"; }
        else { badge = "Apprentice Patriot 🇮🇳"; badgeColor = "text-leather"; message = "Keep studying the Constitution!"; }

        container.innerHTML = `
            <div class="text-center py-8">
                <div class="text-8xl mb-6">${percentage >= 90 ? '🏆' : percentage >= 70 ? '🌟' : percentage >= 50 ? '📜' : '🇮🇳'}</div>
                <h3 class="heritage-header text-3xl md:text-4xl mb-2 text-saffron font-bold">Jai Hind!</h3>
                <p class="preamble-text italic text-xl mb-6 text-leather/70">${message}</p>
                <div class="parchment-card border-4 border-double border-gold p-8 mb-8 inline-block">
                    <p class="heritage-header text-5xl font-bold text-ashokablue mb-2">${this.score}<span class="text-2xl text-leather/40">/${this.totalQuestions}</span></p>
                    <p class="text-sm font-bold uppercase tracking-widest text-leather/50">Correct Answers</p>
                    <div class="mt-4 text-2xl font-bold ${badgeColor} heritage-header">${badge}</div>
                </div>
                <div class="w-full bg-leather/10 rounded-full h-2 mb-6 max-w-xs mx-auto">
                    <div class="bg-saffron h-2 rounded-full transition-all duration-1000" style="width: ${percentage}%"></div>
                </div>
                <button class="bg-saffron text-white px-10 py-4 heritage-header font-bold hover:bg-leather transition-all uppercase tracking-widest text-sm hover:scale-105" onclick="app.restartQuiz()">
                    Re-walk the Path 🔄
                </button>
            </div>
        `;

        if (typeof gsap !== 'undefined') {
            gsap.fromTo('#quiz-content', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)' });
        }
    }

    restartQuiz() {
        this.currentQuiz = 0;
        this.score = 0;
        this.quizAnswered = false;
        this.quizQuestions = this._shuffleArray([...QUIZ_DATA]).slice(0, 10);
        const progress = document.querySelector('#quiz-progress');
        if (progress) progress.style.width = '0%';
        this._renderQuestion();
    }

    // Keyboard - press 1/2/3/4 to select answer
    setupKeyboardQuiz() {
        document.addEventListener('keydown', (e) => {
            // Don't fire if user is typing in an input, textarea, or select
            const tag = e.target.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
            const key = e.key;
            if (!['1','2','3','4'].includes(key)) return;
            if (this.quizAnswered) return;
            const idx = parseInt(key) - 1;
            const btns = document.querySelectorAll('.quiz-opt');
            if (btns[idx]) btns[idx].click();
        });
    }

    // ─── CALCULATOR ────────────────────────────────────────────
    setupCalculator() {
        const btn = document.querySelector('#calc-btn');
        const input = document.querySelector('#birth-year');
        if (!btn || !input) return;

        btn.addEventListener('click', () => this._runCalculator());
        input.addEventListener('keypress', (e) => { if (e.key === 'Enter') this._runCalculator(); });
    }

    _runCalculator() {
        const input = document.querySelector('#birth-year');
        const year = parseInt(input.value);
        const currentYear = new Date().getFullYear();

        input.classList.remove('border-red-500');

        if (isNaN(year) || year < 1900 || year > currentYear) {
            input.classList.add('border-red-500');
            input.style.animation = 'shake 0.4s ease';
            setTimeout(() => { input.style.animation = ''; }, 400);
            return;
        }

        const constYear = 1950;
        const constAge = currentYear - constYear;
        const yearsLivedThrough = currentYear - Math.max(year, constYear);
        const ageRatio = ((yearsLivedThrough / constAge) * 100).toFixed(0);

        // Count amendments and elections that happened AFTER birth year
        const amdSince1950 = 106; // total as of 2024
        // Amendment rate: approx 1.4/year
        const amendmentsBeforeBirth = year > constYear ? Math.floor((Math.min(year, currentYear) - constYear) * 1.4) : 0;
        const amendmentsSeen = Math.max(0, amdSince1950 - amendmentsBeforeBirth);

        // Elections - count those after birth
        const electionsAfterBirth = CALCULATOR_EVENTS.filter(e => e.year > year && e.year <= currentYear && e.event.toLowerCase().includes('elections')).length;

        // Find meaningful events
        const personalEvents = CALCULATOR_EVENTS.filter(e => e.year > year && e.year <= currentYear).slice(0, 3);

        const res = document.querySelector('#calc-results');
        res.classList.remove('hidden');
        res.style.display = '';

        document.querySelector('#amendments-val').innerText = '0';
        document.querySelector('#elections-val').innerText = '0';
        document.querySelector('#ratio-val').innerText = '0';

        this._animateNumber('amendments-val', 0, amendmentsSeen, 1800);
        this._animateNumber('elections-val', 0, Math.max(1, electionsAfterBirth), 1800);

        // Ratio: animate separately since it might be a percentage
        let ratioEnd = parseInt(ageRatio) || 0;
        this._animateNumber('ratio-val', 0, ratioEnd, 1800);

        if (typeof gsap !== 'undefined') {
            gsap.fromTo(res, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
        }

        // Update the "your events" section if it exists
        const eventsEl = document.querySelector('#calc-events');
        if (eventsEl && personalEvents.length > 0) {
            eventsEl.innerHTML = `
                <h4 class="heritage-header font-bold text-sm uppercase tracking-widest text-leather/60 mb-4">Constitutional milestones you've witnessed:</h4>
                <ul class="space-y-2">
                    ${personalEvents.map(ev => `
                        <li class="flex items-start gap-3 text-sm">
                            <span class="font-bold text-saffron heritage-header flex-shrink-0">${ev.year}</span>
                            <span class="text-leather/70 italic">${ev.event}</span>
                        </li>
                    `).join('')}
                </ul>
            `;
            // Remove BOTH the class and the inline style to ensure it shows
            eventsEl.classList.remove('hidden');
            eventsEl.style.display = 'block';
            if (typeof gsap !== 'undefined') {
                gsap.fromTo(eventsEl, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.5 });
            }
        }
    }

    _animateNumber(id, start, end, duration) {
        const el = document.getElementById(id);
        if (!el) return;
        const startTime = performance.now();
        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
            el.innerText = Math.round(start + (end - start) * eased);
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    }

    // ─── ANIMATIONS ────────────────────────────────────────────
    setupAnimations() {
        if (typeof gsap === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);

        // Scroll-triggered reveals
        gsap.utils.toArray('.scroll-reveal').forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
                    scrollTrigger: { trigger: el, start: 'top 88%', once: true }
                }
            );
        });

        // Gold shimmer for heritage headers in hero
        gsap.to('.gold-shimmer', {
            backgroundPosition: '200% center',
            duration: 3, repeat: -1, ease: 'linear'
        });

        // Stagger hero content in
        gsap.from('#hero .parchment-card', { opacity: 0, y: 60, duration: 1.2, ease: 'power3.out', delay: 0.3 });
    }

    // ─── PREAMBLE INTERACTION ──────────────────────────────────
    setupPreambleInteraction() {
        const explainMap = {
            "Sovereign": "Free from external control. India makes its own domestic and foreign policy decisions.",
            "Socialist": "Commitment to reducing inequality. The state works toward social and economic justice for all.",
            "Secular": "The state has no official religion. All faiths are treated with equal respect and protection.",
            "Democratic": "Government of the people, by the people, for the people. Citizens elect their representatives.",
            "Republic": "The head of state (President) is elected by citizens, not hereditary like a monarchy.",
            "Justice": "Social, economic, and political fairness for every citizen — the first promise of the Constitution.",
            "Liberty": "Freedom of thought, expression, belief, faith, and worship — the right to be yourself.",
            "Equality": "Equal status and opportunity for every citizen, regardless of background or birth.",
            "Fraternity": "A spirit of brotherhood that assures the dignity of the individual and national unity."
        };

        if (typeof gsap !== 'undefined') {
            gsap.fromTo('.handwritten',
                { opacity: 0 },
                { opacity: 1, stagger: 0.05, duration: 0.8, ease: 'power1.out',
                  scrollTrigger: { trigger: '#preamble-section', start: 'top 70%', once: true }
                }
            );
        }

        document.querySelectorAll('.pillar-target').forEach(el => {
            el.addEventListener('mouseenter', (e) => {
                const term = e.target.innerText.trim().replace(/[,;.]/g, '');
                const explanation = explainMap[term] || "A foundational principle of our democratic republic.";
                this._showTooltip(e, term, explanation);
            });
            el.addEventListener('mouseleave', () => this._hideTooltip());
            el.addEventListener('mousemove', (e) => this._moveTooltip(e));
        });
    }

    _showTooltip(e, term, text) {
        let tip = document.querySelector('#preamble-tooltip');
        if (!tip) {
            tip = document.createElement('div');
            tip.id = 'preamble-tooltip';
            tip.style.cssText = 'position:fixed;z-index:9999;max-width:280px;pointer-events:none;opacity:1';
            document.body.appendChild(tip);
        }
        tip.innerHTML = `<div style="background:#3D2B1F;color:#F4EBD0;padding:14px 16px;box-shadow:0 8px 32px rgba(0,0,0,0.3);border-left:4px solid #D4AF37;font-family:'Montserrat',sans-serif">
            <p style="font-family:'Cinzel',serif;font-weight:700;color:#FF9933;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px">${term}</p>
            <p style="font-size:13px;line-height:1.5;opacity:0.9">${text}</p>
        </div>`;
        tip.style.display = 'block';
        tip.style.opacity = '1';
        this._moveTooltip(e);
    }

    _moveTooltip(e) {
        const tip = document.querySelector('#preamble-tooltip');
        if (!tip || tip.style.display === 'none') return;
        const x = e.clientX + 16;
        const y = e.clientY + 16;
        const rect = tip.getBoundingClientRect();
        tip.style.left = `${Math.min(x, window.innerWidth - rect.width - 10)}px`;
        tip.style.top = `${Math.min(y, window.innerHeight - rect.height - 10)}px`;
    }

    _hideTooltip() {
        const tip = document.querySelector('#preamble-tooltip');
        if (tip) tip.style.display = 'none';
    }

    // ─── MOBILE NAV ────────────────────────────────────────────
    setupMobileNav() {
        const toggle = document.querySelector('#mobile-nav-toggle');
        const menu = document.querySelector('#mobile-nav-menu');
        if (!toggle || !menu) return;
        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('open');
            toggle.innerHTML = isOpen ? '✕' : '☰';
            if (typeof gsap !== 'undefined') {
                gsap.fromTo(menu, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.3 });
            }
        });
        // Close on link click
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                menu.classList.remove('open');
                toggle.innerHTML = '☰';
            });
        });
    }
}

// ============================================================
// 3. INIT
// ============================================================
window.app = new SwarajyaApp();
document.addEventListener('DOMContentLoaded', () => window.app.init());

// Shake animation for invalid input
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
@keyframes shake {
    0%,100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-5px); }
    80% { transform: translateX(5px); }
}
.text-indiangreen { color: #138808; }
.text-ashokablue { color: #000080; }
`;
document.head.appendChild(shakeStyle);
