document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const images = document.querySelectorAll('.slider-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    function updateSlider() {
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    }

    function showImage(index) {
        currentIndex = index;
        updateSlider();
    }

    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);
    dots.forEach(dot => {
        dot.addEventListener('click', () => showImage(parseInt(dot.dataset.index)));
    });

    updateSlider();
});
