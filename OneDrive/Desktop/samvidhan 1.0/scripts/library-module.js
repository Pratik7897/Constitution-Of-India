export class Library {
    constructor() {
        this.data = [];
        this.container = document.querySelector('#library-container');
        this.searchInput = document.querySelector('#library-search');
    }

    async init() {
        const response = await fetch('scripts/library.json');
        this.data = await response.json();
        this.render(this.data);
        this.setupSearch();
    }

    render(items) {
        if (!this.container) return;
        this.container.innerHTML = items.map(item => `
            <div class="parchment-card p-6 border-l-4 border-saffron mb-4 hover:shadow-lg transition-all scroll-reveal" data-tag="${item.tags.join(' ')}">
                <div class="flex justify-between items-center cursor-pointer" onclick="this.parentElement.classList.toggle('expanded')">
                    <div>
                        <h4 class="heritage-header text-lg font-bold">${item.title}</h4>
                        <p class="text-xs text-leather/60 italic">${item.articles || "Global Provisions"}</p>
                    </div>
                    <span class="transform transition-transform text-2xl">📜</span>
                </div>
                <div class="content h-0 overflow-hidden mt-4 opacity-0 transition-all">
                    <p class="preamble-text text-sm mb-4">${item.description}</p>
                    <ul class="list-disc list-inside text-sm space-y-2">
                        ${(item.points || []).map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

        // Apply GSAP reveal for items
        gsap.from(".parchment-card", {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            scrollTrigger: {
                trigger: "#library-container",
                start: "top 80%"
            }
        });
    }

    setupSearch() {
        if (!this.searchInput) return;
        this.searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = this.data.filter(item => 
                item.title.toLowerCase().includes(term) || 
                item.description.toLowerCase().includes(term) ||
                item.tags.some(tag => tag.toLowerCase().includes(term))
            );
            this.render(filtered);
        });
    }
}

// Add CSS for expansion
const style = document.createElement('style');
style.textContent = `
    .parchment-card.expanded .content {
        height: auto;
        opacity: 1;
        margin-top: 1rem;
    }
    .parchment-card.expanded span {
        transform: rotate(180deg);
    }
`;
document.head.appendChild(style);
