document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const totalSlidesSpan = document.getElementById('total-slides');
    const currentSlideSpan = document.getElementById('current-slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentSlide = 0;
    const totalSlides = slides.length;

    totalSlidesSpan.textContent = totalSlides;

    function updateSlide() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        currentSlideSpan.textContent = currentSlide + 1;
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlide();
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Navegação via teclado (Setas Esquerda e Direita)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
            nextSlide();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            prevSlide();
        }
    });

    updateSlide();
});
