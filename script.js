// Cursor following effect with Sambar Vada & Sparkles
const vadaCursor = document.getElementById('vada-cursor');

document.addEventListener('mousemove', (e) => {
    vadaCursor.style.left = e.clientX + 'px';
    vadaCursor.style.top = e.clientY + 'px';

    if (Math.random() < 0.35) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'cursor-sparkle';
    const symbols = ['⭐', '✨', '🧋', '💫', '🌿'];
    sparkle.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    sparkle.style.fontSize = (Math.random() * 10 + 10) + 'px';
    sparkle.style.left = (x + (Math.random() * 16 - 8)) + 'px';
    sparkle.style.top = (y + (Math.random() * 16 - 8)) + 'px';
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 700);
}

// Typing effect for greeting
const greetingText = "Hey You Know What! You're the most awesome & funniest best friend ever! ⭐";
const greetingElement = document.querySelector('.greeting');
let charIndex = 0;

function typeGreeting() {
    if (charIndex < greetingText.length) {
        greetingElement.textContent += greetingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeGreeting, 80);
    }
}

// Create floating elements
const floatingElements = ['⭐', '✨', '🧋', '🏆', '👑', '🤝'];
function createFloating() {
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = floatingElements[Math.floor(Math.random() * floatingElements.length)];
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = Math.random() * 100 + 'vh';
    element.style.fontSize = (Math.random() * 20 + 20) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -500,
        x: Math.random() * 100 - 50,
        rotation: Math.random() * 360,
        duration: Math.random() * 5 + 5,
        opacity: 1,
        ease: "none",
        onComplete: () => element.remove()
    });
}

// Initialize animations
window.addEventListener('load', () => {
    gsap.to('h1', {
        opacity: 1,
        duration: 1,
        y: 20,
        ease: "bounce.out"
    });

    gsap.to('.cta-button', {
        opacity: 1,
        duration: 1,
        y: -20,
        ease: "back.out"
    });

    typeGreeting();
    setInterval(createFloating, 1000);
});

// Button click page transition
const button = document.querySelector('.cta-button');
button.addEventListener('click', () => {
    gsap.to('body', {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
            window.location.href = 'cause.html';
        }
    });
});