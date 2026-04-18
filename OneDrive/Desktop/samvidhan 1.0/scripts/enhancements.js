// ============================================================
// Swarajya Vidya – Enhancements v1.0
// Non-breaking additions for a richer learning experience
// ============================================================
(function () {
    'use strict';

    // ── SCROLL PROGRESS (Tricolor) ──────────────────────────────
    function initScrollProgress() {
        const fill = document.getElementById('scroll-progress-fill');
        if (!fill) return;
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docH = document.documentElement.scrollHeight - window.innerHeight;
            fill.style.width = (docH > 0 ? (scrollTop / docH) * 100 : 0) + '%';
        }, { passive: true });
    }

    // ── FUNDAMENTAL RIGHTS FLIP CARDS ──────────────────────────
    const RIGHTS = [
        {
            num: '01', icon: '⚖️', color: '#FF9933',
            title: 'Right to Equality', arts: 'Art. 14–18',
            front: 'Equality before law and equal protection of laws guaranteed to every person in India.',
            back: 'Art.14: Equality before law. Art.15: No discrimination on grounds of religion, race, sex or caste. Art.16: Equal opportunity in public employment. Art.17: Abolition of untouchability. Art.18: Abolition of titles.'
        },
        {
            num: '02', icon: '🕊️', color: '#138808',
            title: 'Right to Freedom', arts: 'Art. 19–22',
            front: 'Six freedoms — speech, assembly, association, movement, residence, and profession.',
            back: 'Art.19: Six fundamental freedoms. Art.20: Protection against arbitrary conviction. Art.21: Right to Life and Personal Liberty (most expansively interpreted). Art.22: Protection against arrest and unlawful detention.'
        },
        {
            num: '03', icon: '🚫', color: '#000080',
            title: 'Right Against Exploitation', arts: 'Art. 23–24',
            front: 'Abolishes human trafficking, forced labour (begar), and child labour in hazardous settings.',
            back: 'Art.23: Prohibits trafficking in human beings and all forms of forced labour. Art.24: No child below age 14 shall work in factories, mines or any hazardous occupation — a guarantee that every child deserves an education.'
        },
        {
            num: '04', icon: '🛕', color: '#D4AF37',
            title: 'Right to Religion', arts: 'Art. 25–28',
            front: 'Freedom of conscience and the right to freely profess, practise, and propagate religion.',
            back: 'Art.25–26: Freedom of religion for individuals and denominations. Art.27: No taxes for promotion of any religion. Art.28: No religious instruction in wholly State-funded institutions.'
        },
        {
            num: '05', icon: '📚', color: '#8B4513',
            title: 'Cultural & Educational Rights', arts: 'Art. 29–30',
            front: 'Rights of minorities to conserve their culture and establish educational institutions.',
            back: 'Art.29: Any group of citizens with a distinct language, script or culture has the right to conserve it. Art.30: All religious or linguistic minorities have the right to establish and administer educational institutions of their choice.'
        },
        {
            num: '06', icon: '🏛️', color: '#FF9933',
            title: 'Right to Constitutional Remedies', arts: 'Art. 32',
            front: '"The Heart and Soul of the Constitution" — Dr. Ambedkar. Move the Supreme Court directly if your rights are violated.',
            back: 'Art.32 makes Fundamental Rights real by allowing you to approach the Supreme Court directly. The Court can issue five writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto.'
        }
    ];

    function initRights() {
        const grid = document.getElementById('rights-flip-grid');
        if (!grid) return;
        grid.innerHTML = RIGHTS.map((r, i) => `
            <div class="flip-card" style="animation-delay:${i * 0.1}s">
                <div class="flip-card-inner">
                    <div class="flip-card-front" style="border-top:4px solid ${r.color}">
                        <span class="rights-num" style="color:${r.color}">${r.num}</span>
                        <div class="rights-icon-big">${r.icon}</div>
                        <h3 class="rights-card-title">${r.title}</h3>
                        <p class="rights-arts" style="color:${r.color}">${r.arts}</p>
                        <p class="rights-front-body">${r.front}</p>
                        <span class="flip-cta">Hover to learn more →</span>
                    </div>
                    <div class="flip-card-back" style="background:${r.color}">
                        <div class="rights-icon-big" style="font-size:2rem;margin-bottom:10px">${r.icon}</div>
                        <h3 class="rights-back-title-el">${r.title}</h3>
                        <p class="rights-back-body">${r.back}</p>
                    </div>
                </div>
            </div>
        `).join('');
        if (typeof gsap !== 'undefined') {
            gsap.from('.flip-card', {
                opacity: 0, y: 40, stagger: 0.1, duration: 0.7, ease: 'power2.out',
                scrollTrigger: { trigger: '#rights-flip-grid', start: 'top 82%', once: true }
            });
        }
    }

    // ── CONSTITUTIONAL TIMELINE ─────────────────────────────────
    const TIMELINE = [
        { year: '1946', label: 'Assembly Convenes', desc: 'Constituent Assembly first meets on Dec 9 under Dr. Sachchidananda Sinha.' },
        { year: '1946', label: 'Objectives Resolution', desc: 'Nehru moves the Objectives Resolution on Dec 13 — the seed of the Preamble.' },
        { year: '1947', label: 'Independence', desc: 'India gains independence on Aug 15. The Assembly becomes fully sovereign.' },
        { year: '1948', label: 'Draft Released', desc: 'Dr. Ambedkar presents the Draft Constitution on Feb 21 for public debate.' },
        { year: '1949', label: 'Constitution Adopted', desc: 'Adopted on Nov 26 — now celebrated as Samvidhan Diwas (Constitution Day).' },
        { year: '1950', label: 'Republic Day', desc: 'Comes into force on Jan 26, 1950 — India becomes a Republic.' },
        { year: '1951', label: '1st Amendment', desc: 'Ninth Schedule added to shield land reform laws from legal challenge.' },
        { year: '1976', label: '42nd Amendment', desc: '"Mini-Constitution" — Socialist, Secular & Integrity added to the Preamble.' },
        { year: '1978', label: '44th Amendment', desc: 'Right to Property removed from Fundamental Rights; Emergency-era changes reversed.' },
        { year: '1992', label: 'Panchayati Raj', desc: '73rd & 74th Amendments give constitutional status to local self-governments.' },
        { year: '2002', label: 'Right to Education', desc: '86th Amendment — free & compulsory education becomes a Fundamental Right (Art 21A).' },
        { year: '2019', label: 'Art. 370 Abrogated', desc: 'J&K\'s special status revoked; reorganised into two Union Territories.' },
        { year: '2024', label: '18th Elections', desc: 'World\'s largest democratic exercise — 960 million registered voters.' }
    ];

    function initTimeline() {
        const track = document.getElementById('timeline-track');
        if (!track) return;
        track.innerHTML = TIMELINE.map((ev, i) => `
            <div class="tl-item ${i % 2 === 0 ? 'tl-left' : 'tl-right'}">
                <div class="tl-content">
                    <span class="tl-year">${ev.year}</span>
                    <h4 class="tl-label">${ev.label}</h4>
                    <p class="tl-desc">${ev.desc}</p>
                </div>
                <div class="tl-dot"></div>
            </div>
        `).join('');
        if (typeof gsap !== 'undefined') {
            gsap.utils.toArray('.tl-item').forEach((el, i) => {
                gsap.from(el, {
                    opacity: 0, x: i % 2 === 0 ? -30 : 30, duration: 0.6, ease: 'power2.out',
                    scrollTrigger: { trigger: el, start: 'top 88%', once: true }
                });
            });
        }
    }

    // ── CONSTITUTION DAY COUNTDOWN ──────────────────────────────
    function initCountdown() {
        const el = document.getElementById('constitution-day-countdown');
        if (!el) return;
        function update() {
            const now = new Date();
            const yr = now.getMonth() >= 10 ? now.getFullYear() + 1 : now.getFullYear();
            const diff = new Date(yr, 10, 26) - now;
            if (diff <= 0) {
                el.innerHTML = `<span class="cd-live">🎉 Today is Samvidhan Diwas!</span>`;
            } else {
                const d = Math.floor(diff / 86400000);
                const h = Math.floor((diff % 86400000) / 3600000);
                const m = Math.floor((diff % 3600000) / 60000);
                el.innerHTML = `
                    <span class="cd-label">Samvidhan Diwas (Nov 26) in</span>
                    <span class="cd-unit">${d}<small>d</small></span>
                    <span class="cd-sep">:</span>
                    <span class="cd-unit">${h}<small>h</small></span>
                    <span class="cd-sep">:</span>
                    <span class="cd-unit">${m}<small>m</small></span>
                `;
            }
        }
        update();
        setInterval(update, 60000);
    }

    // ── ARTICLE SPOTLIGHT (random each load) ───────────────────
    const SPOTLIGHTS = [
        { art: 'Article 21', title: 'Right to Life & Liberty', fact: 'Expanded by the Supreme Court to include over 35 rights — from right to food to right to privacy.' },
        { art: 'Article 32', title: 'Constitutional Remedies', fact: 'You can directly petition the Supreme Court if your Fundamental Rights are violated. Ambedkar called it the "Heart & Soul".' },
        { art: 'Article 14', title: 'Equality Before Law', fact: 'Guarantees every person — citizen and non-citizen alike — equality before the law within India.' },
        { art: 'Article 368', title: 'Amendment Power', fact: 'Parliament can amend the Constitution but cannot destroy its "Basic Structure" — a doctrine born in Kesavananda Bharati (1973).' },
        { art: 'Article 352', title: 'National Emergency', fact: 'Used only 3 times: 1962 (China war), 1971 (Bangladesh war), and 1975–77 (the infamous Emergency under Indira Gandhi).' },
        { art: 'Article 51A', title: 'Fundamental Duties', fact: 'Added in 1976 by the 42nd Amendment. India borrowed the concept of codified duties from the Soviet (USSR) Constitution.' }
    ];

    function initSpotlight() {
        const el = document.getElementById('article-spotlight');
        if (!el) return;
        const s = SPOTLIGHTS[Math.floor(Math.random() * SPOTLIGHTS.length)];
        el.innerHTML = `
            <span class="sp-art">${s.art}</span>
            <h4 class="sp-title">${s.title}</h4>
            <p class="sp-fact">${s.fact}</p>
        `;
    }

    // ── INIT ────────────────────────────────────────────────────
    document.addEventListener('DOMContentLoaded', () => {
        initScrollProgress();
        initRights();
        initTimeline();
        initCountdown();
        initSpotlight();
    });
}());
