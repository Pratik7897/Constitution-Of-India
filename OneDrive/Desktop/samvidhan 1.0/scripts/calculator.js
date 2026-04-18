function initCalculator() {
    const calcBtn = document.getElementById('calc-btn');
    if (!calcBtn) return;

    calcBtn.addEventListener('click', () => {
        const birthYear = parseInt(document.getElementById('birth-year').value);
        const currentYear = new Date().getFullYear();
        
        if (isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear) {
            alert("Please provide a valid year of birth to proceed.");
            return;
        }

        const userAge = currentYear - birthYear;
        const constAge = currentYear - 1950;
        
        // Accurate approximation for Heritage theme
        const totalAmendments = 106; 
        const totalElections = 17;   
        
        const amendmentsSince = Math.max(0, Math.round((userAge / constAge) * totalAmendments));
        const electionsLived = Math.max(0, Math.round((userAge / constAge) * totalElections));
        const ageRatio = (constAge / userAge).toFixed(2);

        animateValue('amendments-count', 0, amendmentsSince, 2000);
        animateValue('elections-count', 0, electionsLived, 2000);
        animateValue('ratio-display', 0, ageRatio, 2000);
        
        const results = document.getElementById('calc-results');
        results.classList.remove('hidden');
        gsap.from(results, { opacity: 0, y: 30, duration: 1.2, ease: 'power3.out' });
    });
}

function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const val = progress * (parseFloat(end) - start) + start;
        obj.innerHTML = id === 'ratio-display' ? val.toFixed(2) : Math.floor(val);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', initCalculator);
