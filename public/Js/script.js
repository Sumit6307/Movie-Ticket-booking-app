document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.movies-carousel');
    carousels.forEach(carousel => {
        carousel.addEventListener('wheel', (event) => {
            event.preventDefault();
            carousel.scrollLeft += event.deltaY;
        });
    });

    let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const navBtns = document.querySelectorAll('.nav-btn');

    function showSlide(index) {

        slides.style.transform = `translateX(-${index * (100 + 3)}%)`;
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, 3800);

    navBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => showSlide(index));
    });

    const moviesLink = document.querySelector('nav ul li a[href=""]');
    const recommendedSection = document.getElementById('recommended');

    if (moviesLink && recommendedSection) {
        moviesLink.addEventListener('click', (event) => {
            event.preventDefault();
            recommendedSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const moviesLink = document.getElementById("movieslink")
    const laughterSection = document.getElementById('Laughter');  
    if (moviesLink && laughterSection) {
        moviesLink.addEventListener('click', (event) => {
            event.preventDefault();
            laughterSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const moviesLink = document.getElementById("events")
    const laughterSection = document.getElementById('popularevents');  
    if (moviesLink && laughterSection) {
        moviesLink.addEventListener('click', (event) => {
            event.preventDefault();
            laughterSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const moviesLink = document.getElementById("offerssection")
    const laughterSection = document.getElementById('offers');  
    if (moviesLink && laughterSection) {
        moviesLink.addEventListener('click', (event) => {
            event.preventDefault();
            laughterSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

function updateSearchField() {
    const city = document.getElementById("citySelect").value;
    const searchInput = document.getElementById("searchInput");
    if (city) {
        searchInput.value = city;
    }
}
