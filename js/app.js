// Carousel functionality
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const prevBtn = document.querySelector('.carousel-button.prev');
const prev2Btn = document.querySelector('.carousel-button2.prev');
const nextBtn = document.querySelector('.carousel-button.next');
const next2Btn = document.querySelector('.carousel-button2.next');
let currentIndex = 0;
const totalSlides = slides.length;

// Update carousel position
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Previous button click
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

prev2Btn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

// Next button click
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

next2Btn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Auto-rotate carousel every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}, 5000);