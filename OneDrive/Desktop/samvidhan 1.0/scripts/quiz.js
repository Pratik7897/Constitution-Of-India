const questions = [
    { q: "Who is known as the 'Chief Architect of the Indian Constitution'?", a: "Dr. B.R. Ambedkar", options: ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Mahatma Gandhi", "Sardar Patel"] },
    { q: "The National Anthem of India, 'Jana Gana Mana', was first sung in which year?", a: "1911", options: ["1905", "1911", "1947", "1950"] },
    { q: "Which part of the Constitution is referred to as the 'Magna Carta' of India?", a: "Part III", options: ["Part I", "Part III", "Part IV", "Part V"] },
    { q: "How many colors are there in the Indian National Flag (including the wheel)?", a: "4", options: ["3", "4", "5", "6"] },
    { q: "Who was the first President of the Constituent Assembly?", a: "Dr. Sachchidananda Sinha", options: ["Dr. Rajendra Prasad", "Dr. B.R. Ambedkar", "Dr. Sachchidananda Sinha", "B.N. Rau"] },
    { q: "The 'Dandi March' was a protest against several things, but primarily which tax?", a: "Salt Tax", options: ["Income Tax", "Land Tax", "Salt Tax", "Textile Tax"] },
    { q: "In which year did India become a Republic?", a: "1950", options: ["1947", "1948", "1950", "1952"] },
    { q: "What does the 'Ashoka Chakra' in the center of the flag represent?", a: "Wheel of Dharma", options: ["Wheel of Dharma", "Wheel of Peace", "Wheel of Progress", "Wheel of Justice"] },
    { q: "Who gave the slogan 'Jai Hind'?", a: "Subhash Chandra Bose", options: ["Mahatma Gandhi", "Subhash Chandra Bose", "Bhagat Singh", "Lala Lajpat Rai"] },
    { q: "How many Fundamental Duties are mentioned in the Constitution?", a: "11", options: ["8", "10", "11", "12"] },
    { q: "Who was the first woman to become the President of India?", a: "Pratibha Patil", options: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Meira Kumar"] },
    { q: "Which city is known as the 'City of the Constitution' where it was signed?", a: "New Delhi", options: ["New Delhi", "Kolkata", "Mumbai", "Pune"] },
    { q: "The concept of 'Justice' (Social, Economic, Political) is taken from which Revolution?", a: "Russian", options: ["French", "American", "Russian", "Indian"] },
    { q: "Who was the first Prime Minister to unfurl the flag at Red Fort?", a: "Jawaharlal Nehru", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Lal Bahadur Shastri"] },
    { q: "Which Article gives the Right to Vote in India?", a: "Article 326", options: ["Article 19", "Article 21", "Article 324", "Article 326"] },
    { q: "The Ashoka Stambha at Sarnath was built during which Empire?", a: "Mauryan", options: ["Gupta", "Mauryan", "Mughal", "Maratha"] },
    { q: "What is the official ratio of the width to the length of the National Flag?", a: "2:3", options: ["1:2", "2:3", "3:4", "3:5"] },
    { q: "Who wrote 'Vande Mataram'?", a: "Bankim Chandra Chattopadhyay", options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Sri Aurobindo"] },
    { q: "The Fundamental Rights are inspired by the Constitution of which country?", a: "USA", options: ["UK", "USA", "Canada", "France"] },
    { q: "Who was the Chairman of the Union Powers Committee of the Constituent Assembly?", a: "Jawaharlal Nehru", options: ["Sardar Patel", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "J.B. Kripalani"] }
];

let currentQuestion = 0;
let score = 0;

function initQuiz() {
    renderQuestion();
}

function renderQuestion() {
    const container = document.getElementById('quiz-container');
    const q = questions[currentQuestion];
    
    container.innerHTML = `
        <div class="quiz-piece">
            <h3 class="heritage-header text-xl mb-4 text-leather/60">Question ${currentQuestion + 1} of ${questions.length}</h3>
            <p class="preamble-text text-2xl mb-10 italic text-leather">${q.q}</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${q.options.map(opt => `
                    <button class="quiz-opt p-5 border border-leather/20 hover:border-saffron hover:bg-saffron/5 transition-all text-lg font-bold heritage-header" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')">
                        ${opt}
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    gsap.from('.quiz-piece', { opacity: 0, x: 50, duration: 0.8, ease: 'power2.out' });
}

window.checkAnswer = (answer) => {
    const q = questions[currentQuestion];
    const overlay = document.getElementById('quiz-chakra-overlay');
    
    if (answer === q.a) {
        score++;
        // Correct Answer Feedback: Ashoka Chakra Fade-in & Rotate
        gsap.to(overlay, { 
            opacity: 1, 
            duration: 0.5, 
            onComplete: () => {
                gsap.to(overlay, { opacity: 0, duration: 0.5, delay: 1 });
            }
        });
        gsap.to(overlay.querySelector('img'), { rotate: '+=90', duration: 1 });
    } else {
        // Shorter feedback for incorrect
    }

    // Ink Bleed / Paper Flip transition to next question
    gsap.to('.quiz-piece', { 
        opacity: 0, 
        x: -50, 
        duration: 0.5, 
        onComplete: () => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                renderQuestion();
            } else {
                showResults();
            }
        } 
    });
};

function showResults() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="text-center">
            <h3 class="heritage-header text-4xl mb-4 text-saffron">Jai Hind!</h3>
            <p class="preamble-text text-2xl mb-10 italic text-leather">You have accomplished a score of ${score} / ${questions.length}</p>
            <button class="border-2 border-leather px-10 py-4 heritage-header font-bold hover:bg-leather hover:text-white transition-all" onclick="location.reload()">Re-walk the Path</button>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', initQuiz);
