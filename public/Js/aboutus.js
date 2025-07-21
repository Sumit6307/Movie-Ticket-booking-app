// Smooth scroll to sections
document.querySelector('.scroll-down').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Fade-in effects for about section cards on scroll
window.addEventListener('scroll', function() {
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach((card) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (cardPosition < screenPosition) {
            card.classList.add('fade-in');
        }
    });
});

// Sticky header logic
const header = document.querySelector('#header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// General fade-in on scroll effect for sections
function fadeInOnScroll() {
    const sections = document.querySelectorAll('.fade-section');
    sections.forEach((section) => {
        const sectionPos = section.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.2;
        if (sectionPos < screenPos) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);

// Initialize animations on page load
window.onload = function() {
    fadeInOnScroll();  // Check if any sections should be visible on load
    const cards = document.querySelectorAll('.about-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        }, index * 300);  // Staggered effect
    });
};
