const audioToggle = document.getElementById('audio-toggle');
let isPlaying = false;
let audio = null;

// Replace the URL below with a local path to a patriotic track (e.g., assets/heritage_drone.mp3)
const AUDIO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Placeholder for drone/cinematic audio

function toggleAudio() {
    if (!audio) {
        audio = new Audio(AUDIO_URL);
        audio.loop = true;
        audio.volume = 0.1; // Very low volume as requested
    }

    if (isPlaying) {
        audio.pause();
        audioToggle.classList.remove('audio-pulse');
        audioToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
        `;
    } else {
        audio.play().catch(e => console.log("Audio play blocked by browser. Click anywhere to play."));
        audioToggle.classList.add('audio-pulse');
        audioToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
        `;
    }
    isPlaying = !isPlaying;
}

audioToggle.addEventListener('click', toggleAudio);
