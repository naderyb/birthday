// Confetti animation
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Confetti {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 8 + 5;
        this.speedY = Math.random() * 3 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.color = this.randomColor();
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
    }

    randomColor() {
        const colors = [
            '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', 
            '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe',
            '#fd79a8', '#fdcb6e', '#e17055', '#00b894'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;

        if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

const confettiArray = [];
for (let i = 0; i < 100; i++) {
    confettiArray.push(new Confetti());
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiArray.forEach(confetti => {
        confetti.update();
        confetti.draw();
    });
    requestAnimationFrame(animateConfetti);
}

animateConfetti();

// Music functionality
const musicButton = document.getElementById('musicButton');
let isPlaying = false;

// Using Web Audio API to create a simple birthday tune
let audioContext;
let currentNotes = [];

function playNote(frequency, duration, startTime) {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
    
    currentNotes.push(oscillator);
}

function playHappyBirthday() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    const now = audioContext.currentTime;
    const noteDuration = 0.4;

    // Happy Birthday melody notes (simplified version)
    const melody = [
        { note: 'C', duration: 0.3 },
        { note: 'C', duration: 0.2 },
        { note: 'D', duration: 0.5 },
        { note: 'C', duration: 0.5 },
        { note: 'F', duration: 0.5 },
        { note: 'E', duration: 1.0 },
        { note: 'C', duration: 0.3 },
        { note: 'C', duration: 0.2 },
        { note: 'D', duration: 0.5 },
        { note: 'C', duration: 0.5 },
        { note: 'G', duration: 0.5 },
        { note: 'F', duration: 1.0 },
        { note: 'C', duration: 0.3 },
        { note: 'C', duration: 0.2 },
        { note: 'C5', duration: 0.5 },
        { note: 'A', duration: 0.5 },
        { note: 'F', duration: 0.5 },
        { note: 'E', duration: 0.5 },
        { note: 'D', duration: 0.5 },
        { note: 'Bb', duration: 0.3 },
        { note: 'Bb', duration: 0.2 },
        { note: 'A', duration: 0.5 },
        { note: 'F', duration: 0.5 },
        { note: 'G', duration: 0.5 },
        { note: 'F', duration: 1.0 }
    ];

    const notes = {
        'C': 261.63,
        'D': 293.66,
        'E': 329.63,
        'F': 349.23,
        'G': 392.00,
        'A': 440.00,
        'Bb': 466.16,
        'C5': 523.25
    };

    let currentTime = now;
    melody.forEach(({ note, duration }) => {
        playNote(notes[note], duration, currentTime);
        currentTime += duration;
    });

    return currentTime - now;
}

function stopMusic() {
    currentNotes.forEach(oscillator => {
        try {
            oscillator.stop();
        } catch (e) {
            // Note already stopped
        }
    });
    currentNotes = [];
}

musicButton.addEventListener('click', () => {
    if (!isPlaying) {
        const duration = playHappyBirthday();
        musicButton.textContent = '🎵 Playing...';
        musicButton.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
        isPlaying = true;

        setTimeout(() => {
            musicButton.textContent = '🎵 Play Birthday Song';
            musicButton.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            isPlaying = false;
        }, duration * 1000);
    } else {
        stopMusic();
        musicButton.textContent = '🎵 Play Birthday Song';
        musicButton.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        isPlaying = false;
    }
});

// Add extra confetti burst on page load
window.addEventListener('load', () => {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            confettiArray.push(new Confetti());
        }, i * 50);
    }
});

// Hearts floating effect on specific words
const messages = document.querySelectorAll('.message');
messages.forEach(message => {
    message.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    message.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

console.log('🎉 Happy Birthday! Made with ❤️');

// Added: robust mobile-friendly audio start tied to user gesture
(function() {
    const btn = document.getElementById('musicButton'); // [`musicButton`](index.html)
    const audioEl = document.getElementById('birthday-audio'); // [`birthday-audio`](index.html)
    let audioCtx = null;
    let source = null;

    if (!btn || !audioEl) return;

    function initAudioAndToggle(evt) { // [`initAudioAndToggle`](script.js)
        // Prevent duplicate touch/click events on some devices
        if (evt && evt.type === 'touchstart') evt.preventDefault();

        // Create AudioContext and connect the media element on first gesture
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            try {
                source = audioCtx.createMediaElementSource(audioEl);
                source.connect(audioCtx.destination);
            } catch (e) {
                // Some browsers may block createMediaElementSource until allowed; still try to play
                console.warn('MediaElementSource error:', e);
            }
        }

        // Resume suspended context (common on iOS/Chrome)
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume().catch(() => {});
        }

        if (audioEl.paused) {
            // Ensure playsinline and unmuted
            audioEl.playsInline = true;
            audioEl.muted = false;
            const p = audioEl.play();
            if (p && p.catch) p.catch(err => console.warn('Play failed:', err));
            btn.textContent = '⏸️ Pause Birthday Song';
        } else {
            audioEl.pause();
            btn.textContent = '🎵 Play Birthday Song';
        }

        // Remove touchstart listener after first real interaction (optional)
        // so it doesn't fire twice on some devices
        btn.removeEventListener('touchstart', initAudioAndToggle);
    }

    // Use both touchstart and click to cover mobile + desktop
    btn.addEventListener('click', initAudioAndToggle);
    btn.addEventListener('touchstart', initAudioAndToggle, { passive: false });
})();
