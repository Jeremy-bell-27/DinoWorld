let targetPos = 0;
let currentPos = 0;
const speed = 0.25;
const easing = 0.07;

const page = document.querySelector(".page-dinosaures");

document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    targetPos = -scrollTop * speed;

    // Calcul de l'opacité entre 0.25 et 0.45 selon le scroll
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let opacity = 0.25 + (scrollTop / maxScroll) * 0.2;
    opacity = Math.min(Math.max(opacity, 0.25), 0.45);

    // Appliquer l'opacité au pseudo-élément via variable CSS
    page.style.setProperty('--overlay-opacity', opacity);
});

function animateBackground() {
    currentPos += (targetPos - currentPos) * easing;
    document.body.style.backgroundPositionY = `${currentPos}px`;
    requestAnimationFrame(animateBackground);
}

animateBackground();

document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("dino-audio");

    document.querySelectorAll(".btn-dino").forEach(button => {
        button.addEventListener("click", () => {
            const soundPath = button.getAttribute("data-sound");
            audioPlayer.src = soundPath;
            audioPlayer.currentTime = 0;
            audioPlayer.play().catch(err => {
                console.warn("Impossible de lire le son :", err);
            });
        });
    });
});