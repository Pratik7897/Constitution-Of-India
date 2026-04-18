const facts = [
    "The original Constitution was not printed; it was handwritten by Prem Behari Narain Raizada.",
    "It took 2 years, 11 months, and 18 days to complete the Constitution.",
    "The original copies are stored in special helium-filled cases at the Parliament Library.",
    "The Indian Constitution is the longest written constitution of any sovereign country in the world.",
    "The concept of Liberty, Equality, and Fraternity was borrowed from the French Constitution."
];

let factIndex = 0;

function updateFact() {
    const factEl = document.getElementById('fact-text');
    if (!factEl) return;

    gsap.to(factEl, {
        rotateX: 90,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            factIndex = (factIndex + 1) % facts.length;
            factEl.innerText = facts[factIndex];
            gsap.fromTo(factEl, 
                { rotateX: -90, opacity: 0 },
                { rotateX: 0, opacity: 1, duration: 0.5 }
            );
        }
    });
}

// Update every 20 minutes (using 10 seconds for demo/preview purposes, can be changed back)
setInterval(updateFact, 10000); 

document.addEventListener('DOMContentLoaded', () => {
    const factEl = document.getElementById('fact-text');
    if (factEl) factEl.innerText = facts[0];
});
