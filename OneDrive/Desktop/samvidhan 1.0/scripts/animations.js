document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // Gold Shimmer Animation
    gsap.to('.gold-shimmer', {
        backgroundPosition: '200% center',
        duration: 3,
        repeat: -1,
        ease: 'linear'
    });

    // Rights Data
    const rights = [
        { 
            title: "Right to Equality", 
            short: "Equality before law and equal protection of laws.",
            detail: "Focuses on equality before the law, the prohibition of discrimination on grounds of religion, race, caste, sex or place of birth, and the historic abolition of titles to ensure a truly democratic society."
        },
        { 
            title: "Right to Freedom", 
            short: "Freedom of speech, assembly, and movement.",
            detail: "Guarantees the freedom of speech and expression, peaceful assembly without arms, and the right to move freely throughout the territory of Bharat, forming the cornerstone of individual liberty."
        },
        { 
            title: "Right Against Exploitation", 
            short: "Prohibition of forced labor and child labor.",
            detail: "A critical safeguard that prohibits all forms of forced labor, human trafficking, and the employment of children in hazardous industries, protecting the dignity of every citizen."
        }
    ];

    const rightsGrid = document.getElementById('rights-grid');
    
    rights.forEach((right, i) => {
        const box = document.createElement('div');
        box.className = 'anti-gravity-box scroll-piece';
        box.innerHTML = `
            <div class="chakra-bg">
                <img src="assets/chakra.png" class="rotating-chakra" style="filter: sepia(1) saturate(5) hue-rotate(10deg);">
            </div>
            <div class="relative z-10">
                <h3 class="heritage-header text-2xl mb-2">${right.title}</h3>
                <p class="preamble-text italic text-leather/60 mb-6">${right.short}</p>
                <div class="scroll-content opacity-0 transition-opacity duration-500">
                    <p class="preamble-text text-lg leading-relaxed text-leather/80 border-t border-leather/10 pt-4">
                        ${right.detail}
                    </p>
                </div>
            </div>
        `;
        rightsGrid.appendChild(box);

        // Anti-Gravity Floating Motion
        gsap.to(box, {
            y: "random(-15, 15)",
            x: "random(-10, 10)",
            rotation: "random(-1, 1)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Click to Unfurl
        box.addEventListener('click', () => {
            const isActive = box.classList.toggle('active');
            const content = box.querySelector('.scroll-content');
            const chakra = box.querySelector('.chakra-bg');

            if (isActive) {
                gsap.to(content, { opacity: 1, delay: 0.3 });
                gsap.to(chakra, { opacity: 0.15, duration: 1 });
            } else {
                gsap.to(content, { opacity: 0 });
                gsap.to(chakra, { opacity: 0.05, duration: 1 });
            }
        });
    });

    // Preamble Text Reveal
    const preambleEl = document.getElementById('preamble-text');
    const fullPreamble = "WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens: JUSTICE, social, economic and political; LIBERTY of thought, expression, belief, faith and worship; EQUALITY of status and of opportunity; and to promote among them all FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation; IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.";
    if (preambleEl) {
        ScrollTrigger.create({
            trigger: '#preamble',
            start: 'top 70%',
            onEnter: () => {
                gsap.to(preambleEl, {
                    duration: 15,
                    text: fullPreamble,
                    ease: 'none'
                });
            },
            once: true
        });
    }
});
